
import './App.css';
import Header from './Header/Header';
import Wraper from './Wraper/wraper.jsx';


function App(props) {

  return (

    <div className="App">
      <Header />
      
      <Wraper subcribe={props.subcribe} state={props.store.state} dispatch={props.dispatch}/>
    
    </div >
  );
}

export default App;
