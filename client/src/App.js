import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import CreateTask from './pages/CreateTask';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Link to='/'> Home</Link>
        <Link to='/createtask'> Create a Task</Link>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/createtask" exact component={CreateTask} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
