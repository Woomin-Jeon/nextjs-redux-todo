import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <Link href="/todo" passHref>
        <button style={{ padding: '8px 16px' }}>Start Todo {'>'}</button>
      </Link>
    </div>
  )
}

export default Home
