import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Mood from './pages/Mood/Mood';
import Media from './pages/Media/Media';
import Books from './pages/Books/Books';
import Memes from './pages/Memes/Memes';
import Quotes from './pages/Quotes/Quotes';
import Movies from './pages/Movies/Movies';

import './App.css';
import EnterName from './pages/EnterName/EnterName';

function App() {
  const [name, setName] = useState('');

  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/mood">
          <Mood />
        </Route>
        <Route exact path="/enter-name">
          <EnterName setName={setName} />
        </Route>
        <Route exact path="/media">
          <Media />
        </Route>
        <Route exact path="/memes">
          <Memes />
        </Route>
        <Route exact path="/books">
          <Books />
        </Route>
        <Route exact path="/movies">
          <Movies />
        </Route>
        <Route exact path="/quotes">
          <Quotes />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
