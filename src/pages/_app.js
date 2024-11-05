import SocketProvider from '../config/SocketProvider'
import Chatbot from '@/components/Chatbot'

const App = ({ Component, pageProps }) => {
  return (
    <SocketProvider>
      <Component {...pageProps} />
      <Chatbot />
    </SocketProvider>
  )
}

export default App