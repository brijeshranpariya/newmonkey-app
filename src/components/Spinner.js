import React, { Component } from 'react'
import loading from '../components/loading.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center py-5'>
        <img src={loading} alt="loading" />
      </div>
    )
  }
}

export default Spinner