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
    <>
      
    </>
  );
};

export default FormularioPelicula;
