import React from 'react';
function Awards() {
    return (  
      <div className="container">
        <div className="row mt-5">
            <div className="col-6 p-5">
                <img src='media/largestBroker.svg' alt='img'/>
            </div>
            <div className="col-6 p-5">
                
                    <h1 className='mt-5'>Largest stock broker in India</h1>
                    <p className='mb-5'>2+ millione client of zerodha client contribute to volume in India daily by trading & investin in:</p>
                    <div className="row">
                     <div className="col-6">
                        <ul>
                            <li>Future and Options</li>
                            <li>Commodity derivatives</li>
                            <li>Currency derivative</li>
                        </ul>
                     </div>
                      <div className="col-6">
                          <ul>
                            <li>Stocks & IPOs</li>
                            <li>Direct mutual funds</li>
                            <li>Bonds and Govt. Sectors</li>
                        </ul>
                      </div>
                      <img src='media/pressLogos.png' style={{width:"90%"}}/>

                </div>
            </div>
        </div>
      </div>
    );
}

export default Awards;