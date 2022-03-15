import React, { useState } from 'react'

import {
  Container,
  AreaImage,
  LogoImage,
  Title,
  Form,
  Input,
  Button,
  AreaUser,
  SpanUser,
  TextUser,
  LinkUser,
  IconGoogle
} from './styles.js'

// Firebase
import firebase from 'firebase';

// Redux
import { auth, provider } from '../../server/firebase';

// Icons e SVG
import logo from '../../assets/lins-chat.svg'
import googleIcon from '../../assets/google.svg'

// Icons do Material-UI
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import EmailIcon from '@material-ui/icons/Email';

export function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(false);

  const signIn = () => {
    setDisabled(true);
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => console.log("Logado com Sucesso"))
      .catch((error) => alert("Error: " + error.message))
      .finally(() => setDisabled(false))
  }

  const signInGoogle = () => {
    auth.signInWithPopup(provider)
      .catch(err => alert(err.message));
  }

  function handleForgotPassword() {
    firebase.auth().sendPasswordResetEmail(email)
      .then(() => alert("Enviamos um e-mail, para redefinir sua nova senha"))
      .catch((error) => alert("Error: " + error.message))
  }

  return (
    <Container>

      <Form>
        <AreaImage>
          <LogoImage src={logo} alt="Logo da aplicação" />
        </AreaImage>
        <Title>LOGIN</Title>
        <Input
          disabled={disabled}
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Digite seu email"
        />

        <Input
          disabled={disabled}
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Digite sua Senha"
        />

        <Button onClick={signIn}>Entrar</Button>

        <AreaUser className="usuario__create">
          <SpanUser>
            <LinkUser to="/accountForm">
              <PersonAddIcon />
              <TextUser>Criar conta</TextUser>
            </LinkUser>
          </SpanUser>

          <SpanUser onClick={handleForgotPassword}>
            <EmailIcon />
            <TextUser>Esqueci senha</TextUser>
          </SpanUser>
        </AreaUser>

        <Button onClick={signInGoogle}>
          <IconGoogle src={googleIcon} alt="Logo google" />Fazer login com o Google
        </Button>

      </Form>
    </Container >
  )
}
