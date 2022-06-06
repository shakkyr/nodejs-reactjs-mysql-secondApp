import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import CreateTask from './pages/CreateTask';
import Task from './pages/Task';
import Login from './pages/Login';
import Register from './pages/Register';

import {AuthContext} from './helpers/AuthContext' 

import {useState, useEffect} from 'react';

function App() {
  const [authState, setAuthState] = useState(false)

  useEffect(()=> {
    if(localStorage.getItem('accessToken')) {
      setAuthState(true)
    }
  },[])
  
  return (
    <div className="App">
      <AuthContext.Provider value={{authState, setAuthState}}>

      <Router>
        <div className="navbar">
          <Link to='/'> Home</Link>
          <Link to='/createtask'> Create a Task</Link>
          {
            !authState && 
            <>
          <Link to='/register'> Register</Link>
          <Link to='/login'> Login</Link>

            </>

          }
        </div>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/createtask" exact component={CreateTask} />
          <Route path="/task/:id" exact component={Task} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
        </Switch>
      </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
