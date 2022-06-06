import React, {useState} from 'react'
import axios from 'axios';
import { useHistory } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    let history = useHistory();

    const login =() => {
        const data = {username: username, password: password}
        axios.post('http://localhost:3001/auth/login', data).then((res)=>{
            if (res.data.error) {
                alert(res.data.error)
            } else {
                sessionStorage.setItem("accessToken", res.data);
                history.push("/");
            }
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