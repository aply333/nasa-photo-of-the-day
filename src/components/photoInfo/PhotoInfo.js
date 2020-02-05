import React from 'react';
import './photo-info.css';

const PhotoInfo = ({imgData}) => {
    console.log('in PhotosInfo',imgData)
    return(
        <div className="pic-info">
            <h2 className="info-title">{imgData.title}</h2>
            <h2 className="info-title">Date: {imgData.date}</h2>
            <h2 className="info-title">Quality:</h2>
            <p className="img-descipt">Discription: {imgData.explanation}</p>
        </div>
    )
}

export default PhotoInfo;