import React from "react";
import axiosClient from "../config/axios";
import routes from "../constants/routes";
import BuscadorDetalle from "./BuscadorDetalle";

export const Botones = ({ setJson }) => {
  const fetchTickets = async (route) => {
    try {
      const { data } = await axiosClient.get(route);

      if (data.ok) {
        setJson(data.tickets);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="title">Opciones</h1>
      <div className="botones">
        {routes.map((r) => (
          <button onClick={() => fetchTickets(r.route)} key={r.id}>
            {r.name}
          </button>
        ))}
        <BuscadorDetalle fetchTickets={fetchTickets} />
      </div>
    </div>
  );
};
