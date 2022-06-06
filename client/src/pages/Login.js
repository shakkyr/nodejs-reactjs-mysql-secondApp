import React, {useState, useContext} from 'react'
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { AuthContext } from '../helpers/AuthContext';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { setAuthState } = useContext(AuthContext);
    
    let history = useHistory();

    const login =() => {
        const data = {username: username, password: password}
        axios.post('http://localhost:3001/auth/login', data).then((res)=>{
            if (res.data.error) {
                alert(res.data.error)
            } else {
                localStorage.setItem("accessToken", JSON.stringify(res.data));
                setAuthState({username: res.data.username, id: res.data.id, role:res.data.role, status: true})
                history.push("/");
            }
        })
    }
return (
    <div className="loginContainer">
        Login
        <input type="text" placeholder="name" onChange={(e)=> setUsername(e.target.value)}/>
        <input type="password" placeholder="password" onChange={(e)=> setPassword(e.target.value)}/>

        <button onClick={login} >Login</button>
    </div>
  )
}

export default Login