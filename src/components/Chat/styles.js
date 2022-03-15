import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #363a3f;
  height: 100vh;
`;

export const ChatMessages = styled.div`
  flex: 1;
  overflow-y: scroll;

  /* Esconde a scroll no Chrome, Safari e Opera */
  &.chat__messages::-webkit-scrollbar{
    display: none;
  }

  /* Esconde a scroll no IE, Edge e Firefox */
  &.chat__messages{
    -ms-overflow-style: none; /* IE e Edge */
    scrollbar-width: none; /* Firefox */
  }
`;

export const ChatInputIcons = styled.div`
  margin: 5px;
  
  svg{
    cursor: pointer;
    margin: 0 5px;

    &:hover{
      color: #ffff;
    }
  }

`;

export const Form = styled.form`
  flex: 1;
`;

export const InputForm = styled.input`
  width: 100%;
  padding: 15px;
  background: transparent;
  border: none;
  outline-width: 0;
  color: white;
  font-size: large;
`;

export const ChatInput = styled.div`
  color: lightgrey;
  display: flex;
  align-items: center;
  justify - content: space-between;
  padding: 15px;
  border-radius: 5px;
  margin: 20px;
  border-top: 1px solid gray;
  background-color: #474b53;
`;

export const InputButton = styled.button`
  display: none;
`;
