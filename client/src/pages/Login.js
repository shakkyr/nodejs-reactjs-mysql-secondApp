import React, {useState} from 'react'
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login =() => {
        const data = {username: username, password: password}
        axios.post('http://localhost:3001/auth/login', data).then((res)=>{
            console.log(res.data);
        })
    }
return (
    <div className="loginContainer">
        <input type="text" onChange={(e)=> setUsername(e.target.value)}/>
        <input type="password" onChange={(e)=> setPassword(e.target.value)}/>

        <button onClick={login} >Login</button>
    </div>
  )
}

export default Login