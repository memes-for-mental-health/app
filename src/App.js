import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Mood from './pages/Mood/Mood';
import Media from './pages/Media/Media';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/mood">
          <Mood />
        </Route>
        <Route path="/media">
          <Media />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
