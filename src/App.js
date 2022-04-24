import { Routes, Route } from 'react-router-dom';

import ButtonIterator from "./components/ButtonIterator";
import NavBar from "./components/NavBar";

import Home from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import Clem from './components/Clem';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/gallery/*' element={<Gallery />}>
          <Route path='clem' element={<Clem />} />
        </Route>
        <Route path='/contact' element={<Contact />} />
      </Routes>
      {/* <h1 className="text-center bg-red-500 text-white">React Hooks | React Router v6</h1> */}
      {/* <ButtonIterator /> */}
    </div>
  );
}

export default App;
