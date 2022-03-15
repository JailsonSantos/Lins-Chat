import React from 'react'

import {
  Container,
  MessageInfo,
  Title,
  MessageTimeStamp,
  Text,
} from './styles.js'

//Icons
import { Avatar } from '@material-ui/core';

export function Message({ timestamp, user, message }) {

  const nameUser = user.email;
  const nameUserFormatted = nameUser.split('@', 1);

  return (
    <Container>
      <Avatar src={user.photo} />
      <MessageInfo>
        <Title>
          {user.displayName ? user.displayName : nameUserFormatted}
          <MessageTimeStamp>
            {new Date(timestamp?.toDate()).toUTCString()}
          </MessageTimeStamp>
        </Title>
        <Text>{message}</Text>
      </MessageInfo>
    </Container>
  )
}
