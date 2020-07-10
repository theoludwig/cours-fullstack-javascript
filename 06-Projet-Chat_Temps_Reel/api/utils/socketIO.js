const socketIo = require('socket.io')

class SocketIO {
  static init (httpServer) {
    SocketIO.io = socketIo(httpServer)
  }
}

SocketIO.io = null

module.exports = SocketIO
