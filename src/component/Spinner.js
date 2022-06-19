import React from 'react'
import loading from '../asset/loading1.gif'


const Spinner=()=> {
  
    return (
      <div className='text-center my-3'>
        <img className='img' height="100" src={loading} alt='..'/>
      </div>
    )
  
}

export default Spinner
