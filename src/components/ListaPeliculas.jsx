import React from "react";
import { Card } from "react-bootstrap";
import PeliculaCard from "./PeliculaCard";

const ListaPeliculas = ({ peliculas, onBorrarPelicula }) => {
  return (
    <Card>
      <Card.Body>
        <h2>Lista de Películas</h2>
        {peliculas.length === 0 ? (
          <p className="text-center mt-3">No hay películas registradas</p>
        ) : (
          <>
            {peliculas.map((pelicula, index) => (
              <PeliculaCard
                key={index}
                pelicula={pelicula}
                onBorrar={() => onBorrarPelicula(index)}
              />
            ))}
          </>
        )}
      </Card.Body>
    </Card>
  );
};

export default ListaPeliculas;
