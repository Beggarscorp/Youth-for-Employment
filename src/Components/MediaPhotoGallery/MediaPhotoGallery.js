import React from 'react'
import '../MediaPhotoGallery/MediaPhotoGallery.css'

const MediaPhotoGallery = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="img">
                            <img src="/Assets/images/me.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="img">
                            <img src="/Assets/images/media-img-3.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="img">
                            <img src="/Assets/images/media-img-1.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="img">
                            <img src="/Assets/images/media-img-2.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MediaPhotoGallery
