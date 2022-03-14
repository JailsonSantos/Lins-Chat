import React, { useState, useEffect } from 'react'
import './Chat.css'

// Firebase
import firebase from 'firebase';
import db from './firebase';

// Redux e Dispatch
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { selectChannelId, selectChannelName } from './features/appSlice';

// Components
import ChatHeader from './ChatHeader'
import Message from './Message'

// Icons
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard'
import GifIcon from '@material-ui/icons/Gif'
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions'
import AddCircleIcon from '@material-ui/icons/AddCircle'

function Chat() {
  const user = useSelector(selectUser)
  const channelId = useSelector(selectChannelId)
  const channelName = useSelector(selectChannelName)
  const [inputMessage, setInputMessage] = useState("")
  const [messages, setMessages] = useState([])

  useEffect(() => {
    if (channelId) {
      db.collection('channels')
        .doc(channelId)
        .collection('messages').
        orderBy('timestamp')
        .onSnapshot(snapshot =>
          setMessages(snapshot.docs.map(doc => doc.data())))
    }
  }, [channelId]);

  const sendMessage = e => {
    e.preventDefault()
    db.collection('channels')
      .doc(channelId)
      .collection('messages')
      .add({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        message: inputMessage,
        user: user,
      })
    setInputMessage("")
  }

  return (
    <div className="chat">
      <ChatHeader channelName={channelName} />

      {/* PRECISA IMPLEMENTAR UMA SCROOLVIEW */}
      <div className="chat__messages">
        {messages?.map((message) => (
          <Message
            timestamp={message.timestamp}
            message={message.message}
            user={message.user}
          />

        ))}
      </div>

      <div className="chat__input">
        <AddCircleIcon fontSize="large" />

        <form>
          <input
            value={inputMessage}
            disabled={!channelId}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder={`Message #${channelName}`}

          />
          <button
            disabled={!channelId}
            className="chat__inputButton"
            type="submit"
            onClick={sendMessage}
          >
            Send Message
          </button>
        </form>

        <div className="chat__inputIcons">
          <CardGiftcardIcon fontSize="large" />
          <GifIcon fontSize="large" />
          <EmojiEmotionsIcon fontSize="large" />
        </div>
      </div>
    </div>
  )
}

export default Chat
