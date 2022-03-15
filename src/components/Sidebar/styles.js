import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.25;
  height: 100vh;

  //background-color: var(--purple);

  background-color: #2f3235;
`;

export const LogoImage = styled.img`
  object-fit: contain;
  height: 40px;
`;

export const SidebarTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #2f3135;
  color: #fff;
  border-bottom: 3px solid #26282c;
`;

export const SidebarChannels = styled.div`
  flex: 1;
`;

export const SidebarLogout = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  transform: 0.2s;

  &:hover{
    filter: brightness(0.9);
  }
`;

export const SidebarChannelsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #2f3135;
  color: gray;

  .sidebar__addChannel{
    cursor: pointer;
    color: #fff;
  }

`;

export const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const SidebarChannelsList = styled.div``;

export const SidebarVoice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: gray;
  background-color: #2f3135;
  padding: 5px;
  border-top: 1px solid gray;

  .sidebar__voiceIcon{
    color: #4fb185;
  }
`;

export const SidebarProfile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: gray;
  background-color: #2f3135;
  padding: 5px;
  border-top: 1px solid gray;
`;

export const SidebarVoiceInfo = styled.div`
  flex: 1;
  padding: 10px;
`;

export const SidebarProfileInfo = styled.div`
  flex: 1;
  padding: 10px;
`;

export const SidebarProfileIcons = styled.div`
  margin: 10px;

  svg{
    cursor: pointer;
    
    &:hover{
      color: #FFFFFF;
    }
  }
`;

export const SidebarVoiceIcons = styled.div`
  margin: 10px;

  svg{
    cursor: pointer;

    &:hover{
      color: #FFFFFF;
    }
  }
`;

export const Title = styled.h4``;

export const TitleVoice = styled.h4`
  color: #4fb185;
`;

export const Subtitle = styled.h5`
  color: #ffffff;
`;

export const TextSmall = styled.p`
  font-size: smaller;
`;