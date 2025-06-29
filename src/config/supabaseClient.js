
import { createClient } from '@supabase/supabase-js'

// tu URL y anon key directamente aca
const supabaseUrl = 'https://TU-PROYECTO.supabase.co'
const supabaseKey = 'TU_ANON_KEY'

// creamos y exportamos default
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase
