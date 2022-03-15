import React, { useState } from 'react'
import firebase from 'firebase';

import {
  Container,
  Form,
  AreaImage,
  LogoImage,
  Title,
  Input,
  Button,
  SpanUser,
  TextUser,
  LinkUser
} from './styles.js'

// Icons e SVG
import logo from '../../assets/lins-chat.svg'

// Icons do Material-UI
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export function AccountForm() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleNewAccount() {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => alert("Conta cadastrada com sucesso"))
      .catch((error) => alert("error: " + error.message)
      );
  }

  return (
    <Container>
      <Form>
        <AreaImage>
          <LogoImage src={logo} alt="Logo do Lins Chat" />
        </AreaImage>
        <Title>CADASTRAR</Title>
        <Input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Digite seu email"
        />
        <Input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Digite sua Senha"
        />
        <Button onClick={handleNewAccount}>CADASTRAR</Button>
        <LinkUser to="/">
          <SpanUser>
            <ArrowBackIcon />
            <TextUser>Eu já teho uma conta</TextUser>
          </SpanUser>
        </LinkUser>
      </Form>
    </Container>
  );
}
