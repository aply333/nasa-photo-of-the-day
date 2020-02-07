import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MarsCard from "./MarsCard";
import axios from "axios";

const MarsContainer = styled.div`
    margin:auto auto;
    margin-top:100px;
    width:75%;
    height:800px;
    display:flex;
    overflow-y:auto;
    flex-wrap:wrap;
`;

function MarsShots() {
  const initialArray = [];
  const [apiData, apiDataFetch] = useState(initialArray);

  const apiLoad = () => {
    axios
      .get(
        "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=mREQtNFPZsHQ9zzTDAIaqpr1QXDljHv8YqFdqAPq"
      )
      .then(res => apiDataFetch(res.data.photos))
      .catch(err => console.log(err));
  };

  useEffect(apiLoad, []);

  return (
    <MarsContainer>
      {apiData.map(element => (
        <MarsCard apiData={element} />
      ))}
    </MarsContainer>
  );
}

export default MarsShots;
