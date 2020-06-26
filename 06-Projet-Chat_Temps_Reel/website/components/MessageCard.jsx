import { Fragment, forwardRef, useState } from "react";
import date from 'date-and-time';

import { api } from "../utils/api";

const MessageCard = forwardRef((props, ref) => {

    const [isEditing, setIsEditing]   = useState(false);
    const [inputState, setInputState] = useState({ message: "" });

    const deleteMessage = async () => await api.delete(`/messages/${props.message.id}`);

    const handleChange = (event) => {
        const inputStateNew = { ...inputState };
        inputStateNew[event.target.name] = event.target.value;
        setInputState(inputStateNew);
    }

    const handleSubmit = async () => {
        await api.put(`/messages/${props.message.id}`, { message: inputState.message });
        handleEdit(false);
    }

    const handleEdit = (doEdit = true) => {
        if (doEdit) {
            setIsEditing(true);
            setInputState({ message: props.message.message });
            return;
        }
        setInputState({ message: "" });
        setIsEditing(false);
    }

    return (
        <Fragment>
            <div ref={ref} className="MessageCard">
                <div className="row"> 
                    <span className="important">{props.message.pseudo}</span> - {date.format(new Date(props.message.createdAt), 'DD/MM/YYYY à HH:mm')}
                </div>
                <div className="row">
                    {(isEditing) 
                        ? 
                            <div className="text-center">
                                <form className="margin-top container">
                                    <textarea value={inputState.message} onChange={handleChange} rows="6" name="message" id="message" placeholder="Modifier le message..."></textarea>
                                    <div className="margin-top MessageCard__options">
                                        <span onClick={handleSubmit} className="important">modifier</span> - <span onClick={() => handleEdit(false)} className="important">annuler</span>
                                    </div>
                                </form>
                            </div>
                        :
                            <div className="MessageCard__message">
                                <p>{props.message.message}</p>
                            </div>
                    }
                    {(props.pseudo === props.message.pseudo && !isEditing) &&                    
                        <div className="MessageCard__options">
                            <span onClick={deleteMessage} className="important">supprimer</span> - <span onClick={handleEdit} className="important">modifier</span>
                        </div>
                    }
                </div>
            </div>

            <style jsx>{`
                .margin-top {
                    margin: 20px 0 0 0;
                }
                textarea {
                    min-width: 100%;
                    outline: none;
                    resize: vertical;
                }
                .MessageCard {
                    display: flex;
                    flex-direction: column;
                    box-shadow: 0px 0px 6px 6px rgba(0, 0, 0, .25);
                    border: 1px solid black;
                    border-radius: .7em;
                    margin: 15px 0 15px 0;
                    height: 100%;
                    width: 100%;
                    padding: 20px;
                }
                .MessageCard__options .important {
                    cursor: pointer;
                }
                .MessageCard__options .important:hover {
                    text-decoration: underline;
                }
            `}</style>
        </Fragment>
    );
});

export default MessageCard;