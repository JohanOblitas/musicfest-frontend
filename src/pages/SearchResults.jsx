import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import events from "./test_data"; // Data de prueba

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchResults() {
  const query = useQuery();
  const searchTerm = query.get("query")?.toLowerCase() || "";

  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(searchTerm)
  );

  return (
    <>
      <Container className="my-5">
        <h3>Resultados de búsqueda para: "{searchTerm}"</h3>
        <Row>
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
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
            ))
          ) : (
            <p>No se encontraron conciertos.</p>
          )}
        </Row>
      </Container>
    </>
  );
}

export default SearchResults;
