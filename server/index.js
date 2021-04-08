require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const BlogRouter = require('./routes/blogs')

app.use(cors())
app.use(express.json())
app.use('/api/blogs',BlogRouter)

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})