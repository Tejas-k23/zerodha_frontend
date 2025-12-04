import React from 'react';
function Universal() {
    return ( 
 <div className="container mt-5">
    <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>Extend your trading and investment experience even further with our partner platforms</p>

        <div className="col-4 p-3 mt-5">
            <img src='media/smallcaseLogo.png'className="universal-img"/>
            <p className='text-small text-muted mb-5'>Thematic investment platform</p>
        </div>

        <div className="col-4 p-3 mt-5">  
            <img src='media/streakLogo.png' className="universal-img"/>
            <p className='text-small text-muted'>Algo & Strategy Platform</p>
        </div>
        
        <div className="col-4 p-3 mt-5">
            <img src='media/sensibullLogo.svg' className="universal-img"/>
            <p className='text-small text-muted'>Option and trading Platform</p>
        </div>

        <div className="col-4 p-3 mt-5">
            <img src='media/zerodhaFundhouse.png' className="universal-img"/>
            <p className='text-small text-muted'>Bonds Trading Platform</p>
        </div>

        <div className="col-4 p-3">  
            <img src='media/goldenpiLogo.png' className="universal-img"/>
            <p className='text-small text-muted'>Assets management</p>
        </div>
        
        <div className="col-4 p-3">
            <img src='media/dittoLogo.png'  className="universal-img"/>
            <p className='text-small text-muted'>Insurance</p>
        </div>
                   <button className='p-2 btn btn-primary fs-5 mt-5 mb-5' style={{width:"20%", margin:"0 auto"}}>Signup Now</button>
    </div>

 </div>
     );
}

export default Universal;
