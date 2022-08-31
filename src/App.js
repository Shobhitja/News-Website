import React from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './Components/About';
import Signup from './Components/Signup';


const App = () => {
  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route exact path='/about' element={<About />} ></Route>
          <Route exact path='/' element={<News key='general' country='in' category='general' />}></Route>
          <Route exact path='/entertainment' element={<News key='entertainment' country='in' category='entertainment' />}></Route>
          <Route exact path='/business' element={<News key='business' country='in' category='business' />}></Route>
          <Route exact path='/health' element={<News key='health' country='in' category='health' />}></Route>
          <Route exact path='/science' element={<News key='science' country='in' category='science' />}></Route>
          <Route exact path='/sports' element={<News key='sports' country='in' category='sports' />}></Route>
          <Route exact path='/technology' element={<News key='technology' country='in' category='technology' />}></Route>
          <Route exact path='/Signup' element={<Signup />} ></Route>

        </Routes>
      </BrowserRouter>






    </>
  )
}

export default App