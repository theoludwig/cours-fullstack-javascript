const { Router } = require('express')
const messagesController = require('../controllers/messages')

const MessagesRouter = Router()

MessagesRouter.route('/')

  .get(messagesController.getMessages)

  .post(messagesController.postMessage)

MessagesRouter.route('/:id')

  .get(messagesController.getMessageById)

  .delete(messagesController.deleteMessageById)

  .put(messagesController.putMessageById)

module.exports = MessagesRouter
