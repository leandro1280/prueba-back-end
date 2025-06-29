// server.js
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import authRoutes from './src/routes/auth.js'
import tripsRoutes from './src/routes/trips.js'
import cartRoutes from './src/routes/cart.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express()
const PORT = 3000

app.use(express.json())

// Servimos TODO lo de public (HTML, CSS, JS, img, etc)
app.use(express.static(path.join(__dirname, 'public')))

// API . que son las apis ? son las rutas que van a manejar la logica de negocio de tu app
// las rutas de la API van a manejar las peticiones que vienen del front-end
app.use('/api/auth', authRoutes)
app.use('/api/trips', tripsRoutes)
app.use('/api/cart', cartRoutes)

// Para cualquier otra ruta, devolvemos index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(PORT, () => console.log(`Server corriendo en http://localhost:${PORT}`))
