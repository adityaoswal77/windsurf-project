import { supabase } from './supabase'
import { Database } from './database.types'

// Types
type Tables = Database['public']['Tables']
type ProfileRow = Tables['profiles']['Row']
type SPVRow = Tables['spvs']['Row']
type DocumentRow = Tables['documents']['Row']
type LPRow = Tables['lps']['Row']
type InvestmentRow = Tables['investments']['Row']
type EquityHoldingRow = Tables['equity_holdings']['Row']

// Profiles
export const getProfiles = async (): Promise<ProfileRow[]> => {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
  if (error) throw error
  return data
}

export const getProfileById = async (id: string): Promise<ProfileRow> => {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', id)
    .single()
  if (error) throw error
  return data
}

// SPVs
export const getSPVs = async (): Promise<SPVRow[]> => {
  const { data, error } = await supabase
    .from('spvs')
    .select(`
      *,
      created_by_profile:profiles(full_name, company, role),
      documents(*),
      investments(
        *,
        lp:lps(*)
      )
    `)
  if (error) throw error
  return data
}

export const getSPVById = async (id: string): Promise<SPVRow> => {
  const { data, error } = await supabase
    .from('spvs')
    .select(`
      *,
      created_by_profile:profiles(full_name, company, role),
      documents(*),
      investments(
        *,
        lp:lps(*)
      )
    `)
    .eq('id', id)
    .single()
  if (error) throw error
  return data
}

// Documents
export const getDocumentsBySPVId = async (spvId: string): Promise<DocumentRow[]> => {
  const { data, error } = await supabase
    .from('documents')
    .select('*')
    .eq('spv_id', spvId)
  if (error) throw error
  return data
}

// LPs
export const getLPs = async (): Promise<LPRow[]> => {
  const { data, error } = await supabase
    .from('lps')
    .select(`
      *,
      investments(
        *,
        spv:spvs(*)
      )
    `)
  if (error) throw error
  return data
}

export const getLPById = async (id: string): Promise<LPRow> => {
  const { data, error } = await supabase
    .from('lps')
    .select(`
      *,
      investments(
        *,
        spv:spvs(*)
      )
    `)
    .eq('id', id)
    .single()
  if (error) throw error
  return data
}

// Investments
export const getInvestmentsBySPVId = async (spvId: string): Promise<InvestmentRow[]> => {
  const { data, error } = await supabase
    .from('investments')
    .select(`
      *,
      lp:lps(*)
    `)
    .eq('spv_id', spvId)
  if (error) throw error
  return data
}

export const getInvestmentsByLPId = async (lpId: string): Promise<InvestmentRow[]> => {
  const { data, error } = await supabase
    .from('investments')
    .select(`
      *,
      spv:spvs(*)
    `)
    .eq('lp_id', lpId)
  if (error) throw error
  return data
}

// Equity Holdings
export const getEquityHoldingsByUserId = async (userId: string): Promise<EquityHoldingRow[]> => {
  const { data, error } = await supabase
    .from('equity_holdings')
    .select('*')
    .eq('user_id', userId)
  if (error) throw error
  return data
}

// Create functions
export const createSPV = async (spv: Tables['spvs']['Insert']): Promise<SPVRow> => {
  const { data, error } = await supabase
    .from('spvs')
    .insert(spv)
    .select()
    .single()
  if (error) throw error
  return data
}

export const createLP = async (lp: Tables['lps']['Insert']): Promise<LPRow> => {
  const { data, error } = await supabase
    .from('lps')
    .insert(lp)
    .select()
    .single()
  if (error) throw error
  return data
}

export const createInvestment = async (investment: Tables['investments']['Insert']): Promise<InvestmentRow> => {
  const { data, error } = await supabase
    .from('investments')
    .insert(investment)
    .select()
    .single()
  if (error) throw error
  return data
}

export const createEquityHolding = async (holding: Tables['equity_holdings']['Insert']): Promise<EquityHoldingRow> => {
  const { data, error } = await supabase
    .from('equity_holdings')
    .insert(holding)
    .select()
    .single()
  if (error) throw error
  return data
}

// Update functions
export const updateSPV = async (id: string, spv: Tables['spvs']['Update']): Promise<SPVRow> => {
  const { data, error } = await supabase
    .from('spvs')
    .update(spv)
    .eq('id', id)
    .select()
    .single()
  if (error) throw error
  return data
}

export const updateLP = async (id: string, lp: Tables['lps']['Update']): Promise<LPRow> => {
  const { data, error } = await supabase
    .from('lps')
    .update(lp)
    .eq('id', id)
    .select()
    .single()
  if (error) throw error
  return data
}

export const updateInvestment = async (id: string, investment: Tables['investments']['Update']): Promise<InvestmentRow> => {
  const { data, error } = await supabase
    .from('investments')
    .update(investment)
    .eq('id', id)
    .select()
    .single()
  if (error) throw error
  return data
}

export const updateEquityHolding = async (id: string, holding: Tables['equity_holdings']['Update']): Promise<EquityHoldingRow> => {
  const { data, error } = await supabase
    .from('equity_holdings')
    .update(holding)
    .eq('id', id)
    .select()
    .single()
  if (error) throw error
  return data
}
