import React, { useState, useEffect, useCallback } from 'react'
import Router from 'next/router'

const SnakesLobbies = ({ pseudo, socket }) => {
  const [id, setId] = useState('')
  const [error, setError] = useState('')
  const [channel, setChannel] = useState(null)

  const handleCreate = useCallback(() => {
    if (!channel) {
    console.log('not push ??')

      return
    }

    console.log('push ??')

    channel.push('create_room')
      .receive('ok', resp => {
        console.log('ok ? ', resp)
        Router.push(`/${resp.room_id}`)
      })
      .receive('error', resp => {
        console.log('error ? ', resp)
        setError(resp)
      })

  }, [channel])

  const handleJoin = useCallback(() => {
    if (!id || !channel) {
      return
    }

    channel.push('join_room', { room_id: id })
      .receive('ok', resp => {
        Router.push(`/room/${resp.room_id}`)
      })
      .receive('error', resp => {
        setError(resp)
      })
  }, [id, channel])

  useEffect(() => {
    const newChannel = socket.channel('rooms:lobby')
    setChannel(newChannel)

    newChannel.join()
      .receive('ok', resp => { console.log('Joined successfully', resp) })
      .receive('error', resp => { console.log('Unable to join', resp) })

    return () => {
      newChannel.leave()
    }
  }, [socket])

  return (
    <>
      <div>{pseudo}</div>
      <button onClick={handleCreate}>créer une partie</button>
      <div>
        <input
          value={id}
          onChange={e => setId(e.target.value)}
          placeholder="indiquer l'id de la partie" />
        <button onClick={handleJoin}>rejoindre une partie</button>
      </div>
    </>
  )
}

export default SnakesLobbies