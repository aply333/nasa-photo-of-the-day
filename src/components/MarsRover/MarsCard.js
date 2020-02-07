import React from "react";
import styled from "styled-components";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle
} from "reactstrap";

const MarsSize = styled.div`
    width: 400px;
    margin:25px;
`;

function MarsCard({ apiData }) {
  //   console.log("hello from Mars Card", apiData);

  return (
    <MarsSize>
      <Card>
        <CardImg top width="100%" src={apiData.img_src} alt="Card image cap" />
        <CardBody>
          <CardTitle>Date:{apiData.earth_date}</CardTitle>
        </CardBody>
      </Card>
    </MarsSize>
  );
}

export default MarsCard;
