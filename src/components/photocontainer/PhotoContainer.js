import React from 'react';
import './photo-cont.css';

const PhotoContainer = ({imgData}) => {
    return(
        <div className = "img-cont">
            <img src = {imgData.url}></img>
        </div>
    )
}

export default PhotoContainer;