import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;

export const Form = styled.div`
  width: 500px;
  max-width: 360px;
  height: 90vh;
  background-color: var(--background-primary);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
`;

export const Input = styled.input`
  width: 100%;
  max-width: 300px;
  outline: none;
  padding: 10px;
  border: transparent;
  border-bottom: 0.2px solid var(--danger);
  border-radius: 5px 5px 2px 2px;
  background-color: var(--text-input);
  color: var(--danger);
`;

export const AreaImage = styled.div``;

export const LogoImage = styled.img`
  object-fit: contain;
  height: 100px;
`;

export const Title = styled.h2`
  color: var(--title);
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  padding: 10px;
  border: 1px solid transparent;
  border-radius: 5px;
  background-color: var(--danger);
  color: var(--details);
  font-weight: 500;
  transform: 0.2s;

  &:hover{
    filter: brightness(0.9);
  }
`;

export const AreaUser = styled.div`
  width: 100%;
  max-width: 300px;
  display: flex;
  justify-content: space-between;
`;

export const SpanUser = styled.span`
  display: flex;
  align-items: center;
  
  &:hover{
    color: var(--danger);
  }
`;

export const TextUser = styled.p``;

export const LinkUser = styled(Link)`
  display: flex;
  align-items: center;
  color: var(--text);

  &:hover{
    color: var(--danger);
  }
`;
