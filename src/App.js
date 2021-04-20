
import './App.css';
import Header from './Header/Header';
import Wraper from './Wraper/wraper.jsx';


function App(props) {

  return (

    <div className="App">
      <Header />
      
      <Wraper store={props.store} state={props.state} dispatch={props.dispatch}/>
    
    </div >
  );
}

export default App;
