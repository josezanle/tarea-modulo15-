import React, { useReducer, useEffect } from 'react';
import AppRouter from './routers/AppRouter';
import { AuthContext } from './auth/AuthContext';
import { authReducer } from './auth/authReducer';


function App() {

  const init = () => {
    return JSON.parse(localStorage.getItem('user')) || {
      logged:false
    }
  }

const [user, dispatch] = useReducer(authReducer, {}, init)

useEffect(() => {
//  con este useEffect vamos a grabar en el localstorage , este user si el usuario Cambia.
// se va a disparar cada vez que el usuario cambie
  localStorage.setItem('user',JSON.stringify(user))
  
}, [user])

  return (

    <div className="App">

        <AuthContext.Provider value={{user,dispatch}}>
          
          <AppRouter/>

        </AuthContext.Provider>

    </div>
  );
}

export default App;
