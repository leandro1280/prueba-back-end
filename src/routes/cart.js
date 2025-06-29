import express from 'express'
import supabase from '../config/supabaseClient.js'

const router = express.Router()

// aca hacemos el checkout del carrito
router.post('/checkout', async (req, res) => {
  const { userId, items, total } = req.body
  // guardamos el pedido en la tabla 'orders' o la tabla que hayas creado para pedidos
  const { data, error } = await supabase
    .from('orders')
    .insert([{ user_id: userId, items, total }])

  if (error) {
    // si algo falla avisamos
    return res.status(500).json({ error: error.message })
  }

  // devolvemos el pedido creado
  res.json({ order: data[0] })
})

export default router
