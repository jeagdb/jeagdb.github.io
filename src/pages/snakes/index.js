import React, { useEffect, useState, useContext, useCallback } from 'react'

import SocketContext from '../../config/SocketContext'
import SnakesLobbies from '../../components/SnakesLobbies'

const Snakes = () => {
  const socket = useContext(SocketContext)

  const [error, setError] = useState('')
  const [pseudo, setPseudo] = useState('')
  const [channel, setChannel] = useState(null)
  const [confirmedPseudo, setConfirmedPseudo] = useState(null)

  useEffect(() => {
    console.log('snakes')
    if (!socket) {
      return
    }

    const newChannel = socket.channel('user:auth')
    setChannel(newChannel)

    newChannel.join()
      .receive('ok', resp => { console.log('Joined successfully', resp) })
      .receive('error', resp => { console.log('Unable to join', resp) })

    return () => {
      newChannel.leave()
    }
  }, [socket])

  const handlePseudoSubmit = useCallback(() => {
    if (!channel || !pseudo) {
      return
    }

    channel.push('check_pseudo', { pseudo })
      .receive('ok', resp => {
        setError(resp)
        setConfirmedPseudo(pseudo)
      })
      .receive('error', resp => {
        setError(resp)
      })
  }, [channel, pseudo])

  if (!confirmedPseudo) {
    return (
      <div>
        <input value={pseudo} onChange={e => setPseudo(e.target.value)} />
        <button onClick={handlePseudoSubmit}>Submit Pseudo</button>
      </div>
    )
  }

  return (
    <>
      <SnakesLobbies
        pseudo={confirmedPseudo}
        socket={socket} />
    </>
  )

}

export default Snakes
