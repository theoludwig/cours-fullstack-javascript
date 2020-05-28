/* Global CSS (and Fonts) Imports */
import '../styles/normalize.css';
import '../styles/general.css';

/* Contexts Imports */
import PseudoContextProvider from '../contexts/PseudoContext';

const App = ({ Component, pageProps }) => {
    return (
        <PseudoContextProvider>
            <Component {...pageProps} />
        </PseudoContextProvider>
    );
}

export default App;