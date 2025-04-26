export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          full_name: string | null
          email: string | null
          company: string | null
          role: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          full_name?: string | null
          email?: string | null
          company?: string | null
          role?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          full_name?: string | null
          email?: string | null
          company?: string | null
          role?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      spvs: {
        Row: {
          id: string
          name: string
          description: string | null
          status: 'draft' | 'active' | 'closed'
          target_size: number
          current_size: number
          created_by: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          status?: 'draft' | 'active' | 'closed'
          target_size: number
          current_size?: number
          created_by?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          status?: 'draft' | 'active' | 'closed'
          target_size?: number
          current_size?: number
          created_by?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      documents: {
        Row: {
          id: string
          spv_id: string
          name: string
          type: 'pitch_deck' | 'legal_doc' | 'financial_model'
          url: string
          analysis: Json | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          spv_id: string
          name: string
          type: 'pitch_deck' | 'legal_doc' | 'financial_model'
          url: string
          analysis?: Json | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          spv_id?: string
          name?: string
          type?: 'pitch_deck' | 'legal_doc' | 'financial_model'
          url?: string
          analysis?: Json | null
          created_at?: string
          updated_at?: string
        }
      }
      lps: {
        Row: {
          id: string
          name: string
          email: string
          status: 'interested' | 'committed' | 'passed'
          investment_capacity: number | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          status?: 'interested' | 'committed' | 'passed'
          investment_capacity?: number | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          status?: 'interested' | 'committed' | 'passed'
          investment_capacity?: number | null
          created_at?: string
          updated_at?: string
        }
      }
      investments: {
        Row: {
          id: string
          spv_id: string
          lp_id: string
          amount: number
          status: 'soft_circle' | 'committed' | 'funded'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          spv_id: string
          lp_id: string
          amount: number
          status?: 'soft_circle' | 'committed' | 'funded'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          spv_id?: string
          lp_id?: string
          amount?: number
          status?: 'soft_circle' | 'committed' | 'funded'
          created_at?: string
          updated_at?: string
        }
      }
      equity_holdings: {
        Row: {
          id: string
          user_id: string
          company_name: string
          shares: number
          share_type: 'common' | 'preferred' | 'options'
          vesting_start: string | null
          vesting_end: string | null
          vesting_schedule: Json | null
          current_value: number | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          company_name: string
          shares: number
          share_type: 'common' | 'preferred' | 'options'
          vesting_start?: string | null
          vesting_end?: string | null
          vesting_schedule?: Json | null
          current_value?: number | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          company_name?: string
          shares?: number
          share_type?: 'common' | 'preferred' | 'options'
          vesting_start?: string | null
          vesting_end?: string | null
          vesting_schedule?: Json | null
          current_value?: number | null
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
