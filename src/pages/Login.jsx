import { RUTA_BACKEND } from "../conf";
import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [Email, setEmail] = useState("");
  const [Contraseña, setContraseña] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (usuarioCorreo = null) => {
    if (Email && Contraseña) {
      const ruta =
        usuarioCorreo == null
          ? `${RUTA_BACKEND}/Usuarios`
          : `${RUTA_BACKEND}/Usuarios?email=${usuarioCorreo}`;
      const resp = await fetch(ruta);
      const data = await resp.json();
      const filter = data.filter((element) => {
        if (element.email === Email && element.contraseña === Contraseña) {
          return true;
        }
        return false;
      });
      if (filter.length > 0) {
        const userData = filter[0];
        console.log("Good job.")
        console.log(userData)
        localStorage.setItem("loggedInUser", JSON.stringify(userData));
        navigate("/")
        window.location.reload();
      } else {
        setError(true);
        console.log("Bad job.")
      }
    } else {
      console.error("Favor de llenar todos los campos de fecha.");
    }
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
              <Form.Control
                type="email"
                placeholder="Ingresa tu email"
                value={Email}
                onChange={(evt) => {
                  setEmail(evt.target.value);
                }}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              <div className="input-group">
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder="Contraseña"
                  value={Contraseña}
                  onChange={(evt) => {
                    setContraseña(evt.target.value);
                  }}
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

            <Button
              variant="dark"
              className="w-100 mb-3"
              onClick={handleSubmit}
            >
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
