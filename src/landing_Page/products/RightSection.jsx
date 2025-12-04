import React from 'react';
function RightSection(
   { imageURL,
    titleName,
    Description,
   
    learnMore,
    }
) {
    return ( 
      <div className="container mt-5">
        <div className="row mt-5">
            
            <div className="col-5 mt-5"> 
                <h1 className='mt-5'>{titleName}</h1>
                <p>{Description}</p>
                <div>
                 <a href={learnMore}  style={{textDecoration:"none", marginLeft:"10%", color: "blue" }}>Learn More <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a>
                 </div>
       
            </div>
            <div className="col-1"></div>
            <div className="col-6 mb-5 ">
                <img src={imageURL} alt='img' ></img>
            </div>
            
        </div>
     </div>
     );
}

export default RightSection;