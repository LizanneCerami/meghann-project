import express from "express"
import cors from "cors"

import { addNewColor } from "./src/colors.js"


const PORT = 3001
const app = express()

app.use(cors())
app.use(express.json())

// app.get('/colors', getAllColors)
app.post('/colors', addNewColor)



app.listen( PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})