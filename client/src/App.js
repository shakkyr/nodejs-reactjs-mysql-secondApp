/* eslint-disable react-hooks/exhaustive-deps */
import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import CreateTask from './pages/CreateTask';
import Task from './pages/Task';
import Login from './pages/Login';
import Register from './pages/Register';
import PageNotFound from "./pages/PageNotFound";
import Profile from "./pages/Profile";
import ChangePassword from "./pages/ChangePassword";
import axios from 'axios';

import {AuthContext} from './helpers/AuthContext' 

import {useState, useEffect} from 'react';
import Users from './pages/Users';

function App() {
  const [authState, setAuthState] = useState({
    username:'',
    id: 0,
    role: '',
    status: false
  })

  const syyUser =  JSON.parse(localStorage.getItem("accessToken"))

  useEffect(()=> {
    axios.get('http://localhost:3001/auth/auth', {
      headers : {
        accessToken: JSON.parse(localStorage.getItem("accessToken"))?.token
      }

    }).then((res) => {
      if (res.data.error) {
        setAuthState({...authState, status:false})
      } else {
        console.log(res.data);
        setAuthState({
          username: res.data.username,
          id: res.data.id,
          role: res.data.role,
          status: true
        })
      }
    })
    
  },[])

  const logout = () => {
    localStorage.removeItem('accessToken');
    setAuthState({username: '', id: 0, role:0, status: false
    })
  }
  
  return (
    <div className="App">
      <AuthContext.Provider value={{authState, setAuthState}}>

      <Router>
        <div className="navbar">
          <Link to='/'> Home</Link>
          {
            syyUser?.role === 1 ?
          <>
            <Link to='/createtask'> Create a Task</Link>

            <Link to='/employees'> Employees</Link>
          </>
          :

          ''

          }
          {
            !authState.status ?  
            <>
          <Link to='/register'> Register</Link>
          <Link to='/login'> Login</Link>

            </> :
            <button onClick={logout}>Logout</button>


          }
          <h1>{authState.username}</h1>
        </div>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/createtask" exact component={CreateTask} />
          <Route path="/employees" exact component={Users} />
          <Route path="/task/:id" exact component={Task} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/profile/:id" exact component={Profile} />
            <Route path="/changepassword" exact component={ChangePassword} />
            <Route path="*" exact component={PageNotFound} />
        </Switch>
      </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
