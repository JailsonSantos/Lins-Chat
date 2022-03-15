import React, { useState, useEffect } from 'react'
import {
  Container,
  LogoImage,
  SidebarTop,
  SidebarLogout,
  SidebarChannels,
  SidebarChannelsHeader,
  SidebarHeader,
  SidebarChannelsList,
  SidebarVoice,
  SidebarProfile,
  SidebarVoiceInfo,
  SidebarProfileInfo,
  SidebarProfileIcons,
  SidebarVoiceIcons,
  Title,
  TitleVoice,
  Subtitle,
  TextSmall,
} from './styles.js';

import { useNavigate } from 'react-router-dom';

// Redux e Firebase
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
//import { selectUser } from 
import db, { auth } from '../../server/firebase';

// Components
import { SidebarChannel } from '../SidebarChannel';


import logo from '../../assets/lins-chat-light.svg'

// Icons
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import CallIcon from '@material-ui/icons/Call';
import { Avatar } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';

export function Sidebar() {

  const history = useNavigate();

  const user = useSelector(selectUser);
  const [channels, setChannels] = useState();

  const nameUser = user.email;
  const nameUserFormatted = nameUser.split('@', 1);

  function handleSignOutUser() {
    auth.signOut();
    history('/');
  }

  const handleAddNewChannel = () => {
    const channelName = prompt("Enter a new channel name");

    if (channelName) {
      db.collection('channels').add({
        channelName: channelName
      });
    }
  }

  useEffect(() => {
    db.collection('channels').onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          channel: doc.data(),
        }))
      )
    )
  }, []);

  return (
    <Container>

      <SidebarTop>
        <LogoImage src={logo} alt="Logo da aplicação" />
        <SidebarLogout onClick={handleSignOutUser}>
          <ExitToAppIcon />sair
        </SidebarLogout>
      </SidebarTop>
      <SidebarChannels>
        <SidebarChannelsHeader>
          <SidebarHeader>
            <ExpandMoreIcon />

            <Title>Adicionar um novo canal</Title>
          </SidebarHeader>

          <AddIcon
            onClick={handleAddNewChannel}
            className="sidebar__addChannel"
          />
        </SidebarChannelsHeader>

        <SidebarChannelsList>
          {channels?.map(({ id, channel }) => (
            <SidebarChannel key={id} id={id} channelName={channel.channelName} />
          ))}
        </SidebarChannelsList>
      </SidebarChannels>

      <SidebarVoice>
        <SignalCellularAltIcon
          className="sidebar__voiceIcon"
          fontSize="large"
        />

        <SidebarVoiceInfo>
          <TitleVoice>Voice Connected</TitleVoice>
          <TextSmall>Stream</TextSmall>
        </SidebarVoiceInfo>

        <SidebarVoiceIcons>
          <InfoOutlinedIcon />
          <CallIcon />
        </SidebarVoiceIcons>
      </SidebarVoice>

      <SidebarProfile>
        <Avatar src={user.photo} />
        <SidebarProfileInfo>
          <Subtitle>{user.displayName ? user.displayName : nameUserFormatted}</Subtitle>
          <TextSmall>ID: {user.uid.substring(0, 5)}</TextSmall>
        </SidebarProfileInfo>

        <SidebarProfileIcons>
          <MicIcon />
          <HeadsetIcon />
          <SettingsIcon />
        </SidebarProfileIcons>
      </SidebarProfile>

    </Container>
  )
}

