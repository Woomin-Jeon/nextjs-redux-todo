import Head from 'next/head'
import React from 'react'

const Layout: React.FC = ({ children }) => {
  return (
    <main style={{ width: '400px', border: '1px solid black', borderRadius: '8px', padding: '16px' }}>
      <Head>
        <title>NextJS-Redux Todo App</title>
        <meta name="description" content="nextjs redux todo app" />
      </Head>

      <h1>NextJS-Redux Todo App</h1>

      {children}
    </main>
  )
}

export default Layout
