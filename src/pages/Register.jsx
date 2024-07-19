import { RUTA_BACKEND } from "../conf";
import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Register() {
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [Nombres, setNombres] = useState("");
  const [Apellidos, setApellidos] = useState("");
  const [Email, setEmail] = useState("");
  const [Telefono, setTelefono] = useState("");
  const [Pais, setPais] = useState("");
  const [Sexo, setSexo] = useState(false);

  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const [Contraseña, setContraseña] = useState("");
  const [Tipo, setTipo] = useState("Usuario");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async () => {
    if (Nombres && Apellidos && Email && Telefono && Pais && day && month && year && Contraseña) {
      const dayNum = parseInt(day, 10);
      const monthNum = parseInt(month, 10);
      const yearNum = parseInt(year, 10);

      const fechaNacimiento = new Date(`${yearNum}-${monthNum}-${dayNum}`);

      const data = {
        Nombres: Nombres,
        Apellidos: Apellidos,
        Email: Email,
        Telefono: Telefono,
        Pais: Pais,
        Sexo: Sexo,
        Fecha_Nac: fechaNacimiento.toISOString(),
        Contraseña: Contraseña,
        Salt: "uwu",
        Tipo: Tipo
      }
      
      const resp = await fetch(`${RUTA_BACKEND}/Usuarios`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      })

      const dataResp = await resp.json()
      if (dataResp.error !== "") {
        console.error(dataResp.error)
        setError(true)
      } else {
        setError(false)
      }

    } else {
      console.error('Favor de llenar todos los campos de fecha.');
    }
  };

  return (
    <>

      {/* Contenido */}
      <Container className="my-5 d-flex justify-content-center align-items-center vh-100">
        <div
          className="p-4 shadow rounded"
          style={{ maxWidth: "600px", width: "100%" }}
        >
          <h2 className="mb-4 text-center">Registro</h2>
          <Form>
            <Form.Group controlId="formFirstName" className="mb-3">
              <Form.Label>Nombres</Form.Label>
              <Form.Control type="text" placeholder="Ingresa tus nombres" value={Nombres} onChange={(evt) => { setNombres(evt.target.value) }} />
            </Form.Group>

            <Form.Group controlId="formLastName" className="mb-3">
              <Form.Label>Apellidos</Form.Label>
              <Form.Control type="text" placeholder="Ingresa tus apellidos" value={Apellidos} onChange={(evt) => { setApellidos(evt.target.value) }} />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Ingresa tu email" value={Email} onChange={(evt) => { setEmail(evt.target.value) }} />
            </Form.Group>

            <Form.Group controlId="formPhone" className="mb-3">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu teléfono"
                maxLength="20"
                pattern="[0-9]*"
                value={Telefono} onChange={(evt) => { setTelefono(evt.target.value) }}
              />
            </Form.Group>

            <Form.Group controlId="formCountry" className="mb-3">
              <Form.Label>País</Form.Label>
              <Form.Control as="select" value={Pais} onChange={(evt) => { setPais(evt.target.value) }} >
                <option>Selecciona tu país</option>
                <option>Local</option>
                <option>Extranjero</option>
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
                  value={true} onChange={(evt) => { setSexo(evt.target.value) }}
                />
                <Form.Check
                  inline
                  type="radio"
                  label="Femenino"
                  name="gender"
                  id="genderFemale"
                  value={false} onChange={(evt) => { setSexo(evt.target.value) }}
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
                    value={day}
                    onChange={(evt) => { setDay(evt.target.value) }}
                  />
                </Col>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="mm"
                    maxLength="2"
                    pattern="[0-9]*"
                    value={month}
                    onChange={(evt) => { setMonth(evt.target.value) }}
                  />
                </Col>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="yyyy"
                    maxLength="4"
                    pattern="[0-9]*"
                    value={year}
                    onChange={(evt) => { setYear(evt.target.value) }}
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
                  value={Contraseña} onChange={(evt) => { setContraseña(evt.target.value) }}
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

            <Button variant="primary" type ="submit" className="w-100 mb-3" onClick={handleSubmit}>
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
