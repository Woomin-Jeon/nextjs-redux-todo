import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'

const Layout: React.FC = ({ children }) => {
  const router = useRouter()

  const handleClickBackToHome = () => {
    router.push('/')
  }

  return (
    <>
      <Head>
        <title>NextJS-Redux Todo App</title>
        <meta name="description" content="nextjs redux todo app" />
      </Head>

      <main style={MainLayoutStyle}>
        <header>
          <h1>NextJS-Redux Todo App</h1>
        </header>

        {children}

        <footer style={FooterLayoutStyle}>
          <button onClick={handleClickBackToHome} style={BackButtonStyle}>
            {'<'} Back to home
          </button>
        </footer>
      </main>
    </>
  )
}

const MainLayoutStyle: React.CSSProperties = {
  position: 'relative',
  width: '400px',
  border: '1px solid black',
  borderRadius: '8px',
  padding: '16px',
  height: '600px',
}
const FooterLayoutStyle: React.CSSProperties = {
  position: 'absolute',
  bottom: '16px',
}
const BackButtonStyle: React.CSSProperties = {
  padding: '8px 16px',
}

export default Layout
