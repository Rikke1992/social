import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, { subcribe } from './state';
import newPost from './state';
import rerenderingDomTree from './state';



export let reactRendering = () => {

    return (ReactDOM.render(
      <React.StrictMode>
        <BrowserRouter>
  
          <App   state={state} />
  
        </BrowserRouter>
      </React.StrictMode>,
      document.getElementById('root')
    
    ))
  };

  reactRendering(state)
  subcribe(reactRendering)

reportWebVitals();
