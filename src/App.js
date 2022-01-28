
import './App.css';
import Body from './components/Body';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './components/Contact';
import Years from './components/Years';
import Subject from './components/Subject';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Sidebar/>
      <Routes>
        <Route  exact path ="/" element = {<Body/>} />
        <Route  exact path ="/contact" element = {<Contact/>} />
      
        <Route  exact path ="/csfile" element = {<Years/>} />
        <Route  exact path ="/itfile" element = {<Years/>} />
        <Route  exact path ="/entcfile" element = {<Years/>} />
      
        <Route  exact path ="/firstyear" element = {<Subject/>} />
        <Route  exact path ="/secondyear" element = {<Subject/>} />
        <Route  exact path ="/thirdyear" element = {<Subject/>} />
        <Route  exact path ="/finalyear" element = {<Subject/>} />
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
