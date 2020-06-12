import Head from "next/head";
import { Fragment } from "react";
import Cookies from "universal-cookie";

import redirectSSR from "../utils/redirectSSR";
import ChatForm from '../components/ChatForm';
import MessagesList from '../components/MessagesList';

const Chat = (props) => {
    return (
        <Fragment>
            <Head>
                <title>Chat en temps réel</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <MessagesList pseudo={props.pseudo} />
            <ChatForm pseudo={props.pseudo} />

            <style jsx global>{`
                .container {
                    padding-left: 20px;
                    padding-right: 20px;
                    display: flex;
                    flex-direction: column;   
                    margin-bottom: 20px;
                }
            `}</style>
        </Fragment>
    );
}

export async function getServerSideProps(context) {
    const cookies = new Cookies(context.req.headers.cookie);
    const pseudo  = cookies.get('pseudo');
    if (!pseudo) {
        redirectSSR(context, "/");
    }
    return {
        props: { pseudo }
    };
}

export default Chat;