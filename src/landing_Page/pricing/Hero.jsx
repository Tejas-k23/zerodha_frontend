import React from 'react';
function Hero() {
    return ( 
       <div className="container">
        <div className="row p-5 mt-5 border-bottom text-center">
            <h1>Pricing</h1>
            <h3 className='text-muted mt-3 fs-5'>free equity investment and flat $20 trady and F&O trades</h3>
        </div>
        <div className="row p-5 mt-5 text-centre">
            <div className="col-4 p-5">
                <img src='media/pricingEquity.svg'/>
                <h1>Free equity delivery</h1>
                <p>All equity delivery investment (NSE , BSE) are Absolute Free -$0 Brokarage.</p>
            </div>

             <div className="col-4 p-5">
                <img src='media/intradayTrades.svg'/>
                <h1>Intraday and F&O trasdes </h1>
                <p>We pioneered the concept of discount broking and price transparency in India. Flat and no hidden charges</p>
            </div>

             <div className="col-4 p-5">
                <img src='media/pricingEquity.svg'/>
                <h1>Free direct n&F</h1>
                <p> we arsity, the largest online stock marketeducation book in the word covering everything from the basics to advanced tradin</p>
            </div>
        </div>
       </div>
     );
}

export default Hero;