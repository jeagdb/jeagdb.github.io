import React, { useState, useEffect } from 'react'
import SocketContext from './SocketContext'
import { Socket } from 'phoenix'
const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null)

  useEffect(() => {
    console.log('socket provider')
    const newSocket = new Socket("ws://localhost:4000/socket", { params: {} })
    setSocket(newSocket)
    newSocket.connect()

    return () => {
      newSocket.disconnect()
    }
  }, [])

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  )
}

export default SocketProvider
