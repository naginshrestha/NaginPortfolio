import './App.css';
import Hero from './Components/Hero/Hero';
import Info from './Components/Info/Info';
import Skills from './Components/Skills/Skills';
import Abouts from './Components/Abouts/Abouts';
import Contacts from './Components/Contacts/Contacts';
import { BrowserRouter , Routes,Route } from 'react-router-dom';
import Projects from './Components/Projects/Projects';

function App() {
  return (

<>

<BrowserRouter>
<Routes>
<Route path='/' element={<Hero/>} />
<Route path='/Skill' element={<Skills/>} />
<Route path='/projects' element={<Projects/>} />
<Route path='/about' element={<Abouts/>} />
<Route path='/contact' element={<Contacts/>} />


</Routes>
</BrowserRouter>

</>

  
  );
}

export default App;
