import logo from '../logo.svg';
import '../App.css';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://github.com/bradyjcamp"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out my GitHub
        </a>
      </header>
      <Footer />
    </div>
  );
}

export default App;
