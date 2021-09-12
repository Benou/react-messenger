import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch,
} from 'react-router-dom';

import AuthGuard from './components/Auth/AuthGuard';
import Login from './components/Auth/Login';
import Messenger from './components/Messenger/Messenger';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <AuthGuard path="/messenger">
          <Messenger />
        </AuthGuard>
        <Route path="/**">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
