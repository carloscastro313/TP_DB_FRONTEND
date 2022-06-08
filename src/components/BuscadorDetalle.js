import React, { useState } from "react";

const BuscadorDetalle = ({ fetchTickets }) => {
  const [detalle, setDetalle] = useState("");

  const handlerSubmit = (e) => {
    e.preventDefault();

    fetchTickets("/reclamos/" + detalle);

    setDetalle("");
  };

  return (
    <form className="buscador" onSubmit={handlerSubmit}>
      <input
        type="text"
        value={detalle}
        onChange={(e) => {
          setDetalle(e.target.value);
        }}
      />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default BuscadorDetalle;
