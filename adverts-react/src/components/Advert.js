import React, {useEffect} from "react"
import noImage from "../img/noImage.jpg"

const Advert = ({advert}) => {

    const baseUrl = "http://localhost:3000/"

    function showNoImage(){
      return <img className="card-img-top" src={noImage} alt="Card image cap" />
    }

    function showImage(){
      return <img className="card-img-top" src={baseUrl+advert.imageUrl} alt="Card image cap" />
    }

    function Display (props) {
      if (advert.imageUrl != ""){
        return showImage()
      } else {
        return showNoImage()
      }
    }

    return (      
        <div className="col">
          <div className="card shadow-sm">
          <Display />
            <div className="card-body">
              <p className="card-text">{advert.title}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small className="text-muted">{advert.owner}</small>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Advert