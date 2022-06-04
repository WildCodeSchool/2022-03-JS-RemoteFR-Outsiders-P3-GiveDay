import Home from "@pages/Home/Home";
import Login from "@components/Login/Login";
import "./assets/root.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Login />
      <Home />
    </div>
  );
}

export default App;
