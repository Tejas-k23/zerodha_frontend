import React from 'react';
function Footer() {
    return ( 
        <footer  style={{backgroundColor:"rgb(240,240,240)"}}>
        <div className="container mt-5 border-top">
            <div className="row mt-5">
                <div className="col">
                    <img src='media/logo.svg' alt='logo' style={{width:"50%"}}/>
                  <p className='mt-3'>  &copy; 2010 - 2025, Not Zerodha Broking Ltd.<br/> All rights reserved</p> 
                </div>
                <div className="col">
                    <p>Company</p>
                   <a href=''> About us</a><br/>
                   <a href=''>Our products</a><br/>
                   <a href=''>Pricing</a><br/>
                   <a href=''>Careers</a><br/>
                   <a href=''> Media & press</a><br/>
                

  </div>
                <div className="col">
                    <p>Suppourt</p>
<a href=''>Contact us</a><br></br>
<a href=''>Help & support portal</a><br></br>
<a href=''>FAQs</a><br></br>
<a href=''>Documentation & guides</a><br></br>
<a href=''>API support</a><br></br>
<a href=''>Status & uptime</a><br></br>

                </div>
                <div className="col">
                    <p>Account</p>
<a href=''>Open an account</a><br></br>
<a href=''>Login</a><br></br>
<a href=''>Fund transfer</a><br></br>
                </div>
            </div>

<div className='mt-5 text-small text-muted' style={{fontSize:"14px"}}>
<p>Zerodha Broking Ltd.: Member of NSE & BSE – SEBI Registration no.: INZ000031633
CDSL: Depository services through Zerodha Securities Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015
Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration no.: INZ000038238
Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, JP Nagar 4th Phase, Bengaluru – 560078, Karnataka, India.
For any complaints pertaining to securities broking please write to complaints@zerodha.com
, for DP related queries contact dp@zerodha.com</p>

<p>Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>

<p>Procedure to file a complaint on SEBI SCORES:<br></br>
Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, Email ID, Nature of Complaint, and supporting documents.
SEBI takes up complaints only after the complainant has approached the concerned intermediary and not received any response, or the response received is unsatisfactory.
Tracking, Communication, Speedy redressal of the grievances.</p>

<p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

<p>"Prevent unauthorized transactions in your account. Update your mobile numbers/email IDs with your stock brokers.
Receive information of your transactions directly from the Exchange at the end of the day.

In case of non-allotment, the funds will remain in your bank account."</p>









</div>


        </div>
        </footer>
     );
}

export default Footer;