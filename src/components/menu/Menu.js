import React, { useState } from "react";
import { ListGroup, ListGroupItem, Button, Fade } from "reactstrap";
import "./menu.css";

function Menu() {
  const [fadeIn, setFadeIn] = useState(true);
  const toggle = () => setFadeIn(!fadeIn);

  return (
    <div className="Menu">
      <Button onClick={toggle}>Select A Photo</Button>
      <Fade in={fadeIn}>
        <ListGroup>
          <ListGroupItem>Pic One</ListGroupItem>
          <ListGroupItem>Pic Two</ListGroupItem>
          <ListGroupItem>Pic Three</ListGroupItem>
          <ListGroupItem>Pic Four</ListGroupItem>
          <ListGroupItem>Pic Five</ListGroupItem>
        </ListGroup>
      </Fade>
    </div>
  );
}

export default Menu;
