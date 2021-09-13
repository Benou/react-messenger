import ReactDOM from 'react-dom';

import { AuthContextProvider } from './store/auth-context';
import { ModalContextProvider } from './store/modal-context';
import App from './App';
import './index.css';

ReactDOM.render(
  <ModalContextProvider>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </ModalContextProvider>,
  document.getElementById('root')
);
