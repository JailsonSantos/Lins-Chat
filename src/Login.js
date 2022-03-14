import React from 'react'

// Redux
import { auth, provider } from './firebase';

import './Login.css'

// Icons e SVG
import { Button } from '@material-ui/core';
import logo from './assets/logo-discord.svg'

function Login() {

  const signIn = () => {
    auth.signInWithPopup(provider)
      .catch(err => alert(err.message));
  }

  return (
    <div className="login">
      <div className="login__logo">
        <img src={logo} alt="Logo do discord" />
      </div>

      <Button onClick={signIn}>Sign In</Button>
    </div>
  )
}

export default Login
