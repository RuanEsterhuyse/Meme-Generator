import './App.css';
import Navbar from "./Components/Navbar.js"
import Body from "./Components/Body.js"

function App() {
  return (
    <div className="header">
      <header className="main-header">
       <Navbar />
       <Body />
      </header>
    </div>
  );
}

export default App;
