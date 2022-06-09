import './App.css'
import Homepage from './pages/homepage/Hompage';
import Login from './pages/login/Login'

function App() {
    const user={
        login:true,
        id:'lol@aaaaa.com',
        nickName:'룰루랄라',
    }

    return (
        <div>
            {user.login?<Homepage id ={user.id} nickName ={user.nickName}/>:<Login/>}
        </div>
    );
}

export default App;