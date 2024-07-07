import React from "react";
import { Container, Row, Col, Nav, Tab, Form, Button } from "react-bootstrap";
import events from './test_data'; // Data de prueba

function ManagerPanel() {
  const username = "usuario"; // Reemplazar posteriormente

  return (
    <>
      <Container className="my-5">
        <h2>Bienvenido al Panel de Managers, {username}</h2>
        <Tab.Container id="manager-panel-tabs" defaultActiveKey="events">
          <Row>
            <Col sm={2}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="create-event">Crear Evento (+)</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="events">Eventos</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="organizer-info">
                    Información de Organizador
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={10}>
              <Tab.Content>
                <Tab.Pane eventKey="create-event">
                  <CreateEventForm />
                </Tab.Pane>
                <Tab.Pane eventKey="events">
                  <EventsList />
                </Tab.Pane>
                <Tab.Pane eventKey="organizer-info">
                  <OrganizerInfo />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </>
  );
}

// Crear evento
function CreateEventForm() {
  return (
    <Form>
      <h3>Detalles Básicos</h3>
      <Form.Group controlId="eventName" className="mb-4">
        <Form.Label>Nombre del evento</Form.Label>
        <Form.Control type="text" placeholder="Ingresa el nombre del evento" />
      </Form.Group>
      <Form.Group controlId="eventDateTime" className="mb-4">
        <Form.Label>Fecha y hora</Form.Label>
        <Form.Control type="datetime-local" />
      </Form.Group>
      <Form.Group controlId="eventDuration" className="mb-4">
        <Form.Label>Duración del evento</Form.Label>
        <Form.Control type="text" placeholder="Duración del evento" />
      </Form.Group>
      <Form.Group controlId="eventLocation" className="mb-4">
        <Form.Label>Ubicación</Form.Label>
        <Form.Control type="text" placeholder="Ubicación del evento" />
      </Form.Group>
      <Form.Group controlId="eventAccessibility" className="mb-4">
        <Form.Label>Accesibilidad</Form.Label>
        <Form.Control
          type="text"
          placeholder="Información sobre accesibilidad"
        />
      </Form.Group>

      <h3>Descripción del evento</h3>
      <Form.Group controlId="eventDescription" className="mb-4">
        <Form.Label>Breve descripción</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Breve descripción del evento"
        />
      </Form.Group>
      <Form.Group controlId="eventAdditionalDetails" className="mb-4">
        <Form.Label>Detalles adicionales</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          placeholder="Detalles adicionales del evento"
        />
      </Form.Group>

      <h3>Imágenes y multimedia</h3>
      <Form.Group controlId="eventMainImage" className="mb-4">
        <Form.Label>Imagen principal</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <Form.Group controlId="eventPromoVideo" className="mb-4">
        <Form.Label>Videos o clips promocionales</Form.Label>
        <Form.Control type="text" placeholder="Link de YouTube" />
      </Form.Group>

      <h3>Información sobre Tickets</h3>
      <Form.Group controlId="ticketTypes" className="mb-4">
        <Form.Label>Tipos de tickets disponibles</Form.Label>
        <Form.Control type="text" placeholder="Ingresa el tipo de ticket" />
      </Form.Group>
      <Form.Group controlId="ticketPrices" className="mb-4">
        <Form.Label>Precios</Form.Label>
        <Form.Control type="text" placeholder="Ingresa el precio del ticket" />
      </Form.Group>
      <Form.Group controlId="ticketDiscounts" className="mb-4">
        <Form.Label>Descuento</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingresa el descuento (si aplica)"
        />
      </Form.Group>
      <Form.Group controlId="ticketSalesStart" className="mb-4">
        <Form.Label>Fecha de inicio de ventas</Form.Label>
        <Form.Control type="date" />
      </Form.Group>
      <Form.Group controlId="ticketSalesEnd" className="mb-4">
        <Form.Label>Fecha de fin de ventas</Form.Label>
        <Form.Control type="date" />
      </Form.Group>

      <h3>Políticas importantes</h3>
      <Form.Group controlId="refundPolicy" className="mb-4">
        <Form.Label>Política de reembolso</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Detalla la política de reembolso"
        />
      </Form.Group>
      <Form.Group controlId="agePolicy" className="mb-4">
        <Form.Label>Política de edad</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Detalla la política de edad"
        />
      </Form.Group>
      <Form.Group controlId="entryPolicy" className="mb-4">
        <Form.Label>Política de ingreso</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Detalla la política de ingreso"
        />
      </Form.Group>

      <h3>Información adicional</h3>
      <Form.Group controlId="eventSponsors" className="mb-4">
        <Form.Label>Patrocinadores o colaboradores</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Patrocinadores o colaboradores"
        />
      </Form.Group>
      <Form.Group controlId="dressCode" className="mb-4">
        <Form.Label>Código de vestimenta</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Código de vestimenta"
        />
      </Form.Group>
      <Form.Group controlId="parkingInstructions" className="mb-4">
        <Form.Label>Instrucciones de estacionamiento o transporte</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Instrucciones de estacionamiento o transporte"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Crear Evento
      </Button>
    </Form>
  );
}
// Lista de Eventos del Manager
function EventsList() {
  return (
    <div>
      <h3>Eventos</h3>
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
                <Button variant="primary">Ver Detalles</Button>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}
// Lista de Eventos del Manager
function OrganizerInfo() {
  return (
    <div>
      <h3>Información de Organizador</h3>
      <p>Nombre de la organización: Ejemplo Organización</p>
      <p>Contacto: contacto@ejemplo.com</p>
      <p>Redes Sociales:</p>
      <ul>
        <li>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </li>
      </ul>
    </div>
  );
}

export default ManagerPanel;
