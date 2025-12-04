import React from 'react';
function Hero() {
    return ( 
        <section className="container-flued mb-5" id='suppourtHero'>
            <div className=" p-5  " id='suppourtwrap'> 
                <h3>Suppourt Portal</h3>
                <a href=''>track ticket</a>
            </div>
            <div className="row  p-5 mx-5">
                <div className="col-6 p-5">
                    <h4>Search for an answer or browse help to createa ticket</h4>
                    <input placeholder='Eg. how do i active F&O'/><br/>
                    <a href="">Track Acount opening   </a><a href="">   Track segment Activation  </a><a href="">Intraday  </a><br/><a href="">kite user manual  </a><a href=""></a>
                </div>
                <div className="col-1"></div>
                   <div className="col-5 p-5">
                    <h4>Features</h4>
                    
                   <ol>
                    <li><a href=''>current take over listing-2025</a></li>
                    <li><a href=''> All details of intraday</a></li>
                   </ol>
                </div>
            </div>
        </section>
     );
}

export default Hero;