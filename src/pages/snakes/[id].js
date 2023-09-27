import React, { useState, useCallback, useContext, useEffect } from 'react'
import { useRouter } from 'next/router'

import SocketContext from '../../config/SocketContext'

const SnakesRoom = () => {
  const router = useRouter()
  const socket = useContext(SocketContext)
  const { id } = router.query
  const [host, setHost] = useState('')
  const [error, setError] = useState('')
  const [pseudo, setPseudo] = useState('')
  const [players, setPlayers] = useState([])
  const [channel, setChannel] = useState(null)

  useEffect(() => {
    if (!id) {
      return
    }

    const newChannel = socket.channel(`room:${id}`)
    setChannel(newChannel)

    newChannel.on('user_joined', payload => {
      setPlayers(prevUsers => [...prevUsers, payload.pseudo])
    })

    newChannel.join()
      .receive('ok', resp => {
        setHost(resp.host)
        setPseudo(resp.pseudo)
        setPlayers(resp.players)
      })
      .receive('error', resp => {
        setError(resp)
      })

    return () => {
      newChannel.leave()
    }
  }, [id, socket])

  const handleBegin = useCallback(() => {
    alert('LANCEMENT')
  }, [])

  return (
    <div>
      PARTIE {id}
      HOST {host}
      JOUEURS:
      {players.map(player => {
        return (
          <div key={player}>{player}{player === host ? '(chef)' : ''}</div>
        )
      })}
      {pseudo === host && <button onClick={handleBegin}>COMMENCER LA PARTIE</button>}
    </div>
  )
}

export default SnakesRoom
