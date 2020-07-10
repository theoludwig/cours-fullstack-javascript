import Head from 'next/head'
import Router from 'next/router'
import { useContext, useState } from 'react'

import { PseudoContext } from '../contexts/PseudoContext'
import ButtonDark from '../components/ButtonDark'

const Home = () => {
  const { loginPseudo } = useContext(PseudoContext)
  const [inputState, setInputState] = useState({ pseudo: '' })

  const handleChange = (event) => {
    const inputStateNew = { ...inputState }
    inputStateNew[event.target.name] = event.target.value
    setInputState(inputStateNew)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    loginPseudo(inputState.pseudo)
    Router.push('/chat')
  }

  return (
    <>
      <Head>
        <title>Chat en temps réel</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='connexion-container'>
        <form onSubmit={handleSubmit} className='connexion'>
          <input onChange={handleChange} value={inputState.pseudo} id='pseudo' name='pseudo' type='text' placeholder='Votre pseudo' required />
          <div className='text-center'>
            <ButtonDark type='submit'>Envoyer</ButtonDark>
          </div>
        </form>
      </div>

      <style jsx>{`
                .connexion-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-height: 100vh;
                }
                .connexion > input {
                    font-size: 24px;
                    padding: 5px;
                    border: 5px solid var(--important);
                    border-width: 0 0 5px 0;
                    outline: none;
                }
                .connexion, .form {
                    max-width: 500px;
                    font-size: 24px;
                }
                .connexion > *, .form > * {
                    width: 100%;
                }
        `}</style>
    </>
  )
}

export default Home
