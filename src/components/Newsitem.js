// import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class Newsitem extends Component {
  //   static propTypes = {}
  render() {
    let { title, description, imageurl, newsurl ,author,date} = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{ width: "250px" }}>
          <img src={imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary">by {author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsurl} target='_black' className="btn btn-sm  btn-dark">read more..</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Newsitem