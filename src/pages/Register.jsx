import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Register() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      

      {/* Contenido */}
      <Container className="my-5 d-flex justify-content-center align-items-center vh-100">
        <div
          className="p-4 shadow rounded"
          style={{ maxWidth: "600px", width: "100%"}}
        >
          <h2 className="mb-4 text-center">Registro</h2>
          <Form>
            <Form.Group controlId="formFirstName" className="mb-3">
              <Form.Label>Nombres</Form.Label>
              <Form.Control type="text" placeholder="Ingresa tus nombres" />
            </Form.Group>

            <Form.Group controlId="formLastName" className="mb-3">
              <Form.Label>Apellidos</Form.Label>
              <Form.Control type="text" placeholder="Ingresa tus apellidos" />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Ingresa tu email" />
            </Form.Group>

            <Form.Group controlId="formPhone" className="mb-3">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu teléfono"
                maxLength="20"
                pattern="[0-9]*"
              />
            </Form.Group>

            <Form.Group controlId="formCountry" className="mb-3">
              <Form.Label>País</Form.Label>
              <Form.Control as="select">
                <option>Selecciona tu país</option>
                <option>Perú</option>
                <option>Argentina</option>
                <option>Chile</option>
                <option>Brasil</option>
                {/* Añadir más países según sea necesario */}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formGender" className="mb-3">
              <Form.Label>Sexo</Form.Label>
              <div>
                <Form.Check
                  inline
                  type="radio"
                  label="Masculino"
                  name="gender"
                  id="genderMale"
                />
                <Form.Check
                  inline
                  type="radio"
                  label="Femenino"
                  name="gender"
                  id="genderFemale"
                />
              </div>
            </Form.Group>

            <Form.Group controlId="formBirthDate" className="mb-3">
              <Form.Label>Fecha de Nacimiento</Form.Label>
              <Row>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="dd"
                    maxLength="2"
                    pattern="[0-9]*"
                  />
                </Col>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="mm"
                    maxLength="2"
                    pattern="[0-9]*"
                  />
                </Col>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="yyyy"
                    maxLength="4"
                    pattern="[0-9]*"
                  />
                </Col>
              </Row>
            </Form.Group>

            <Form.Group controlId="formPassword" className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              <div className="input-group">
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder="Contraseña"
                />
                <Button
                  variant="outline-secondary"
                  id="button-addon2"
                  onClick={togglePasswordVisibility}
                >
                  <i
                    className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}
                  ></i>
                </Button>
              </div>
              <Form.Text className="text-muted">
                Debe contener:
                <ul>
                  <li>Al menos 8 caracteres</li>
                  <li>Una letra mayúscula</li>
                  <li>Un número</li>
                </ul>
              </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mb-3">
              Registrarse
            </Button>
            <div className="text-center">
              <Form.Text className="text-muted">
                <Link to="/login">Si ya tienes una cuenta, ingresa aquí</Link>
              </Form.Text>
            </div>
          </Form>
        </div>
      </Container>
      {/* Fin de Contenido */}

      
    </>
  );
}

export default Register;
