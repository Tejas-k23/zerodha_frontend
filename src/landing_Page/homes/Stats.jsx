import React from 'react';

function Stats() {
    return ( 
       <div className="container mt-5">
        <div className="row">
            <div className="col-6 p-5">
                <h1 className='fs-2 mb-5'>Trust with confidance</h1>
<h2 className='fs-4'>Customer First Always</h2>
<p className='text-muted'>Trusted by more than 3 crore+ traders, our platform is d secure trading experience. From onboarding to withdrawals, every step is designed to be fast, intuitive, and fully optimized for your financial growth.</p>

<h2 className='fs-4'>Built for Speed</h2>
<p className='text-muted'>Our advanced trading engine executes orders in milliseconds, ensuring you never miss an opportunity in fast-moving markets.  you experience stable execution with zero lag, even during high-volume sessions.</p>

<h2 className='fs-4'>Unmatched Reliability</h2>
<p className='text-muted'>With 99.99% uptime, your trades and funds remain safe at all times. real-time monitoring systems to protect your account against threats, ensuring absolute peace of mind.</p>

<h2 className='fs-4'>Growing Community</h2>
<p className='text-muted'>Join a thriving community of active traders who share insights, strategies, and success stories every day. .</p>




            </div>
             <div className="col-6 p-5">
                <img src="media/ecosystem.png" alt="img" style={{width:"90%"}}/>
                <div className="text-centre">
                    <a href=''className='mx-5' style={{textDecoration:"none"}}>Explore our product <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a>
                    <a href=''className='mx-5'style={{textDecoration:"none"}}>Try Kite Demo <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a>
                </div>
             </div>
        </div>
       </div>
     );
}

export default Stats;