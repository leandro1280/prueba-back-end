import express from 'express'
import supabase from '../config/supabaseClient.js'

const router = express.Router()

// obtener todos los viajes
router.get('/', async (req, res) => {
  const { data, error } = await supabase.from('trips').select('*') // o podes especificar columnas o tabla yo lo hice con trips pero vos poder hacerlo con la tabla que quieras
  if (error) return res.status(500).json({ error: error.message })
  res.json(data)
})

export default router
