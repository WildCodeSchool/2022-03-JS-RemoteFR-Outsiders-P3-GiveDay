import Home from "@pages/Home/Home";
import CreationEvenement from "@components/CreationEvenement/CreationEvenement";
import "./App.css";

function App() {
  return (
    <div className="App">
      <CreationEvenement />
      <Home />
      <p>coucou</p>
    </div>
  );
}

export default App;
