import Home from "@pages/Home/Home";
import CreationEvenement from "@components/CreationEvenement/CreationEvenement";
import Login from "@components/Login/Login";
import "./assets/root.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <CreationEvenement />
      <Login />
      <Home />
    </div>
  );
}

export default App;
