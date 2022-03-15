import React from 'react'
import {
  Container,
  Title,
  ChatHeaderHash,
  ChatHeaderLeft,
  ChatHeaderRight,
  ChatHeaderSearch,
  InputSearch,
} from './styles.js'

import NotificationIcon from '@material-ui/icons/Notifications'
import EditLocationRoundedIcon from '@material-ui/icons/EditLocationRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';
import SendRoundedIcon from '@material-ui/icons/SendRounded';

export function ChatHeader({ channelName }) {
  return (
    <Container className="chatHeader">
      <ChatHeaderLeft className="chatHeader__left">
        <Title>
          <ChatHeaderHash className="chatHeader__hash">
            #
          </ChatHeaderHash>
          {channelName}
        </Title>
      </ChatHeaderLeft>
      <ChatHeaderRight className="chatHeader__right">
        <NotificationIcon />
        <EditLocationRoundedIcon />
        <PeopleAltRoundedIcon />

        <ChatHeaderSearch className="chatHeader__search">
          <InputSearch placeholder="Search" />
          <SearchRoundedIcon />
        </ChatHeaderSearch>

        <SendRoundedIcon />
        <HelpRoundedIcon />
      </ChatHeaderRight>
    </Container>
  )
}
