import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter} from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './state';

let newMessage = [{
  id: 1,
  img: 'https://www.kino-teatr.ru/acter/photo/7/5/58857/962994.jpg',
  message: 'I`am Muccaley Calcine!',
  likes: 100
},
{
  id: 2,
  img: 'https://i.work.ua/sent_photo/3/f/b/3fbd713111982c5e75525843a3990ea2.jpg',
  message: 'I`am Vladimir!',
  likes: '+10050'
},
{
  id: 3,
  img: 'https://media.licdn.com/dms/image/C560BAQFVPgY4cV4Knw/company-logo_200_200/0?e=2159024400&v=beta&t=CLgJ7rnh_gY-gG1akmPOVPN7wGtqe970Gcr2RoxOyIo',
  message: 'I`am Olha!',
  likes: '+100'
}];

let peopls = [
  {
    id: 1,
    name: 'Muccaley'
  },
  {
    id: 2,
    name: 'Vladimir'
  },
  {
    id: 3,
    name: 'Olga'
  }
];

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <App newMessage={newMessage} peopls={peopls} /> */}
      <App state={state} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
