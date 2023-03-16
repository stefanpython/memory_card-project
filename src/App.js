import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import Data from "./Data";
import CardContainer from "./components/CardContainer";

function App() {
  return (
    <div className="App">
      <h1>AventureTime Memory Game</h1>

      <Header />

      <div className="app--container">
        <CardContainer />
      </div>
    </div>
  );
}

export default App;
