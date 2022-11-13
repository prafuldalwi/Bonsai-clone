import React from 'react'
import Navbar from './Components/Navbar'
import Mainroute from './Pages/Mainroute';
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Footer />
      <Mainroute/>
    </div>
  )
}

export default App