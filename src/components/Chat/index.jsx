import React, { useState, useEffect } from 'react'
import {
  Container,
  ChatMessages,
  ChatInput,
  ChatInputIcons,
  Form,
  InputForm,
  InputButton
} from './styles.js'

// Firebase
import firebase from 'firebase';
import db from '../../server/firebase';

// Redux e Dispatch
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice'
import { selectChannelId, selectChannelName } from '../../features/appSlice';

// Components
import { ChatHeader } from '../ChatHeader'
import { Message } from '../Message';

// Icons
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard'
import GifIcon from '@material-ui/icons/Gif'
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions'
import AddCircleIcon from '@material-ui/icons/AddCircle'

export function Chat() {
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
    <Container>
      <ChatHeader channelName={channelName} />

      {/* PRECISA IMPLEMENTAR UMA SCROOLVIEW */}
      <ChatMessages className="chat__messages">
        {messages?.map((message, index) => (
          <Message key={index}
            timestamp={message.timestamp}
            message={message.message}
            user={message.user}
          />

        ))}
      </ChatMessages>

      <ChatInput>
        <AddCircleIcon fontSize="large" />

        <Form>
          <InputForm
            value={inputMessage}
            disabled={!channelId}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder={`Message #${channelName}`}

          />
          <InputButton
            disabled={!channelId}
            type="submit"
            onClick={sendMessage}
          >
            Send Message
          </InputButton>
        </Form>

        <ChatInputIcons>
          <CardGiftcardIcon fontSize="large" />
          <GifIcon fontSize="large" />
          <EmojiEmotionsIcon fontSize="large" />
        </ChatInputIcons>
      </ChatInput>
    </Container>
  )
}
