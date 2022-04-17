import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './routes';
import reportWebVitals from './reportWebVitals';
import { ToDoProvider } from './context/ToDo';
import { LoadingProvider } from './context/Loading';

ReactDOM.render(
  <React.StrictMode>
    <LoadingProvider>
      <ToDoProvider>
        <Routes />
      </ToDoProvider>
    </LoadingProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
