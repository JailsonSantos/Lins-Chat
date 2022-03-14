import React, { useEffect } from 'react';
import './App.css';

// Redux e Dispatch
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from './features/userSlice';

// Firebase
import { auth } from './firebase';
import { login, logout } from './features/userSlice';

// Components
import Login from './Login';
import Sidebar from './Sidebar';
import Chat from './Chat';

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

      {user ?
        (
          <>
            <Sidebar />
            <Chat />
          </>
        )
        :
        <Login />
      }
    </div>
  );
}

export default App;
