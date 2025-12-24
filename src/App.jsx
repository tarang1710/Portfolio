import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Route, Routes} from "react-router-dom";
import About from './PAGE/About';
import Skills from './PAGE/Skills';
import Projects from './PAGE/Project';
import Contact from './PAGE/Contact';
import Home from './PAGE/Home';
import Layout from './PAGE/projectcard';

 function App() {
  return (
    <>
          <div style={{ background: '#0f1225', color: '#fff', minHeight: '100vh', width: '100vw' }}>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/skills' element={<Skills />}></Route>
            <Route path='/projects' element={<Projects /> }></Route>
            <Route path="/project/:id" element={<Layout />} />
            <Route path='/contact' element={<Contact /> }></Route>
        </Routes>
      </BrowserRouter>
          </div>
    </>
  );
}
 
export default App;
