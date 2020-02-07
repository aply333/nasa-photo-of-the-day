import React, { useEffect, useState } from "react";
import "./App.css";

import axios from "axios";

import { Card } from "reactstrap";
import styled from "styled-components";

import Header from "./components/header/Header";
import PhotoInfo from "./components/photoInfo/PhotoInfo";
import Menu from "./components/menu/Menu";
import PhotoContainer from "./components/photocontainer/PhotoContainer";

import MarsShots from "./components/OtherPages/MarsShots";

function App() {
  const initialArray = [];
  const [imgData, imgDataFetch] = useState(initialArray);

  const imgFetch = () => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=zkoturrtkWDihZPedIUMyHQ8aVQKuLUvINYidNpJ"
      )
      .then(res => imgDataFetch(res.data))
      .catch(err => console.log(err));
  };

  useEffect(imgFetch, []);

  const BackgroundImage = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${imgData.url});
    background-repeat: no-repeat;
    background-size: 100vw 100vh;
    filter: blur(10px);
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    // &:hover {
    //   opacity: 0.5;
    }
  `;

  const HomeCard = () => {
    return (
      <div className="AppCenter">
        <Card>
          <PhotoContainer imgData={imgData} />
          <PhotoInfo imgData={imgData} />
        </Card>
      </div>
    );
  };

  const DisplayedContent = () => {
    return appContent;
  };
  const [appContent, setAppContent] = useState(HomeCard);

  return (
    <>
      <BackgroundImage />
      <div className="Header-Menu">
        <div className="menuList">
          <Menu />
        </div>
      </div>
      <div className="App">
        <DisplayedContent  />
      </div>
    </>
  );
}

export default App;
