import React from 'react'; 
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './Redux/ReduxStore';




export let reactRendering = () => {
 
    return (ReactDOM.render(
      <React.StrictMode>
        <BrowserRouter>
  
          <App  store={store} state={store.getState()} dispatch={store.dispatch.bind(store)} />
  
        </BrowserRouter>
      </React.StrictMode>,
      document.getElementById('root')
    
    ))
  };

  reactRendering(store.getState())
  store.subcribe(()=>{
    let state = store.getState();
    reactRendering(state)
  })

reportWebVitals();
