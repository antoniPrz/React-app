import logo from './logo.svg';
import './App.css';
import Header from "./Header"

function App() {
  return (
    <div className="App">
      <Header/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <a
          className="App-link"
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Buscar en Google
        </a>
      </header>
    </div>
  );
}

export default App;
