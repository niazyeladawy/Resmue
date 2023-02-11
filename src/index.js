import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import ResumeDataContextProvider from './context/resumeContext';

ReactDOM.render(
  <React.StrictMode>
    <ResumeDataContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ResumeDataContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
