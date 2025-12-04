import React from 'react';
function LeftSection(
   { imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore}
) {
    return ( 
     <div className="container mt-5 p-5">
        <div className="row mt-5">
            <div className="col-5">
                <img src={imageURL} alt='img'></img>
            </div>
            <div className="col-2"></div>
            <div className="col-5 mt-5"> 
                <h1>{productName}</h1>
                <p>{productDescription}</p>
                <div>
                <a href={tryDemo}  style={{ textDecoration: "none", color: "blue" }}>try Demo <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a>
                 <a href={learnMore}  style={{textDecoration:"none", marginLeft:"10%", color: "blue" }}>Learn More <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a>
                 </div>
                 <div className='mt-4'>
                    <a href={googlePlay}><img src='media/googlePlayBadge.svg'/></a>
                           <a href={appStore}  style={{textDecoration:"none", marginLeft:"7%"}}><img src='media/appstoreBadge.svg'/></a>
                 </div>
            </div>
        </div>
     </div>
     );
}

export default LeftSection;