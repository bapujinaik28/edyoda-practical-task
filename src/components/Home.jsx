import React from 'react'
import History from './History'
import Payment from './Payment'

function Home() {
  return (
    <div className='homeClasses'>
      <div className="row">
        <div className="col-md-6">
            <History/>
        </div>
        <div className="col-md-6">
            <Payment/>
        </div>
      </div>
    </div> 
  )
}

export default Home
