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

  return (
    <>
      
    </>
  );
};

export default App;
