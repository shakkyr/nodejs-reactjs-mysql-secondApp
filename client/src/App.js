import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import CreateTask from './pages/CreateTask';
import Task from './pages/Task';

function App() {
  
  return (
    <div className="App">
      <Router>
        <div className="navbar">
          <Link to='/'> Home</Link>
          <Link to='/createtask'> Create a Task</Link>
          <Link to='/signup'> Login</Link>
          <Link to='/login'> Register</Link>
        </div>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/createtask" exact component={CreateTask} />
          <Route path="/task/:id" exact component={Task} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
