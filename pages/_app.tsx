import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import Layout from '../src/components/Layout'
import store from '../src/store'

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default App
