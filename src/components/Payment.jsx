import React, {useState} from 'react'

function Payment() {
  const [selectedPlan, setSelectedPlan] =useState(null);
  const [discountPrice, setDiscountPrice] = useState(0);
  
 

  return (

    <div className='container bg-white my-5 rounded' style={{width:450}}>
      <div className="row justify-content-around">
      <button className="text-bg-primary bg-opacity-75 rounded-circle border-0 mt-3 d-flex justify-content-center align-items-center fw-bold" style={{ width: 35, height: 35 }}>1</button>
      <button className="text-bg-primary bg-opacity-75 rounded-circle border-0 mt-3 p-2 d-flex justify-content-center align-items-center fw-bold" style={{ width: 35, height: 35 }}>2</button>
      </div>

      <div className="row d-flex justify-content-around">
      <div className="text-dark" style={{ width: 90 }} ><p>Sign up</p></div>
      <div className="text-dark" style={{ width: 90 }}>Subscribe</div>
      </div>
      
      <div className="row ">
      <h5 className="text-dark d-flex justify-content-around mt-2" >Select your subscription plan</h5>
      </div>

      <div className="row d-flex justify-content-center">
      <div className="border border-dark rounded p-1 mt-2 d-flex fw-bold text-dark text-opacity-25 justify-content-between" style={{width:420,fontSize:"12px"}}>
       <div> 
          <input type="radio" disabled className='text-center m-2'/> <span className='text-bg-danger mx-5 px-2 position-absolute'
           style={{fontSize:"8px",marginTop:"-4px"}}>Offer expired</span> 12 Months Subscription</div>
          <div>
          <div>total ₹ 99</div>
          <div className='float-end fw-lighter' style={{fontSize:"8px"}}>₹8 /mo</div>
          </div>

          
        
      </div>
      
      </div>

     
      <div className="row d-flex justify-content-center">
      <div className="border border-dark rounded p-1 mt-2 d-flex fw-bold justify-content-between" style={{width:420,fontSize:"12px"}}>
       <div> 
        
  
      
          <input type="radio" name="plan" value='12' onChange={(e) =>{
setSelectedPlan(e.target.value);
setDiscountPrice(60);
          }}
          className='text-center m-2' />
       
       

          <span className='text-light mx-5 px-2 position-absolute' style={{fontSize:"8px",backgroundColor:"#47BA68",marginTop:"-4px"}}>Recommended</span>
          12 Months Subscription</div>
       <div>
       <div>total ₹ 179</div>
        <div className='float-end' style={{fontSize:"8px"}}>₹15 <span className="fw-lighter text-dark text-opacity-50"> /mo</span></div>
       </div>
      </div>
      </div>
      
     


      <div className="row d-flex justify-content-center">
      <div className="border border-dark rounded p-1 mt-2 d-flex fw-bold justify-content-between" style={{width:420,fontSize:"12px"}}>
       <div> <input type="radio" name="plan" value="6" className='text-center m-2' onChange={(e) =>{
        setSelectedPlan(e.target.value);
        setDiscountPrice(50);
       }} />
6 Months Subscription</div>
        <div>
        <div>total ₹ 149</div>
        <div className='float-end' style={{fontSize:"8px"}}>₹25 <span className="fw-lighter text-dark text-opacity-50"> /mo</span></div>
        </div>
      </div>
      </div>

      <div className="row d-flex justify-content-center">
      <div className="border border-dark rounded p-1 mt-2 d-flex fw-bold justify-content-between" style={{width:420,fontSize:"12px"}}>
       <div> <input type="radio" name="plan" value="3" className='text-center m-2' onChange={(e) => {
    setSelectedPlan(e.target.value);
    setDiscountPrice(29);
  }} />
3 Months Subscription</div>
       
        <div>
        <div>total ₹ 99</div>
        <div className='float-end' style={{fontSize:"8px"}}>₹33 <span className="fw-lighter text-dark text-opacity-50"> /mo</span></div>
        </div>

      </div>
      </div>
      <hr />
      <div className="row d-flex justify-content-between mx-3">
      <div style={{fontSize:"12px"}}>Subscription fee <span className='float-end'>₹ 18,500</span></div>
      </div>

      <div className="row d-flex justify-content-between mx-1 w-80" style={{fontSize:"12px"}}>
        <div className="border border-danger border-2 bg-danger bg-opacity-25 rounded mt-2 p-2 text-danger text-center">
        <div className='d-flex justify-content-between mx-3 fw-bold'>
            <div>Limited time offer</div>
            <div className='text-dark'>- 18401</div>
        </div>
        <div className="row d-flex mx-2 text-danger"><img src="./images/Icon6.png" alt="" className='img-fluid' style={{height:20,width:40}}/>offer valid till 25th march 2023</div>
        </div>
      </div>

      <div className="row mt-2 d-flex justify-content-between mx-3">
      <div style={{fontSize:"12px"}}>Total(Incl. of 18% gst) <span className='float-end'>₹ {discountPrice * 1.18 + discountPrice * selectedPlan }</span> </div>
      </div>



      <div className="row d-flex justify-content-center align-items-center w-100">
      <div className="p-2 mt-3 d-flex justify-content-evenly">
       <button className="btn btn-outline-danger px-5 p-2 fw-bold" style={{fontSize:"12px"}}>CANCEL</button>
       <button className="btn text-light px-4 p-2 fw-bold" style={{fontSize:"12px",backgroundColor:"#47BA68"}}>PROCEED TO PAY</button>
      </div>
      </div>

      <div className="row d-flex justify-content-start pb-4 ">
      <img src="./images/Frame.png" alt="" style={{height:60,width:200,}}/>
      </div>

    </div>
 
  )
}

export default Payment

      

