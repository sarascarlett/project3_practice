
import { useNavigate } from "react-router-dom";

// import Home component
import Home from "./Home";
// import About component
import ClassDetails from "./ClassDetails";
// import ContactUs component
import Review from "./Review";

function App() {
  const navigate = useNavigate();
  return (
<div className="App">
      <header className="App-header">
        <img className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    );
}
 
export default App;
