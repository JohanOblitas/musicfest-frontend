import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <div
          className="p-4 shadow rounded"
          style={{ maxWidth: "400px", width: "100%" }}
        >
          <h2 className="mb-4 text-center">Iniciar Sesión</h2>
          <Form>
            <Form.Group controlId="formBasicEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Ingresa tu email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mb-3">
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
            </Form.Group>

            <Button variant="dark" type="submit" className="w-100 mb-3">
              Ingresar
            </Button>
            <div>
              <Form.Text className="text-muted">
                <Link to="/forgot-password">¿Olvidaste tu contraseña?</Link>
              </Form.Text>
              <div></div>
              <Form.Text className="text-muted">
                <Link to="/register">¿Aún no tienes cuenta? Regístrate.</Link>
              </Form.Text>
            </div>
          </Form>
        </div>
      </Container>
    </>
  );
}

export default Login;
