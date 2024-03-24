
// import { useRef, useState } from 'react';
import './App.css';
import Ammenity from './components/Ammenity';
import Community from './components/Community';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Managedforest from './components/Managedforest';
import Overview from './components/Overview';
import Whyhinjawadi from './components/Whyhinjawadi';
import Workfromforest from './components/Workfromforest';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  

  return (
    <div className="App">



     <Navbar/>
     <Home/>
      <Overview/>
      <Whyhinjawadi/>
      <Community/>
      <Managedforest/>
      <Workfromforest/>
      <Ammenity/>
      
     
        <Contact/>
    <Footer/>

 
    </div>
  );
}

export default App;
