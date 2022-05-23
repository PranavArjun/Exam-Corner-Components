
import './App.css';
import Body from './components/Body';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './components/Contact';
import Years from './components/Years';
import CS from './cssubject/CS';
import About from './components/About';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Sidebar/>
      <Routes>
        <Route  exact path ="/" element = {<Body/>} />

        <Route  exact path ="/contact" element = {<Contact/>} />
        <Route  exact path ="/about" element = {<About/>} />
      
        <Route  exact path ="/csfile" element = {<Years/>} />
        <Route  exact path ="/firstyear" element = {<CS/>} />


        <Route  exact path ="/itfile" element = {<Years/>} />
        <Route  exact path ="/entcfile" element = {<Years/>} />
        <Route  exatc path ='/cn' element = {<CS/>}/>
        <Route  exatc path ='/secondyear' element = {<CS/>}/>
      </Routes>

      </BrowserRouter>
      
  

    </div>
  );
}

export default App;
