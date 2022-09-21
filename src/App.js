import React from 'react'
import cricbg from "./Images/cric-bg.png";
import Navbar from "./Components/Navbar";
import Body from './Components/Body';
import Footer from './Components/Footer';


const App = () => {
  return (
    <div style={{ backgroundImage: `url(${cricbg})` }} className='flex flex-col text-center w-full h-full bg-repeat bg-cover ' >
      <Navbar />
      <Body />
      <Footer/>

    </div>
  )
}

export default App

