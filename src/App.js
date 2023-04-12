import './App.css';
import Card from "./components/Card/card";

function App() {
  return (
    <div className="App">
      <div className="playingCards">
        <Card suit="D" rank="K" />
      </div>
    </div>
  );
}

export default App;
