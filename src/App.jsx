import { Routes, Route } from "react-router"
import React from 'react'
import Home from "./pages/Home.jsx"
import NotFound from "./pages/NotFound.jsx"

import { BrowserRouter } from 'react-router'
import NavBar from "./components/NavBar.jsx"
import Footer from "./components/Footer.jsx"
import Contact from "./pages/Contact.jsx"
import Projects from "./pages/Projects.jsx"

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/work' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App