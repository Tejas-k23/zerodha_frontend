import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universal from './Universal';
function ProductPage() {
    return ( 
        <>
        <Hero/>
        <LeftSection 
    imageURL="/media/kite.png"
    productName="Kite"
    productDescription="A fast, reliable trading platform designed for seamless charting, quick orders, and a smooth investing experience.
It helps traders execute strategies efficiently with powerful tools and minimal latency."
    tryDemo=""
    learnMore=""
    googlePlay=""
    appStore=""
        
        />
          <RightSection 
    imageURL="/media/console.png"
    titleName="Console"
    Description="A central dashboard that lets users track portfolio performance, view reports, manage trades, monitor profits/losses, access statements, and handle account settings—all in one place."
    learnMore=""
          />
           <LeftSection 
    imageURL="/media/coin.png"
    productName="Coin"
    productDescription="A powerful trading API that allows developers to build custom trading platforms, execute orders, fetch market data, automate strategies, and manage portfolios programmatically."
    tryDemo=""
    learnMore=""
    googlePlay=""
    appStore=""
        
        />
        <RightSection
         imageURL="/media/kiteconnect.png"
    titleName="Kite Connect API"
    Description="sy-to-use app to buy, track, and manage your mutual fund investments with complete transparency.
It simplifies long-term i"
    learnMore=""
        />
           <LeftSection 
    imageURL="/media/varsity.png"
    productName="Varsity Mobile"
    productDescription="A comprehensive learning app that offers simplified lessons, quizzes, and modules to master stock market concepts.
It makes finance education accessible through structured chapters and easy-to-understand content"
    tryDemo=""
    learnMore=""
    googlePlay=""
    appStore=""
        
        />
        <Universal/>
        </>
     );
}

export default ProductPage;