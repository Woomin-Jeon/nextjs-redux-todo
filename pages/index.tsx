import type { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'

const Home: NextPage = () => {
  return (
    <ul>
      <li>
        <Link href="/todo/csr" passHref>
          <button style={ButtonStyle}>CSR TodoList {'>'}</button>
        </Link>
      </li>
      <li>
        <Link href="/todo/ssr" passHref>
          <button style={ButtonStyle}>SSR TodoList {'>'}</button>
        </Link>
      </li>
      <li>
        <Link href="/todo/ssg" passHref>
          <button style={ButtonStyle}>SSG TodoList {'>'}</button>
        </Link>
      </li>
      <li>
        <Link href="/todo/ssg_revalidate" passHref>
          <button style={ButtonStyle}>SSG TodoList - revalidate {'>'}</button>
        </Link>
      </li>
    </ul>
  )
}

const ButtonStyle: React.CSSProperties = {
  padding: '8px 16px',
}

export default Home
