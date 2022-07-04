import { useEffect, useState } from 'react';
import { authService } from '../fBase';
import MyRouter from './Router'

function App() {
  const [isLogin, setIsLogin]=useState(authService.currentUser);
  const [init, setInit]=useState(false);
  // console.log(authService.currentUser);

  useEffect(()=>{
    authService.onAuthStateChanged((user)=>{
      // console.log(user);
      if(user){
        setIsLogin(true);
      }else{
        setIsLogin(false);
      }
      setInit(true);
    })    
  },[])

  return (
    init?<MyRouter isLogin={isLogin}></MyRouter>:'로딩중..'
  );
}

export default App;