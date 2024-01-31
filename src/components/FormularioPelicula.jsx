import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";

const FormularioPelicula = ({ onAgregarPelicula }) => {
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [genero, setGenero] = useState("comedia");

    const handleEnviar = () => {
        if (nombre && descripcion && genero) {
          const nuevaPelicula = { nombre, descripcion, genero };
          onAgregarPelicula(nuevaPelicula);
          setNombre("");
          setDescripcion("");
          setGenero("comedia");
        } else {
          alert("Completa todos los campos antes de enviar la película.");
        }
      };

  return (
    <Card>
      <Card.Header>Llenar el formulario para agregar una película</Card.Header>
      <Card.Body>
        <Form>
          <Form.Group controlId="formNombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre de la película"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formDescripcion">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Descripción de la película"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formGenero">
            <Form.Label>Género</Form.Label>
            <Form.Control
              as="select"
              value={genero}
              onChange={(e) => setGenero(e.target.value)}
            >
              <option value="comedia">Comedia</option>
              <option value="drama">Drama</option>
              <option value="infantil">Infantil</option>
            </Form.Control>
          </Form.Group>

          <Button className="mt-3" variant="primary" onClick={handleEnviar}>
            Enviar
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default FormularioPelicula;
