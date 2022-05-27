const routes = [
  {
    route: "/",
    name: "Obtener todos los tickets",
    id: 1,
  },
  {
    route: "/desperfectos",
    name: "Obtener todos los desperfectos",
    id: 2,
  },
  {
    route: "/desperfectosPorZona",
    name: "Obtener todos los tickets por zona",
    id: 3,
  },
  {
    route: "/atenciones",
    name: "Obtener todos las atenciones",
    id: 4,
  },
  {
    route: "/atencionPorZona",
    name: "Obtener todos las atenciones por zona",
    id: 5,
  },
  {
    route: "/mayorAtendidos",
    name: "El area con mayor cantidad de tickets",
    id: 6,
  },
  {
    route: "/ticketsSinResolver",
    name: "Obtener tickets sin resolver",
    id: 7,
  },
  {
    route: "/atencionPorTipo",
    name: "Obtener cantidad de baja, altas y cambios de plan",
    id: 8,
  },
];

export default routes;
