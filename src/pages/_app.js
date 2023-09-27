import SocketProvider from '../config/SocketProvider'

const App = ({ Component, pageProps }) => {
  return (
    <SocketProvider>
      <Component {...pageProps} />
    </SocketProvider>
  )
}

export default App