import React, { Component } from 'react'
import loading from '../asset/loading1.gif'


export class Spinner extends Component {
  render() {
    return (
      <div className='text-center my-3'>
        <img className='img' height="100" src={loading} alt='..'/>
      </div>
    )
  }
}

export default Spinner
