import React from 'react';

function OpenAccount() {
    return ( 
        <div className='container text-center mt-5'>
            <h1 className="mt-5 fs-2">Open a Zerodha account</h1>
          <p className='fw-semibold text-muted mt-3'>
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
          </p>
          <button
            className="p-2 btn btn-primary fs-5 mb-5 mt-3"
            style={{ width: "15%", backgroundColor:"#387ED1" }}
          >
            SignUp For Free
          </button>
        </div>
     );
}

export default OpenAccount;