import React from "react";
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function Home() {
  const navigate = useNavigate();
  const redirect_to_roles = () => {
    navigate("/roles");
  };
  const redirect_to_addmed = () => {
    navigate("/addmed");
  };
  const redirect_to_supply = () => {
    navigate("/supply");
  };
  const redirect_to_track = () => {
    navigate("/track");
  };
  return (
    <>
    <Container>
      <div className="header">
        <h1>💊 Block Rx Central</h1>
      </div>
      <br />
      <div className="register">
       
        <h5 style={{backgroundColor:"#e5e7eb"}}>
        The Owner Needs to Enlist Suppliers of Raw Materials, Manufacturers, Distributors, and Retailers.
        </h5>
       
        <Button
          onClick={redirect_to_roles}
          style={{marginTop: "7px" ,width: "180px"}}
        >
          Register
        </Button>
      </div>
      <br />
      <div className="ordermedicines">
      <h5 style={{backgroundColor:"#e5e7eb"}}>The Owner Should Place an Order for Medicines</h5>
        <Button
          onClick={redirect_to_addmed}
          style={{marginTop: "7px" ,width: "180px"}}
        >
          Order Medicines
        </Button>
      </div>
      <br />
      <div className="controlchain">
        <h5 style={{backgroundColor:"#e5e7eb"}}>Manage the Supply Chain</h5>
        <Button
          onClick={redirect_to_supply}
          style={{marginTop: "7px" ,width: "180px"}}
        >
        Control Supply Chain
        </Button>
      </div>
      <br />
      <div className="track">
        <h5 style={{backgroundColor:"#e5e7eb"}}>
          Track the Medicine
        </h5>
        <Button
          onClick={redirect_to_track}
          style={{marginTop: "7px" ,width: "180px"}}
        >
          Track Medicines
        </Button>
      </div>
    </Container>
    <br/>
    <footer style={{ textAlign: "center" }}>
    <p>Designed by Renjith R S ⚡</p>
  </footer>
  </>
  );
}

export default Home;
