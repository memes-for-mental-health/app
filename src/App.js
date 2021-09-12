import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Media from './pages/Media/Media';
import Books from './pages/Books/Books';
import Memes from './pages/Memes/Memes';
import Quotes from './pages/Quotes/Quotes';
import Movies from './pages/Movies/Movies';
import WelcomeUser from './pages/WelcomeUser/WelcomeUser';

import './App.css';
import EnterName from './pages/EnterName/EnterName';

function App() {
  const [name, setName] = useState('');
  const [mood, setMood] = useState();
  console.log(mood);

  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/enter-name">
          <EnterName setName={setName} />
        </Route>
        <Route exact path="/media">
          <Media />
        </Route>
        <Route exact path="/memes">
          <Memes mood={mood} />
        </Route>
        <Route exact path="/books">
          <Books mood={mood} />
        </Route>
        <Route exact path="/movies">
          <Movies mood={mood} />
        </Route>
        <Route exact path="/quotes">
          <Quotes mood={mood} />
        </Route>
        <Route exact path="/welcome-user">
          <WelcomeUser setMood={setMood} name={name} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
