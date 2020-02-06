import React from 'react';
import {CardImg} from 'reactstrap';
import './photo-cont.css';

const PhotoContainer = ({imgData}) => {
    return(
        <CardImg top width="100%" src = {imgData.url} alt="Card image cap" />
    )
}

export default PhotoContainer;