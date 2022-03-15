import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: gray;
  padding: 10px;
`;

export const ChatHeaderHash = styled.span`
  color: gray;
  font-size: 30px;
  padding: 10px;
`;

export const ChatHeaderLeft = styled.div`
  display: flex;
  align-items: center;
  color: white;
`;

export const ChatHeaderRight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 0.5;

  svg{
    margin: 5px;
    cursor: pointer;

    &:hover{
      color: white;
    }
  }
`;

export const ChatHeaderSearch = styled.div`
  display: flex;
  align-items: center;
  color: gray;
  background-color: #2f3135;
  border-radius: 3px;
  padding: 3px;
`;

export const InputSearch = styled.input`
  background-color: transparent;
  outline-width: 0;
  color: white;
  border: none;
  padding-left: 5px;
`;

export const Title = styled.h3``;
