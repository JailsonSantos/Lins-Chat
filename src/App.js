import React, { useEffect } from 'react';

import { GlobalStyle } from './styles/global';

// Firebase
import { auth } from '../src/server/firebase';

// Redux e Dispatch
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, login, logout } from '../src/features/userSlice';

// Pages
import { Login } from '../src/pages/Login';
// import { AccountForm } from './pages/AccountForm';

// Components
import { Sidebar } from '../src/components/Sidebar';
import { Chat } from '../src/components/Chat';


import Routes from "./Routes";

function App() {

  const dispatch = useDispatch();
  // Pegando o user do redux
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      //console.log('User is: ', authUser)
      if (authUser) {
        // the user is logged in
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName
          })
        )
      } else {
        // the user is logged out
        dispatch(logout());
      }
    });
  }, [dispatch])


  return (
    <div className="app">
      <GlobalStyle />
      {user ?
        (
          <>
            <Sidebar />
            <Chat />
          </>
        )
        :
        <Routes />
        /*  
        <AccountForm />
        <Login />
        */
      }
    </div>
  );
}

export default App;


