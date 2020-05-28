const socketIo =  require('socket.io');

class SocketIO {
    static io = null;

    static init(httpServer) {
        SocketIO.io = socketIo(httpServer);
    }
}

module.exports = SocketIO;