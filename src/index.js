import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './app/store';
import App from './App';




// New way with createRoot
const root = document.getElementById('root');
const rootElement = createRoot(root);
rootElement.render(
        <React.StrictMode>
        <Router>  
          <Provider store={store}> 
            <App />
          </Provider> 
        </Router>
      </React.StrictMode>
);





