import React, {useCallback} from "react"
import { useHistory } from "react-router-dom";
import noImage from "../img/noImage.jpg"

const Advert = ({advert}) => {

  const history = useHistory();
  const redirectToDetails = useCallback(() => history.push(`/details/${advert._id}`), [history]);

  const baseUrl = "http://localhost:3000/"

  function showNoImage(){
    return <img className="card-img-top" src={noImage} alt={advert.title} />
  }

  function showImage(){
    return <img className="card-img-top" src={baseUrl+advert.imageUrl} alt={advert.title} />
  }

  function Display (props) {
    if (advert.imageUrl !== ""){
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
                <button type="button" className="btn btn-sm btn-outline-secondary" onClick={redirectToDetails}>View</button>
              </div>
              <small className="text-muted">{advert.owner}</small>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Advert