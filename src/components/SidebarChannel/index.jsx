import React from 'react'
import { Container, Title, SidebarChannelHash } from "./styles.js"

// Redux e Dispatch
import { useDispatch } from 'react-redux';
import { setChannelInfo } from '../../features/appSlice';


export function SidebarChannel({ id, channelName }) {

  const dispatch = useDispatch();

  function handleDispatch() {
    dispatch(
      setChannelInfo({
        channelId: id,
        channelName: channelName,
      })
    )
  }

  return (
    <Container onClick={handleDispatch}>
      <Title>
        <SidebarChannelHash>#</SidebarChannelHash>{channelName}
      </Title>
    </Container>
  )
}
