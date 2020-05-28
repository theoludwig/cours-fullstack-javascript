import { createContext, useState, useEffect } from 'react';
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const PseudoContext = createContext();

function PseudoProvider(props) {

    const [pseudo, setPseudo] = useState(null);

    useEffect(() => {
        const newPseudo = cookies.get('pseudo');
        if (newPseudo != undefined) setPseudo(newPseudo);
    }, []);

    const loginPseudo = (newPseudo) => {
        cookies.remove('pseudo', { path: '/' });
        cookies.set('pseudo', newPseudo, { path: '/' });
        setPseudo(newPseudo);
    }

    return (
        <PseudoContext.Provider value={{ pseudo, loginPseudo }}>
            {props.children}
        </PseudoContext.Provider>
    );
}

export default PseudoProvider;