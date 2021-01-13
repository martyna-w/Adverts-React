import React from "react"
import Advert from "./Advert"

const AdvertContainer = () => {
    return(
        <div className="album py-5 bg-light">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <Advert />
                    <Advert />
                    <Advert />  
                </div>
            </div>
        </div>
    )
}

export default AdvertContainer