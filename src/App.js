import './App.css';
import logo from  "./meme.png"

function App() {
  return (
    <div className="main">
      <main className="main-header">
        <nav className = "navbar">
        <img className = "logo" src={logo} alt = "logo"/>
        <h1>Meme Generator</h1>
        <h3>React Course-Project 3</h3>
        </nav>
      </main>
    </div>
  );
}

export default App;
