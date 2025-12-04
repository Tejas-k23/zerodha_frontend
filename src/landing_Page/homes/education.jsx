import React from 'react';
function Education() {
    return (  
        <div className="container p-5">
            <div className="row ">
                <div className="col-6">
                    <img src="media/education.svg" alt="img" style={{width:"75%"}} />
                </div>
                <div className="col-6">
                    <h1 className='mb-5 fs-3'>Free and open market education</h1>
                    <p className='mb-3'>Varsity, the largest online stock marketeducation book in the word covering everything from the basics to advanced trading.</p>
                           <a href=''className='mx-5'style={{textDecoration:"none"}}>Versity <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a>

                            <p className='mb-3 mt-4'>Trading Q&A, the most active trading and investment <br/>market related queries</p>
                           <a href=''className='mx-5'style={{textDecoration:"none"}}>rading Q&A<i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Education;