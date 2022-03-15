import styled from 'styled-components';

export const Container = styled.div``;

export const Title = styled.h4`
  display: flex;
  padding-left: 15px;
  align-items: center;
  background-color: #2f3135;
  color: gray;
  cursor: pointer;

  &:hover{
    background-color: #40464b;
    color: white;
  }
`;

export const SidebarChannelHash = styled.span`
  font-size: 30px;
  padding: 8px;
`;
