import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <ul>
      <li>
        <Link href="/todo/csr" passHref>
          <button style={{ padding: '8px 16px' }}>CSR TodoList {'>'}</button>
        </Link>
      </li>
      <li>
        <Link href="/todo/ssr" passHref>
          <button style={{ padding: '8px 16px' }}>SSR TodoList {'>'}</button>
        </Link>
      </li>
      <li>
        <Link href="/todo/ssg" passHref>
          <button style={{ padding: '8px 16px' }}>SSG TodoList {'>'}</button>
        </Link>
      </li>
      <li>
        <Link href="/todo/ssg_revalidate" passHref>
          <button style={{ padding: '8px 16px' }}>SSG TodoList - revalidate {'>'}</button>
        </Link>
      </li>
    </ul>
  )
}

export default Home
