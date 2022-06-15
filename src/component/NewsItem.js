import React, { Component } from 'react'

export class NewsItem extends Component {
  
  render() {
    let {title,description,imgUrl,newsUrl}=this.props;
    return (
      
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
      <img src={!imgUrl?"https://images.hindustantimes.com/img/2022/06/15/1600x900/AFP_9BX2L6_1623489835537_1655275114928.jpg":imgUrl} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
      </div>
    </div>
    </div>
    )
  }
}

export default NewsItem