import React, { Component } from 'react'


export class NewsItem extends Component {

  render() {
    let {title,description,imageUrl,newUrl,author,date,source} =  this.props;
    return (
      <div className='my-3'>
        <div className="card">
        <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '90%', zIndex: '1'}}> {source}
                        </span>
        <img src={!imageUrl?"https://ichef.bbci.co.uk/news/1024/branded_news/C23E/production/_132862794_mediaitem132862793.jpg":imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
