import Home from './Components/Home';
import './Styles/main.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
