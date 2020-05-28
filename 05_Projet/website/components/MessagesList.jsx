import { useEffect, useContext, useRef, useCallback, Fragment } from "react";

import { api } from '../utils/api';
import MessageCard from './MessageCard';
import { MessagesContext } from '../contexts/MessagesContext';
let pageMessages = 1;

const MessagesList = (props) => {

    const { messagesData, setMessagesData, setLoadingMessages, isLoadingMessages } = useContext(MessagesContext);

    // Récupère les messages initiales
    useEffect(() => {
        pageMessages = 1;
        getMessagesData().then((data) => {
            setMessagesData(data);
            window.scrollTo(0, document.body.scrollHeight);
        });
    }, []);

    const getMessagesData = async () => {
        setLoadingMessages(true);
        const { data } = await api.get(`/messages?itemsPerPage=10&page=${pageMessages}`);
        setLoadingMessages(false);
        return data;
    }

    // Permet la pagination au scroll
    const observer = useRef();
    const firstMessageCardRef = useCallback((node) => {
        if (isLoadingMessages) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && messagesData.hasMore) {
                pageMessages += 1;
                getMessagesData().then((data) => {
                    setMessagesData((oldData) => {
                        return { 
                            totalItems: data.totalItems,
                            hasMore: data.hasMore, 
                            rows: [...oldData.rows, ...data.rows] 
                        }
                    });
                }); 
            }
        }, { threshold: 1 });
        if (node) observer.current.observe(node);
    }, [isLoadingMessages, messagesData.hasMore]);

    return (
        <Fragment>
            <main>
                <div className="container">
                    {messagesData.rows.map((message, index) => {
                        if (index === 0) {
                            return <MessageCard key={index} ref={firstMessageCardRef} message={message} pseudo={props.pseudo} />;
                        }
                        return <MessageCard key={index} message={message} pseudo={props.pseudo} />;
                    })}
        
                    {isLoadingMessages && <p className="text-center">Chargement...</p>}
                </div>
            </main>

            <style jsx>{`
                main {
                    display: flex;
                    flex-direction: column-reverse;
                    flex: 1 1 auto;
                    min-width: 0;
                    min-height: 0;
                }
            `}</style>
        </Fragment>
    );
}

export default MessagesList;