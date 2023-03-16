import "./App.css";
import Card from "./components/Card";
import Score from "./components/Score";
import Data from "./Data";

function App() {
  const imgData = Data.map((item) => (
    <Card title={item.title} imageUrl={item.imageUrl} key={item.id} />
  ));
  return (
    <div className="App">
      <h1>Hello react app</h1>
      <Score />

      <div className="app--container">{imgData}</div>
    </div>
  );
}

export default App;
