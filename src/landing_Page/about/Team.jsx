import React from 'react';
function Team() {
    return ( 
        <div className="container">
        <div className="row text-center  mt-5">
            <h1 className='mt-5 mb-4 '>People</h1>
        </div>
        <div className="row p-3  text-muted " style={{lineHeight:"1.8",fontSize:"1.2em"}}>
         <div className="col-6 p-3 text-center">
           <img src='media/nithinKamath.jpg' alt='img' style={{borderRadius:"100%", width:"60%"}}></img>
           <h4 className='mt-4'>Nithin Kamath</h4>
           <h6>Founder, CEO</h6>


         </div>
            <div className="col-6  p-3">
        <p>Nithin Kamath, the CEO and co-founder of Zerodha, is known for transforming India’s trading landscape through innovation, transparency, and a strong focus on investor education. With a vision to simplify and democratize market access, he built Zerodha into one of India’s most trusted and influential financial platforms.</p>
        <p>Nithin Kamath is a visionary entrepreneur who reshaped India’s trading culture </p>
        <p >connect on <a href=''style={{textDecoration:"none"}}>Homepage /</a> <a href='' style={{textDecoration:"none"}}>TradingQnA /</a> <a href='' style={{textDecoration:"none"}}>Twitter</a></p>

          
        </div>
        </div>
       </div>
     );
}

export default Team;