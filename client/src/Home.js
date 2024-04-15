import React from "react";
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
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
    <Container>
      <div className="header">
        <h1>Block Rx Central</h1>
      </div>
      <br />
      <div className="register">
       
        <h5>
          Owner Should Register Raw material Suppliers, Manufacturers, Distributors and Retailers
        </h5>
       
        <Button
          onClick={redirect_to_roles}
          style={{marginTop: "7px" ,width: "120px"}}
        >
          Register
        </Button>
      </div>
      <br />
      <div className="ordermedicines">
        <h5>Step 2: Owner should order medicines</h5>
        <button
          onClick={redirect_to_addmed}
          className="btn btn-outline-primary btn-sm"
        >
          Order Medicines
        </button>
      </div>
      <br />
      <div className="controlchain">
        <h5>Step 3: Control Supply Chain</h5>
        <button
          onClick={redirect_to_supply}
          className="btn btn-outline-primary btn-sm"
        >
          Control Supply Chain
        </button>
      </div>
      <br />
      <div className="track">
        <h5>
          <b>Track</b> the medicines:
        </h5>
        <button
          onClick={redirect_to_track}
          className="btn btn-outline-primary btn-sm"
        >
          Track Medicines
        </button>
      </div>
    </Container>
  );
}

export default Home;
