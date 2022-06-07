import CreationEvenement from "@components/CreationEvenement/CreationEvenement";
import Login from "@components/Login/Login";
import Home from "./pages/Home/Home";
import "./assets/root.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Home />
      <Login />
      <CreationEvenement />
    </div>
  );
}

export default App;
