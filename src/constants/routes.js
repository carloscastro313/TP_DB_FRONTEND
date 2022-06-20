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
  {
    route: "/cantidadDesperfectos",
    name: "Cantidad de desperfectos",
    id: 17,
  },
  {
    route: "/zonaMayorDesperfectos",
    name: "La zona con mayor cantidad de desperfectos",
    id: 18,
  },
  {
    route: "/consultasEmpleados",
    name: "Reclamos de clientes que tambien son empleados",
    id: 19,
  },
  {
    route: "/clienteMayorTickets",
    name: "Cliente con mayor cantidad de reclamos",
    id: 20,
  },
  {
    route: "/empleadoPlanes",
    name: "Empleados que son clientes, que tengan al menos 2 planes y realizaron un reclamos",
    id: 21,
  },
  {
    route: "/empleadoMayorResoluciones",
    name: "Empleados con mayor cantidad de reclamos resueltos",
    id: 22,
  },
  {
    route: "/horaMasOcupada",
    name: "La hora mas ocupada",
    id: 23,
  },
  {
    route: "/clienteMasCaro",
    name: "El cliente con el precio total mas alto",
    id: 24,
  },
];

export default routes;
