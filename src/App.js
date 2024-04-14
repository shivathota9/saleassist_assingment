import React from 'react'
import './App.css';
import Navbarr from './components/Navbarr';
import Productslider from './components/Productslider';
import Products from './components/Products';


const App = () => {
  return (
    <div className = 'maincontainer'>
      <Navbarr />
      <Productslider />
      <Products />
    </div>
  )
}

export default App