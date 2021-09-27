import "./App.css";
import HeaderContainer from "./Header/HeaderContainer";
import Wraper from "./Wraper/wraper.jsx";

function App(props) {
  return (
    <div className="App">
      <HeaderContainer />

      <Wraper />
    </div>
  );
}

export default App;
