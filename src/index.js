import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './Redux/ReduxStore';
import { Provider } from 'react-redux';




export let reactRendering = () => {

  return (ReactDOM.render(

    <BrowserRouter>
      <Provider store={store}>
        <App  />
      </Provider>
    </BrowserRouter>
    ,
    document.getElementById('root')

  ))
};

reactRendering(store.getState())
store.subscribe(() => {
  let state = store.getState();
  reactRendering(state)
})


reportWebVitals();
