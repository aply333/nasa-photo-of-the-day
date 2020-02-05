import React, { useEffect, useState } from "react";
import "./App.css";
import './components/header/Header';
import Header from "./components/header/Header";
import PhotoInfo from "./components/photoInfo/PhotoInfo";
import axios from "axios";
import PhotoContainer from "./components/photocontainer/PhotoContainer";

function App() {

  const initialArray = []
  const [imgData, imgDataFetch] = useState(initialArray);

  const imgFetch = () =>{
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=zkoturrtkWDihZPedIUMyHQ8aVQKuLUvINYidNpJ")
      .then(res => imgDataFetch(res.data))
      .catch(err => console.log(err))
  }

  useEffect(imgFetch, [])

  return (
    <div className="App">
      <div className="text-body">
        <Header />
        <PhotoInfo imgData={imgData}/>  
      </div>
      <PhotoContainer imgData={imgData}/>
    </div>
  );
}

export default App;
