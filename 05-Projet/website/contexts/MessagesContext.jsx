import { createContext, useState, useEffect } from "react";

import { socket } from "../utils/api";

export const MessagesContext = createContext();

function MessagesProvider(props) {
    const [messagesData, setMessagesData] = useState({
        totalItems: 0,
        hasMore: true,
        rows: []
    });
    const [isLoadingMessages, setLoadingMessages] = useState(false);

    useEffect(() => {
        socket.on("messages", (socketData) => {
            const isAtBottom = ((window.innerHeight + window.scrollY) >= document.body.offsetHeight);
            setMessagesData((oldData) => {
                const newMessagesData = {
                    totalItems: oldData.totalItems,
                    hasMore: oldData.hasMore, 
                    rows: oldData.rows
                }
                switch (socketData.action) {
                    case "create": {
                        newMessagesData.rows.push(socketData.messageCreated);
                        break;
                    }
                    case "update": {
                        const messageIndex = newMessagesData.rows.findIndex((message) => message.id === socketData.messageUpdated.id);
                        if (messageIndex !== -1) newMessagesData.rows[messageIndex] = socketData.messageUpdated;
                        break;
                    }
                    case "delete": {
                        const messageIndex = newMessagesData.rows.findIndex((message) => message.id === socketData.deletedMessageId);
                        if (messageIndex !== -1) newMessagesData.rows.splice(messageIndex, 1);
                        break;
                    }
                }
                return newMessagesData;
            });
            if (isAtBottom) window.scrollTo(0, document.body.scrollHeight);
        });
    }, []);

    return (
        <MessagesContext.Provider
            value={{
                messagesData,
                setMessagesData,
                isLoadingMessages,
                setLoadingMessages
            }}
        >
            {props.children}
        </MessagesContext.Provider>
    );
}

export default MessagesProvider;
