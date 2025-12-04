import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Price from './Price';
import Education from './education';
import Acopen from '../Acopen';
import Navbar from '../Navbar';
import Footer from '../Footer';
function Home() {
    return ( 
        <>
      
       <Hero/>
       <Awards/>
       <Stats/>
       <Price/>
       <Education/>
       <Acopen/>
      
       </>

     );
}

export default Home;