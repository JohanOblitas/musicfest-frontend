import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button, Form, Image } from "react-bootstrap";
import { FaTicketAlt, FaShoppingCart, FaCreditCard, FaCheckCircle } from "react-icons/fa";
import events from "./test_data2"; // Data de prueba

function BuyTickets() {
  const { id } = useParams();
  const event = events.find(event => event.id === parseInt(id));
  const [section, setSection] = useState(1);
  const [ticketCounts, setTicketCounts] = useState(Array(event.tickets.length).fill(0));
  const [totalPrice, setTotalPrice] = useState(0);
  const [deliveryOption, setDeliveryOption] = useState('E-Ticket');
  const [paymentMethod, setPaymentMethod] = useState('Tarjeta');

  const handleTicketCountChange = (index, value) => {
    const newCounts = [...ticketCounts];
    newCounts[index] = value;
    setTicketCounts(newCounts);
    updateTotalPrice(newCounts, deliveryOption);
  };

  const updateTotalPrice = (counts, delivery) => {
    let total = counts.reduce((sum, count, index) => {
      const ticket = event.tickets[index];
      const discountPrice = ticket.price * (1 - ticket.discount / 100);
      return sum + discountPrice * count;
    }, 0);

    if (delivery === 'Retiro en tienda') {
      total += 10;
    }

    setTotalPrice(total);
  };

  const handleDeliveryOptionChange = (option) => {
    setDeliveryOption(option);
    updateTotalPrice(ticketCounts, option);
  };

  return (
    <>
      <Container className="my-5">
        <Row>
          <Col md={7}>
            <h2>{event.title} - Compra de Tickets</h2>
            {section === 1 && (
              <div>
                <h3><FaTicketAlt /> 1. Tickets</h3>
                {event.tickets.map((ticket, index) => (
                  <div key={index} className="mb-3">
                    <h4>{ticket.type}</h4>
                    <p>Precio: S/. {ticket.price}</p>
                    {ticket.discount > 0 && <p>Descuento: {ticket.discount}%</p>}
                    <Form.Control
                      type="number"
                      min="0"
                      max="6"
                      value={ticketCounts[index]}
                      onChange={(e) => handleTicketCountChange(index, parseInt(e.target.value))}
                    />
                  </div>
                ))}
                <h4>Total: S/. {totalPrice.toFixed(2)}</h4>
                <Button onClick={() => setSection(2)}>Continuar</Button>
              </div>
            )}

            {section === 2 && (
              <div>
                <h3><FaShoppingCart /> 2. Datos de Compra</h3>
                <Form.Check
                  type="radio"
                  label="E-Ticket (Sin tarifa adicional)"
                  name="deliveryOption"
                  value="E-Ticket"
                  checked={deliveryOption === 'E-Ticket'}
                  onChange={(e) => handleDeliveryOptionChange(e.target.value)}
                />
                <Form.Check
                  type="radio"
                  label="Retiro en tienda (10 soles de tarifa a la impresión)"
                  name="deliveryOption"
                  value="Retiro en tienda"
                  checked={deliveryOption === 'Retiro en tienda'}
                  onChange={(e) => handleDeliveryOptionChange(e.target.value)}
                />
                <h4>Total: S/. {totalPrice.toFixed(2)}</h4>
                <Button onClick={() => setSection(1)}>Atrás</Button>
                <Button onClick={() => setSection(3)}>Continuar</Button>
              </div>
            )}

            {section === 3 && (
              <div>
                <h3><FaCreditCard /> 3. Método de Pago</h3>
                <Form.Check
                  type="radio"
                  label="Tarjeta de crédito o débito"
                  name="paymentMethod"
                  value="Tarjeta"
                  checked={paymentMethod === 'Tarjeta'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <Form.Check
                  type="radio"
                  label="PayPal"
                  name="paymentMethod"
                  value="PayPal"
                  checked={paymentMethod === 'PayPal'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <Form.Check
                  type="radio"
                  label="Monederos digitales (Apple Pay o Google Pay)"
                  name="paymentMethod"
                  value="Monederos"
                  checked={paymentMethod === 'Monederos'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <Button onClick={() => setSection(2)}>Atrás</Button>
                <Button onClick={() => setSection(4)}>Continuar</Button>
              </div>
            )}

            {section === 4 && (
              <div>
                <h3><FaCheckCircle /> 4. Confirmación</h3>
                <p><strong>Evento:</strong> {event.title}</p>
                <p><strong>Fecha:</strong> {event.date}</p>
                <p><strong>Hora:</strong> {event.time}</p>
                <p><strong>Duración:</strong> {event.duration}</p>
                <p><strong>Ubicación:</strong> {event.location}</p>
                <p><strong>Accesibilidad:</strong> {event.accessibility}</p>
                <h4>Tickets</h4>
                {event.tickets.map((ticket, index) => (
                  <div key={index}>
                    <p><strong>{ticket.type}:</strong> {ticketCounts[index]} x S/. {ticket.price}</p>
                    {ticket.discount > 0 && <p>Descuento: {ticket.discount}%</p>}
                  </div>
                ))}
                <h4>Total: S/. {totalPrice.toFixed(2)}</h4>
                <Button onClick={() => setSection(3)}>Atrás</Button>
                <Button onClick={() => alert('Compra confirmada')}>Confirmar</Button>
              </div>
            )}
          </Col>
          <Col md={5}>
            <Image src={event.banner} fluid className="mb-3" />
            <div className="p-3 bg-light">
              <h4>Resumen del Precio</h4>
              <p><strong>Total:</strong> S/. {totalPrice.toFixed(2)}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default BuyTickets;
