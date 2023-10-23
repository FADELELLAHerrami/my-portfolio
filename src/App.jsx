import './App.css';
import Image from './components/image';
import Buttons from './components/Buttons';
import About from './components/About';
import Footer from './components/footer';

function App() {
  return(
    <div className="container">
        <Image />
        <Buttons />
        <About />
        <Footer />
    </div>
  )
}

export default App
