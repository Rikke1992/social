
import './App.css';
import Header from './Header/Header';
import Wraper from './Wraper/wraper.jsx';


function App(props) {

  return (

    <div className="App">
      <Header />
      
      <Wraper state={props.state}/>
      {/* <Wraper newMessage={props.newMessage} peopls={props.peopls}/> */}
    </div >
  );
}

export default App;
