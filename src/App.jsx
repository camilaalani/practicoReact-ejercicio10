import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import FormularioPelicula from "./components/FormularioPelicula";
import ListaPeliculas from "./components/ListaPeliculas";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    const peliculasGuardadas = JSON.parse(localStorage.getItem("peliculas")) || [];
    setPeliculas(peliculasGuardadas);
  }, []);

  const handleAgregarPelicula = (nuevaPelicula) => {
    setPeliculas((prevPeliculas) => [...prevPeliculas, nuevaPelicula]);
    const peliculasGuardadas = JSON.parse(localStorage.getItem("peliculas")) || [];
    localStorage.setItem("peliculas", JSON.stringify([...peliculasGuardadas, nuevaPelicula]));
  };

  const handleBorrarPelicula = (index) => {
    const peliculasActualizadas = [...peliculas];
    peliculasActualizadas.splice(index, 1);
    localStorage.setItem("peliculas", JSON.stringify(peliculasActualizadas));
    setPeliculas(peliculasActualizadas);
  };

  return (
    <Container className="my-4">
      <Row>
        <Col md={6}>
          <FormularioPelicula onAgregarPelicula={handleAgregarPelicula} />
        </Col>
        <Col md={6}>
          <ListaPeliculas peliculas={peliculas} onBorrarPelicula={handleBorrarPelicula} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
