-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Insert dummy profiles
INSERT INTO profiles (id, full_name, email, company, role)
VALUES
    ('d7bed82c-5f89-4d6e-89d9-0d0e9d23756c', 'John Smith', 'john@example.com', 'Acme Ventures', 'Managing Partner'),
    ('e9b6c8a3-4f12-4d6e-8c5a-9b7e3d2c1f8a', 'Sarah Johnson', 'sarah@example.com', 'Tech Investments LLC', 'Investment Director'),
    ('f8c7d9e6-3b2a-4c5d-9e8f-7a6b5c4d3e2a', 'Michael Chen', 'michael@example.com', 'Innovation Capital', 'Principal');

-- Insert dummy SPVs
INSERT INTO spvs (id, name, description, status, target_size, current_size, created_by)
VALUES
    ('a1b2c3d4-e5f6-4a5b-9c8d-7e6f5a4b3c2d', 'AI Robotics SPV', 'Investment in cutting-edge robotics startup', 'active', 5000000, 3750000, 'd7bed82c-5f89-4d6e-89d9-0d0e9d23756c'),
    ('b2c3d4e5-f6a7-4b6c-8d1e-8f7a6b5c4d3e', 'HealthTech Fund I', 'Digital health platform investment', 'draft', 2000000, 0, 'e9b6c8a3-4f12-4d6e-8c5a-9b7e3d2c1f8a'),
    ('c3d4e5f6-a7b8-4c7d-9e2f-9a8b7c6d5e4f', 'Green Energy SPV', 'Renewable energy technology investment', 'active', 10000000, 7500000, 'd7bed82c-5f89-4d6e-89d9-0d0e9d23756c');

-- Insert dummy documents
INSERT INTO documents (id, spv_id, name, type, url, analysis)
VALUES
    ('d4e5f6a7-b8c9-4d8e-a3b4-1a2b3c4d5e6f', 'a1b2c3d4-e5f6-4a5b-9c8d-7e6f5a4b3c2d', 'AI Robotics Pitch Deck', 'pitch_deck', 'https://example.com/docs/ai-robotics-pitch.pdf', '{"market_size": "5B", "growth_rate": "25%", "competition": "moderate"}'),
    ('e5f6a7b8-c9d0-4e9f-8a4b-2b3c4d5e6f7a', 'b2c3d4e5-f6a7-4b6c-8d1e-8f7a6b5c4d3e', 'HealthTech Financial Model', 'financial_model', 'https://example.com/docs/healthtech-model.xlsx', '{"revenue_2024": "10M", "growth": "100%", "margin": "65%"}'),
    ('f6a7b8c9-d0e1-4f0a-9b5c-3c4d5e6f7a8b', 'c3d4e5f6-a7b8-4c7d-9e2f-9a8b7c6d5e4f', 'Green Energy Legal Doc', 'legal_doc', 'https://example.com/docs/green-energy-legal.pdf', null);

-- Insert dummy LPs
INSERT INTO lps (id, name, email, status, investment_capacity)
VALUES
    ('a7b8c9d0-e1f2-4a1b-8c6d-4e5f6a7b8c9d', 'Alex Thompson', 'alex@example.com', 'committed', 1000000),
    ('b8c9d0e1-f2a3-4b2c-9d7e-5f6a7b8c9d0e', 'Emily Rodriguez', 'emily@example.com', 'interested', 500000),
    ('c9d0e1f2-a3b4-4c3d-ae8f-6a7b8c9d0e1f', 'David Kim', 'david@example.com', 'committed', 2000000);

-- Insert dummy investments
INSERT INTO investments (id, spv_id, lp_id, amount, status)
VALUES
    ('d0e1f2a3-b4c5-4d4e-bf9a-7b8c9d0e1f2a', 'a1b2c3d4-e5f6-4a5b-9c8d-7e6f5a4b3c2d', 'a7b8c9d0-e1f2-4a1b-8c6d-4e5f6a7b8c9d', 750000, 'funded'),
    ('e1f2a3b4-c5d6-4e5f-ca0b-8c9d0e1f2a3b', 'c3d4e5f6-a7b8-4c7d-9e2f-9a8b7c6d5e4f', 'c9d0e1f2-a3b4-4c3d-ae8f-6a7b8c9d0e1f', 1500000, 'committed'),
    ('f2a3b4c5-d6e7-4f6a-db1c-9d0e1f2a3b4c', 'a1b2c3d4-e5f6-4a5b-9c8d-7e6f5a4b3c2d', 'b8c9d0e1-f2a3-4b2c-9d7e-5f6a7b8c9d0e', 250000, 'soft_circle');

-- Insert dummy equity holdings
INSERT INTO equity_holdings (id, user_id, company_name, shares, share_type, vesting_start, vesting_end, vesting_schedule, current_value)
VALUES
    ('a3b4c5d6-e7f8-4a7b-ec2d-0e1f2a3b4c5d', 'd7bed82c-5f89-4d6e-89d9-0d0e9d23756c', 'TechCorp Inc.', 10000, 'options', '2024-01-01', '2028-01-01', 
    '{
        "schedule": [
            {"date": "2024-01-01", "percentage": 25},
            {"date": "2025-01-01", "percentage": 25},
            {"date": "2026-01-01", "percentage": 25},
            {"date": "2027-01-01", "percentage": 25}
        ]
    }',
    500000);
