// Modules
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const socketIO = require('./utils/socketIO')
const app = express()
const PORT = process.env.PORT || 4000

// Middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

// Routes
app.use('/messages', require('./routes/messages'))

// Server
const server = app.listen(PORT, () => console.log(`Started on port ${PORT}.`))
socketIO.init(server)
