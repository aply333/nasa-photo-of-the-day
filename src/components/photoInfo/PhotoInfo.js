import React, {useState} from 'react';
import {CardText, 
    CardBody,
    CardTitle, 
    CardSubtitle, 
    Button} from 'reactstrap';
import './photo-info.css';

const PhotoInfo = ({imgData}) => {
    console.log('in PhotosInfo',imgData)


    return(
        <CardBody>
            <CardTitle>{imgData.title}</CardTitle>
            <hr></hr>
            <CardSubtitle>Date: {imgData.date}</CardSubtitle>
            <CardText>Discription: {imgData.explanation}</CardText>
            <CardSubtitle>Shot By: {imgData.copyright}</CardSubtitle>
            <hr></hr>
            <Button href={imgData.hdurl}>See Full Image</Button>
        </CardBody>
    )
}

export default PhotoInfo;