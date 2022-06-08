const routes = [
  {
    route: "/reclamos",
    name: "Obtener todos los reclamos",
    id: 1,
  },
  {
    route: "/planes",
    name: "Obtener todos los planes",
    id: 2,
  },
  {
    route: "/areas",
    name: "Obtener todas las areas",
    id: 3,
  },
  {
    route: "/usuarios",
    name: "Obtener todos los usuarios",
    id: 4,
  },
  {
    route: "/desperfectos",
    name: "Obtener todos los desperfectos",
    id: 5,
  },
  {
    route: "/desperfectosPorZona",
    name: "Obtener todos los reclamos por zona",
    id: 6,
  },
  {
    route: "/atenciones",
    name: "Obtener todos las atenciones",
    id: 7,
  },
  {
    route: "/atencionPorZona",
    name: "Obtener todos las atenciones por zona",
    id: 8,
  },
  {
    route: "/mayorAtendidos",
    name: "El area con mayor cantidad de reclamos",
    id: 9,
  },
  {
    route: "/ticketsSinResolver",
    name: "Obtener reclamos sin resolver",
    id: 10,
  },
  {
    route: "/atencionPorTipo",
    name: "Obtener cantidad de baja, altas y cambios de plan",
    id: 11,
  },
  {
    route: "/coberturaLanus",
    name: "Usuario en el area de cobertura de servicio tecnico - lanus",
    id: 12,
  },
  {
    route: "/usuarioAvellaneda",
    name: "Usuario en la zona de avellaneda",
    id: 13,
  },
  {
    route: "/reclamosMarzo",
    name: "Reclamos en el mes de marzo",
    id: 14,
  },
  {
    route: "/reclamosSinResolver",
    name: "Reclamos sin resolver",
    id: 15,
  },
  {
    route: "/reclamosConversorExterno",
    name: "Reclamos por cambio de conversor o reparacion externa",
    id: 16,
  },
];

export default routes;
