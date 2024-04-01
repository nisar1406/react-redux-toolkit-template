import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';
import store from './app/store/store';
import SuspenseContent from './containers/SuspenseContent';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <Suspense fallback={<SuspenseContent />}>
    <Provider store={store}>
      <App />
    </Provider>
  </Suspense>
  // </React.StrictMode>,
);
