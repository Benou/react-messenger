import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch,
} from 'react-router-dom';

import AuthGuard from './components/Auth/AuthGuard';
import Login from './components/Auth/Login';
import Messenger from './components/Messenger/Messenger';
import './App.css';

const App = () => {
  return (
    <Router basename="/react-messenger">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <AuthGuard path="/messenger">
            <Messenger />
          </AuthGuard>
          <Route>
            <Redirect to="/login" />
          </Route>
        </Switch>
      </Router>
  );
};

export default App;
