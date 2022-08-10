import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Navi from './components/Navi/Navi';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience'

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Navi />
      <About />
      <Contact />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
