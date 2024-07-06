import React from "react";
import { Container, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Banner from "../resources/images/Banner.jpg";

function Home() {
  return (
    <>
      <Container fluid className="p-0">
        <Image src={Banner} fluid className="w-100" />
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Button variant="dark" size="lg" as={Link} to="/concerts">
            Ver Conciertos
          </Button>
        </div>
      </Container>
    </>
  );
}

export default Home;
