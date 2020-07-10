const Message = require('../models/Message')
const socket = require('../utils/socketIO')
const helperQueryNumber = require('../utils/helperQueryNumber')

exports.getMessages = async (req, res, _next) => {
  const page = helperQueryNumber(req.query.page, 1)
  const itemsPerPage = helperQueryNumber(req.query.itemsPerPage, 10)
  const result = await Message.findPagination(page, itemsPerPage)
  return res.status(200).json(result)
}

exports.postMessage = async (req, res, _next) => {
  const { message, pseudo } = req.body
  const newMessage = new Message(null, message.toString(), pseudo.toString(), new Date(), new Date())
  const messageCreated = await newMessage.save()
  socket.io.emit('messages', { action: 'create', messageCreated })
  return res.status(201).json(messageCreated)
}

exports.getMessageById = async (req, res, _next) => {
  const { id } = req.params
  const message = await Message.findById(id)
  return res.status(200).json(message)
}

exports.deleteMessageById = async (req, res, _next) => {
  const { id } = req.params

  const messageObject = await Message.findById(id)
  if (!messageObject) {
    return res.status(404).json({ message: "Le message n'existe pas..." })
  }

  const updatedMessages = await messageObject.destroy()
  socket.io.emit('messages', { action: 'delete', updatedMessages, deletedMessageId: id })
  return res.status(200).json(updatedMessages)
}

exports.putMessageById = async (req, res, _next) => {
  const { id } = req.params
  const { message } = req.body

  const messageObject = await Message.findById(id)
  if (!messageObject) {
    return res.status(404).json({ message: "Le message n'existe pas..." })
  }

  messageObject.message = message.toString()
  const messageUpdated = await messageObject.save()
  socket.io.emit('messages', { action: 'update', messageUpdated })
  return res.status(201).json(messageUpdated)
}
