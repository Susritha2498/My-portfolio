import './App.css';
import {About,Header,Footer,Skills,Work} from './container'
import {Navbar} from './components'
// import { About } from './container/About/About';
// import { Footer } from './container/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About/>
      <Work/>
      <Skills/>
      {/* <Testimonials/> */}
      <Footer/>
    </div>
  );
}

export default App;
