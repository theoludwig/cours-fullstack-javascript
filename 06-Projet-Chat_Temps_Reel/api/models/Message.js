const fs   = require('fs').promises;
const path = require('path');

const paginateArray = require('../utils/paginateArray');
const pathMessages  = path.join(__dirname, '..', 'data', 'messages.json');

class Message {
    constructor(id, message, pseudo, createdAt, updatedAt) {
        this.id = id;
        this.message = message;
        this.pseudo = pseudo;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    static async findAll() {
        const rawFileContent = await fs.readFile(pathMessages);
        return JSON.parse(rawFileContent);
    }

    static async findPagination(page, itemsPerPage) {
        const messages = await Message.findAll();
        return paginateArray(messages, { page, itemsPerPage });
    }

    static async findById(id) {
        const messages = await Message.findAll();
        const foundMessage = messages.find((message) => message.id === id);
        if (!foundMessage) return null;
        return new Message(foundMessage.id, foundMessage.message, foundMessage.pseudo, foundMessage.createdAt, foundMessage.updatedAt);
    }

    async save() {
        const messages = await Message.findAll();
        const updatedMessages = [...messages];
        
        if (this.id) {
            // Édition du message
            const existingMessageIndex = messages.findIndex((message) => message.id === this.id);
            updatedMessages[existingMessageIndex] = this;
            this.updatedAt = new Date();
        } else {
            // Ajout du message
            this.id = Date.now().toString();
            updatedMessages.push(this);
        }

        await fs.writeFile(pathMessages, JSON.stringify(updatedMessages, null, 4));
        return this;
    }

    async destroy() {
        const messages = await Message.findAll();
        const updatedMessages = messages.filter((message) => message.id !== this.id);
        await fs.writeFile(pathMessages, JSON.stringify(updatedMessages, null, 4));
        return updatedMessages;
    }
}

module.exports = Message;