-- Create custom types
CREATE TYPE spv_status AS ENUM ('draft', 'active', 'closed');
CREATE TYPE document_type AS ENUM ('pitch_deck', 'legal_doc', 'financial_model');
CREATE TYPE lp_status AS ENUM ('interested', 'committed', 'passed');
CREATE TYPE investment_status AS ENUM ('soft_circle', 'committed', 'funded');
CREATE TYPE share_type AS ENUM ('common', 'preferred', 'options');

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create profiles table (independent table now, not linked to auth)
CREATE TABLE profiles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    full_name TEXT,
    email TEXT UNIQUE,
    company TEXT,
    role TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create SPVs table
CREATE TABLE spvs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    description TEXT,
    status spv_status DEFAULT 'draft',
    target_size NUMERIC(15,2),
    current_size NUMERIC(15,2) DEFAULT 0,
    created_by UUID REFERENCES profiles(id) ON DELETE SET NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create documents table
CREATE TABLE documents (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    spv_id UUID REFERENCES spvs(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    type document_type NOT NULL,
    url TEXT NOT NULL,
    analysis JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create LPs table
CREATE TABLE lps (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    status lp_status DEFAULT 'interested',
    investment_capacity NUMERIC(15,2),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create investments table
CREATE TABLE investments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    spv_id UUID REFERENCES spvs(id) ON DELETE CASCADE,
    lp_id UUID REFERENCES lps(id) ON DELETE CASCADE,
    amount NUMERIC(15,2) NOT NULL,
    status investment_status DEFAULT 'soft_circle',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create equity holdings table
CREATE TABLE equity_holdings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    company_name TEXT NOT NULL,
    shares NUMERIC(15,2) NOT NULL,
    share_type share_type NOT NULL,
    vesting_start TIMESTAMP WITH TIME ZONE,
    vesting_end TIMESTAMP WITH TIME ZONE,
    vesting_schedule JSONB,
    current_value NUMERIC(15,2),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = TIMEZONE('utc'::text, NOW());
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Add updated_at triggers to all tables
CREATE TRIGGER update_profiles_updated_at
    BEFORE UPDATE ON profiles
    FOR EACH ROW
    EXECUTE PROCEDURE update_updated_at_column();

CREATE TRIGGER update_spvs_updated_at
    BEFORE UPDATE ON spvs
    FOR EACH ROW
    EXECUTE PROCEDURE update_updated_at_column();

CREATE TRIGGER update_documents_updated_at
    BEFORE UPDATE ON documents
    FOR EACH ROW
    EXECUTE PROCEDURE update_updated_at_column();

CREATE TRIGGER update_lps_updated_at
    BEFORE UPDATE ON lps
    FOR EACH ROW
    EXECUTE PROCEDURE update_updated_at_column();

CREATE TRIGGER update_investments_updated_at
    BEFORE UPDATE ON investments
    FOR EACH ROW
    EXECUTE PROCEDURE update_updated_at_column();

CREATE TRIGGER update_equity_holdings_updated_at
    BEFORE UPDATE ON equity_holdings
    FOR EACH ROW
    EXECUTE PROCEDURE update_updated_at_column();

-- Create indexes for better performance
CREATE INDEX spvs_created_by_idx ON spvs(created_by);
CREATE INDEX documents_spv_id_idx ON documents(spv_id);
CREATE INDEX investments_spv_id_idx ON investments(spv_id);
CREATE INDEX investments_lp_id_idx ON investments(lp_id);
CREATE INDEX equity_holdings_user_id_idx ON equity_holdings(user_id);
