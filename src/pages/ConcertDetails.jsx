import React from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import YouTube from "react-youtube";
import events from "./test_data2"; // Data de prueba

function ConcertDetails() {
  const { id } = useParams();
  const location = useLocation();
  const isManagerView = location.pathname.includes("manager");

  const event = events.find((event) => event.id === parseInt(id));

  if (!event) {
    return <div>Concierto no encontrado.</div>;
  }

  const pageStyle = {
    backgroundImage: `url(${event.banner})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    minHeight: "100vh",
    paddingTop: "80px", // para evitar que el contenido se esconda detrás del header fijo
  };

  const overlayStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Fondo semitransparente oscuro
    padding: "20px",
    borderRadius: "10px",
  };

  return (
    <>
      <div style={pageStyle}>
        <Container>
          <Row>
            <Col md={7}>
              <div style={overlayStyle}>
                <h2>{event.title}</h2>
                <YouTube videoId={event.video} className="my-4" />

                <p>
                  <strong>Fecha:</strong> {event.date}
                </p>
                <p>
                  <strong>Hora:</strong> {event.time}
                </p>
                <p>
                  <strong>Duración:</strong> {event.duration}
                </p>
                <p>
                  <strong>Ubicación:</strong> {event.location}
                </p>
                <p>
                  <strong>Accesibilidad:</strong> {event.accessibility}
                </p>
                <p>
                  <strong>Descripción:</strong> {event.description}
                </p>
                <p>
                  <strong>Detalles adicionales:</strong> {event.details}
                </p>

                <h3>Políticas importantes</h3>
                <p>
                  <strong>Política de reembolso:</strong> {event.refundPolicy}
                </p>
                <p>
                  <strong>Política de edad:</strong> {event.agePolicy}
                </p>
                <p>
                  <strong>Política de ingreso:</strong> {event.entryPolicy}
                </p>

                <h3>Información adicional</h3>
                <p>
                  <strong>Patrocinadores:</strong> {event.sponsors}
                </p>
                <p>
                  <strong>Código de vestimenta:</strong> {event.dressCode}
                </p>
                <p>
                  <strong>Estacionamiento:</strong> {event.parking}
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div style={overlayStyle}>
                <h3>Información sobre Tickets</h3>
                {event.tickets.map((ticket, index) => (
                  <div key={index}>
                    <p>
                      <strong>Tipo:</strong> {ticket.type}
                    </p>
                    <p>
                      <strong>Precio:</strong> ${ticket.price}
                    </p>
                    {ticket.discount > 0 && (
                      <p>
                        <strong>Descuento:</strong> {ticket.discount}%
                      </p>
                    )}
                  </div>
                ))}
                <p>
                  <strong>Ventas desde:</strong> {event.ticketSales.start}
                </p>
                <p>
                  <strong>Ventas hasta:</strong> {event.ticketSales.end}
                </p>
                {isManagerView ? (
                  <Button
                    as={Link}
                    to={`/manager-panel/manage-event/${event.id}`}
                    variant="warning"
                    className="w-100 my-2"
                  >
                    Gestionar Evento
                  </Button>
                ) : (
                  <Button
                    as={Link}
                    to={`/buy-tickets/${event.id}`}
                    variant="primary"
                    className="w-100 my-2"
                  >
                    Comprar Tickets
                  </Button>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default ConcertDetails;
