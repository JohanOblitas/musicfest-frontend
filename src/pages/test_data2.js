import BannerTest01 from "../resources/images/Banner.jpg";
// Data de Prueba (Eliminar luego)

const test_data2 = [
  {
    id: 1,
    title: "Concierto de Rock",
    date: "2024-07-10",
    time: "20:00",
    duration: "2 horas",
    location: "Estadio Nacional",
    accessibility: "Accesible para personas con movilidad reducida",
    description: "Un concierto de rock inolvidable.",
    details: "Presentando a las mejores bandas de rock del momento.",
    banner: BannerTest01,
    video: "dQw4w9WgXcQ",
    tickets: [
      { type: "General", price: 50, discount: 0 },
      { type: "VIP", price: 100, discount: 10 },
    ],
    ticketSales: {
      start: "2024-07-01",
      end: "2024-07-09",
    },
    refundPolicy: "No se aceptan reembolsos.",
    agePolicy: "Evento para todas las edades.",
    entryPolicy: "Se requiere boleto impreso y DNI.",
    sponsors: "Empresa X",
    dressCode: "Casual",
    parking: "Estacionamiento gratuito en el lugar.",
  },
];

export default test_data2;
