import React from "react";
import { Card, Button } from "react-bootstrap";

const PeliculaCard = ({ pelicula, onBorrar }) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>Película: {pelicula.nombre}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Género: {pelicula.genero}
        </Card.Subtitle>
        <Card.Text>
          <strong>Descripción:</strong> {pelicula.descripcion}
        </Card.Text>
        <Button variant="danger" onClick={onBorrar}>
          Borrar
        </Button>
      </Card.Body>
    </Card>
  );
};

export default PeliculaCard;
