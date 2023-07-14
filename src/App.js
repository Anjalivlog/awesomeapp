import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Lightning from './pages/Lightning';
import DescriptionPage from './pages/DescriptionPage';
import Furniture from './pages/Furniture'
import Accessories from './pages/Accessories';
import DexxtaTools from './pages/DexxtaTools';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
// import { Link } from 'react-router-dom'




 const App = () => {
  return (
    <div>
    <Router>
    {/* <ul>
          <li>
            <Link to="/description"/>
          </li>
        </ul> */}
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/lightning' element={<Lightning/>}></Route>
        <Route path='/description' element={<DescriptionPage/>}/> 
        <Route path='/furniture' element={<Furniture/>}/>
        <Route path='/accessories' element={<Accessories/>}/>
        <Route path='/dexxta' element={<DexxtaTools/>}/>
        <Route path='/aboutus' element={<About/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </Router>  
    </div>
  )
}

export default App;
