import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import events from "./test_data"; // Data de prueba

function ConcertsList() {
  return (
    <>
      <Container className="my-5">
        <h3>Lista de Conciertos</h3>
        <Row>
          {events.map((event) => (
            <Col md={6} key={event.id} className="mb-4">
              <div
                className="event-card p-3"
                style={{
                  backgroundImage: `url(${event.banner})`,
                  backgroundSize: "cover",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    color: "white",
                    padding: "10px",
                    borderRadius: "5px",
                  }}
                >
                  <h4>{event.title}</h4>
                  <p>Fecha: {event.date}</p>
                  <p>Hora: {event.time}</p>
                  <p>Duración: {event.duration}</p>
                  <p>Ubicación: {event.location}</p>
                  <Button
                    as={Link}
                    to={`/concert-details/${event.id}`}
                    variant="primary"
                  >
                    Ver Detalles
                  </Button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default ConcertsList;
