import React from 'react'

function History() {
  return (
    <div className='container'>
      <h1 className='text-white m-5 ps-4'>Access curated courses worth ₹<s>18,500</s> at just <span className='text-primary'>₹ 99 </span>per year!</h1>
      <ul className='text-white m-5 ps-4'>
        <li className='row mt-3'><img src="./images/Icon4.png" alt="" className='col-md-3' style={{height:50,width:70}}/> <h5 className='ps-5 pt-2 col-md-9'><span className='text-primary'>100+</span> Job relevant courses </h5></li>
        <li className='row mt-3'><img src="./images/Icon.png" alt="" className='col-md-3' style={{height:50,width:70}}/> <h5 className='ps-5 pt-2 col-md-9'><span className='text-primary'>20,000+</span> Hours of content </h5></li>
        <li className='row mt-3'><img src="./images/Icon5.png" alt="" className='col-md-3' style={{height:50,width:70}}/> <h5 className='ps-5 pt-2 col-md-9'><span className='text-primary'>Exclusive</span> Webinar access </h5></li>
        <li className='row mt-3'><img src="./images/Icon3.png" alt="" className='col-md-3' style={{height:50,width:70}}/> <h5 className='ps-5 pt-2 col-md-9'>Scholarship worth<span className='text-primary'> ₹94,500</span></h5></li>
        <li className='row mt-3'><img src="./images/Icon2.png" alt="" className='col-md-3' style={{height:50,width:70}}/> <h5 className='ps-5 pt-2 col-md-9'><span className='text-primary'>Ad Free </span>learning experience</h5></li>
      </ul>
    </div>
  )
}

export default History
