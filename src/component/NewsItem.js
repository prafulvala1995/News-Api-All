
import React, { Component } from "react";


export default class NewsItem extends Component {
  render() {

    let {title, discription , imageUrl , newsUrl , author , date } = this.props;

    return (
      <>
        <div className="my-3">
            <div className="card">
                <img src={imageUrl ? imageUrl : "https://iotcdn.oss-ap-southeast-1.aliyuncs.com/News-Image.jpg"} height={"235px"} className="card-img-top ratio-16x9" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{discription}</p>
                    <p className="card-text"><small className="text-body-secondary">By {!author? "Unknown" : author} on {new Date(date).toGMTString() }</small></p>

                    <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">Read More</a>

                </div>
            </div>
        </div>  
      </>
    );
  }
}
