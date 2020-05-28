import { Fragment, useContext, useState } from "react";

import { PseudoContext } from '../contexts/PseudoContext';
import ButtonDark from './ButtonDark';
import { api } from "../utils/api";

const ChatForm = () => {

    const { pseudo } = useContext(PseudoContext);
    const [inputState, setInputState] = useState({ message: "" });

    const handleChange = (event) => {
        const inputStateNew = { ...inputState }
        inputStateNew[event.target.name] = event.target.value;
        setInputState(inputStateNew);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (pseudo) {
            await api.post("/messages", { pseudo, message: inputState.message });
            setInputState({ message: "" });
        }
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit} className="container">
                <textarea value={inputState.message} onChange={handleChange} rows="6" name="message" id="message" placeholder="Entrez un message..."></textarea>
                <ButtonDark>Envoyer</ButtonDark>
            </form>

            <style jsx>{`
                form {
                    position: sticky;
                    bottom: 0px;
                    z-index: 2;
                    background-color: var(--background-color);
                    padding-bottom: 20px;
                    margin: 0;
                }
                #message {
                    min-width: 100%;
                    outline: none;
                    resize: vertical;
                }
            `}</style>
        </Fragment>
    );
}

export default ChatForm;