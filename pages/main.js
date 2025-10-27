const productos = [
  // --- LUBRICANTES ---
  {
    id: 1,
    nombre: "Aceite de Motor Sintético 7501 Classic 10W40",
    nombreOficial: "7501 Classic Sinthetic Motor Oil 10W40",
    descripcion: "Aceite de motor sintético para todo tipo de vehículos.",
    precio: 9500,
    cantidad: 50,
    categoria: "Lubricantes",
    image: "../assets/7501_classic_10w40.jpg"
  },
  {
    id: 2,
    nombre: "Aceite de Transmisión Extra 8103 SAE 75W90",
    nombreOficial: "8103 Extra Getriebeöl SAE 75W90",
    descripcion: "Aceite de transmisión para engranajes y cajas de cambios.",
    precio: 8700,
    cantidad: 40,
    categoria: "Lubricantes",
    image: "../assets/8103_extra_75w90.jpg"
  },
  {
    id: 3,
    nombre: "Aceite de Motor 7003 Elite SAE 5W40 de Mannol",
    nombreOficial: "7003 Elite SAE 5W40 de Mannol",
    descripcion: "Aceite de motor sintético de alto rendimiento.",
    precio: 9800,
    cantidad: 45,
    categoria: "Lubricantes",
    image: "../assets/7003_elite_5w40.jpg"
  },
  {
    id: 4,
    nombre: "Aceite de Motor Energy 5W30 de Mannol",
    nombreOficial: "Energy 5W30 de Mannol",
    descripcion: "Aceite de motor para protección y eficiencia de combustible.",
    precio: 9200,
    cantidad: 50,
    categoria: "Lubricantes",
    image: "../assets/energy_5w30.jpg"
  },
  {
    id: 5,
    nombre: "Aceite Wolf Official Tech 5W30 C3",
    nombreOficial: "Wolf Official Tech 5W30 C3",
    descripcion: "Aceite sintético para motores modernos con filtro de partículas.",
    precio: 10500,
    cantidad: 35,
    categoria: "Lubricantes",
    image: "../assets/wolf_official_5w30.jpg"
  },
  {
    id: 6,
    nombre: "Aceite 7709 O.E.M. para Toyota y Lexus SAE 5W30",
    nombreOficial: "7709 O.E.M. for Toyota Lexus SAE 5W30",
    descripcion: "Aceite de motor recomendado para vehículos Toyota y Lexus.",
    precio: 10700,
    cantidad: 30,
    categoria: "Lubricantes",
    image: "../assets/7709_toyota_5w30.jpg"
  },
  {
    id: 7,
    nombre: "Aceite Wolf GuardTech 10W40",
    nombreOficial: "Wolf GuardTech 10W40",
    descripcion: "Aceite sintético para motor que ofrece protección extrema.",
    precio: 9400,
    cantidad: 40,
    categoria: "Lubricantes",
    image: "../assets/wolf_guardtech_10w40.jpg"
  },
  {
    id: 8,
    nombre: "Aceite Wolf Ecotech 0W20",
    nombreOficial: "Wolf Ecotech 0W20",
    descripcion: "Aceite de baja viscosidad para motores modernos de alto rendimiento.",
    precio: 11500,
    cantidad: 25,
    categoria: "Lubricantes",
    image: "../assets/wolf_ecotech_0w20.jpg"
  },
  {
    id: 9,
    nombre: "Aceite Semisintético Gulf Tex C 10W40",
    nombreOficial: "Gulf Tex C Semi Synthetic Engine Oil 10W40",
    descripcion: "Aceite de motor semisintético que protege y mejora el rendimiento.",
    precio: 9600,
    cantidad: 50,
    categoria: "Lubricantes",
    image: "../assets/gulf_texc_10w40.jpg"
  },
  {
    id: 10,
    nombre: "Aceite Energy Ultra JP 5W20 de Mannol",
    nombreOficial: "Energy Ultra JP 5W20 de Mannol",
    descripcion: "Aceite de motor de alto rendimiento para vehículos modernos.",
    precio: 9700,
    cantidad: 40,
    categoria: "Lubricantes",
    image: "../assets/energy_ultra_jp_5w20.jpg"
  },
  {
    id: 11,
    nombre: "Aceite 2T Universal API TC Mannol",
    nombreOficial: "Mannol 2Takt Universal API TC",
    descripcion: "Aceite para motores 2 tiempos de motocicletas y motosierras.",
    precio: 6400,
    cantidad: 40,
    categoria: "Lubricantes",
    image: "../assets/mannol_2takt_universal.jpg"
  },
  {
    id: 12,
    nombre: "Aceite Moto 4T 20W50 Favorit",
    nombreOficial: "Favorit Moto 4 Takt 20W50",
    descripcion: "Aceite mineral para motores de motocicletas 4 tiempos.",
    precio: 7200,
    cantidad: 35,
    categoria: "Lubricantes",
    image: "../assets/favorit_4t_20w50.jpg"
  },
  {
    id: 13,
    nombre: "Aceite Moto 4T 20W50 Mannol",
    nombreOficial: "Mannol 7830 Motorbike 4Takt HD SAE 20W50",
    descripcion: "Aceite de alto rendimiento para motocicletas 4T.",
    precio: 7500,
    cantidad: 35,
    categoria: "Lubricantes",
    image: "../assets/mannol_7830_4t_20w50.jpg"
  },
  {
    id: 14,
    nombre: "Aceite 4T Power Bike 15W50",
    nombreOficial: "Mannol 7832 4Takt Power Bike 15W50",
    descripcion: "Aceite sintético para motocicletas deportivas y de alto rendimiento.",
    precio: 7800,
    cantidad: 25,
    categoria: "Lubricantes",
    image: "../assets/mannol_7832_powerbike.jpg"
  },
  {
    id: 15,
    nombre: "Aceite Central Hidráulico 8990",
    nombreOficial: "c",
    descripcion: "Aceite hidráulico universal para sistemas de dirección asistida y suspensión.",
    precio: 9700,
    cantidad: 20,
    categoria: "Lubricantes",
    image: "../assets/mannol_8990_hidraulic.jpg"
  },
  {
    id: 16,
    nombre: "Aceite Diesel 10W40 20L",
    nombreOficial: "Wolver Turbo Truck SAE 10W40 20L",
    descripcion: "Aceite semisintético para motores diésel pesados, formato 20L.",
    precio: 68000,
    cantidad: 10,
    categoria: "Lubricantes",
    image: "../assets/wolver_turbo_truck_20l.jpg"
  },
  {
    id: 17,
    nombre: "Aceite 4T Ypf Rod Mineral 20W50",
    nombreOficial: "Ypf Rod 4T 20W50 Aceite Lubricante para Motores 4 Tiempos",
    descripcion: "Aceite mineral diseñado para motores de motocicletas 4 tiempos.",
    precio: 7000,
    cantidad: 25,
    categoria: "Lubricantes",
    image: "../assets/ypfrod_4t_20w50.jpg"
  },
  {
    id: 18,
    nombre: "Aceite 4T Motul 300V Racing Road 15W30",
    nombreOficial: "Motul 300V Racing Road 15W30 Ester Core 4T Motor Oil",
    descripcion: "Aceite 100% sintético de competición para motocicletas deportivas.",
    precio: 17500,
    cantidad: 15,
    categoria: "Lubricantes",
    image: "../assets/motul_300v_15w30.jpg"
  },
  {
    id: 19,
    nombre: "Aceite 4T Motul 7100 10W50",
    nombreOficial: "Motul 7100 Sport and Adventure Road and Off Road 10W50",
    descripcion: "Aceite sintético premium para motos sport y adventure.",
    precio: 16500,
    cantidad: 15,
    categoria: "Lubricantes",
    image: "../assets/motul_7100_10w50.jpg"
  },
  {
    id: 20,
    nombre: "Aceite 4T Motul 5000 20W50",
    nombreOficial: "Motul 5000 Recreational and Utility Road and Off Road 20W50",
    descripcion: "Aceite semisintético para motos de uso urbano y off road.",
    precio: 14800,
    cantidad: 20,
    categoria: "Lubricantes",
    image: "../assets/motul_5000_20w50.jpg"
  },

  // --- REFRIGERANTES ---
  {
    id: 21,
    nombre: "Refrigerante Diluido 4L",
    nombreOficial: "Refrigerante Diluido 4L",
    descripcion: "Refrigerante listo para usar, protege el motor contra sobrecalentamiento.",
    precio: 4200,
    cantidad: 60,
    categoria: "Refrigerantes",
    image: "../assets/refrigerante_4l.jpg"
  },
  {
    id: 22,
    nombre: "Agua Destilada para Radiador 4L",
    nombreOficial: "Agua Destilada Agua Rad 4L",
    descripcion: "Agua destilada para radiadores y sistemas de enfriamiento.",
    precio: 1200,
    cantidad: 80,
    categoria: "Refrigerantes",
    image: "../assets/agua_rad_4l.jpg"
  },
  {
    id: 23,
    nombre: "Anticongelante AG11",
    nombreOficial: "Mannol 4111 AG11 Antifreeze Concentrated Longterm Coolant Fluid",
    descripcion: "Refrigerante concentrado de larga duración para sistemas de enfriamiento.",
    precio: 12500,
    cantidad: 25,
    categoria: "Refrigerantes",
    image: "../assets/mannol_4111_ag11.jpg"
  },
  {
    id: 24,
    nombre: "Anticongelante AG13+",
    nombreOficial: "Mannol 4114 AG13+ Antifreeze Concentrated Advanced Coolant Fluid",
    descripcion: "Refrigerante avanzado concentrado con tecnología G13+.",
    precio: 13200,
    cantidad: 25,
    categoria: "Refrigerantes",
    image: "../assets/mannol_4114_ag13plus.jpg"
  },
  {
    id: 25,
    nombre: "Refrigerante Concentrado Verde",
    nombreOficial: "Wurth Refrigerante Concentrado 1L Verde",
    descripcion: "Refrigerante concentrado verde de alto rendimiento.",
    precio: 8900,
    cantidad: 15,
    categoria: "Refrigerantes",
    image: "../assets/wurth_refrigerante_verde.jpg"
  },

  // --- ADITIVOS ---
  {
    id: 26,
    nombre: "Limpiador de Contactos de Mannol",
    nombreOficial: "Contact Cleaner de Mannol",
    descripcion: "Limpiador de contactos eléctricos y electrónicos.",
    precio: 3500,
    cantidad: 60,
    categoria: "Aditivos",
    image: "../assets/contact_cleaner_mannol.jpg"
  },
  {
    id: 27,
    nombre: "Limpiador de Inyectores de Mannol",
    nombreOficial: "Injection Cleaner de Mannol",
    descripcion: "Limpieza de inyectores para mejorar el rendimiento del motor.",
    precio: 4200,
    cantidad: 50,
    categoria: "Aditivos",
    image: "../assets/injection_cleaner_mannol.jpg"
  },
  {
    id: 28,
    nombre: "Motor Flush",
    nombreOficial: "Mannol 9900 Motor Flush",
    descripcion: "Limpia depósitos y residuos dentro del motor antes del cambio de aceite.",
    precio: 5600,
    cantidad: 20,
    categoria: "Aditivos",
    image: "../assets/mannol_9900_motorflush.jpg"
  },
  {
    id: 29,
    nombre: "Motor Doctor",
    nombreOficial: "Mannol 9990 Motor Doctor",
    descripcion: "Aditivo que reduce el consumo de aceite y el humo del escape.",
    precio: 6000,
    cantidad: 25,
    categoria: "Aditivos",
    image: "../assets/mannol_9990_motordoctor.jpg"
  },
  {
    id: 30,
    nombre: "Ceramo Ester Antifricción",
    nombreOficial: "Mannol Ceramo Ester Additivo Antifricción",
    descripcion: "Aditivo antifricción con cerámica para máxima protección del motor.",
    precio: 7800,
    cantidad: 15,
    categoria: "Aditivos",
    image: "../assets/mannol_ceramo_ester.jpg"
  },
  {
    id: 31,
    nombre: "Ester Additive 9929",
    nombreOficial: "Mannol Ester Additive 9929",
    descripcion: "Aditivo con tecnología ester para mejorar el rendimiento del motor.",
    precio: 7500,
    cantidad: 15,
    categoria: "Aditivos",
    image: "../assets/mannol_9929_ester.jpg"
  },
  {
    id: 32,
    nombre: "Octane Plus",
    nombreOficial: "Mannol 9954 Super Benzin Octane Plus",
    descripcion: "Aumenta el octanaje y mejora la combustión en motores a gasolina.",
    precio: 5800,
    cantidad: 25,
    categoria: "Aditivos",
    image: "../assets/mannol_9954_octaneplus.jpg"
  },
  {
    id: 33,
    nombre: "ATF Multivehicle",
    nombreOficial: "Mannol 8218 ATF Multivehicle JW3309",
    descripcion: "Fluido sintético para transmisiones automáticas de múltiples vehículos.",
    precio: 8900,
    cantidad: 20,
    categoria: "Aditivos",
    image: "../assets/mannol_8218_atf.jpg"
  },
  {
    id: 34,
    nombre: "Arranque de Motor",
    nombreOficial: "Mannol 9669 Motor Starter",
    descripcion: "Spray de arranque rápido para motores de gasolina y diésel.",
    precio: 4800,
    cantidad: 25,
    categoria: "Aditivos",
    image: "../assets/mannol_7830_4t_20w50.jpg"
  },

  // --- LIMPIEZA Y DETALLE ---
  {
    id: 35,
    nombre: "Silicona en Aerosol Marino",
    nombreOficial: "Silisur Silicona en Aerosol Marino",
    descripcion: "Silicona en aerosol con fragancia marina, ideal para plásticos y tableros.",
    precio: 3200,
    cantidad: 30,
    categoria: "Limpieza y Detalle",
    image: "../assets/silisur_marino.jpg"
  },
  {
    id: 36,
    nombre: "Silicona en Aerosol Vainilla",
    nombreOficial: "Pride Silicona en Aerosol Vainilla",
    descripcion: "Acondicionador con aroma a vainilla para interiores de vehículos.",
    precio: 3100,
    cantidad: 30,
    categoria: "Limpieza y Detalle",
    image: "../assets/pride_vainilla.jpg"
  },
  {
    id: 37,
    nombre: "Limpia Tapizados Revigal",
    nombreOficial: "Revigal Limpia Tapizados",
    descripcion: "Espuma limpiadora para tapizados, telas y alfombras.",
    precio: 3600,
    cantidad: 30,
    categoria: "Limpieza y Detalle",
    image: "../assets/revigal_limpia_tapizados.jpg"
  },
  {
    id: 38,
    nombre: "Silicona Penetrit",
    nombreOficial: "Penetrit Silicona",
    descripcion: "Silicona multiuso para protección y brillo de superficies plásticas.",
    precio: 3400,
    cantidad: 30,
    categoria: "Limpieza y Detalle",
    image: "../assets/penetrit_silicona.jpg"
  },
  {
    id: 39,
    nombre: "Silicona Multiuso Cherry",
    nombreOficial: "Jarama Silicona Multiuso Cherry",
    descripcion: "Silicona aromática multiuso con fragancia cherry.",
    precio: 3500,
    cantidad: 25,
    categoria: "Limpieza y Detalle",
    image: "../assets/jarama_cherry.jpg"
  },
  {
    id: 40,
    nombre: "Silicona Multiuso Sunshine",
    nombreOficial: "Jarama Silicona Multiuso Sunshine",
    descripcion: "Silicona multiuso con aroma Sunshine, ideal para interiores.",
    precio: 3500,
    cantidad: 25,
    categoria: "Limpieza y Detalle",
    image: "../assets/jarama_sunshine.jpg"
  },

  // --- ACCESORIOS Y TALLER ---
  {
    id: 41,
    nombre: "Sellador de Poliuretano",
    nombreOficial: "Wurth Sellador de Poliuretano 280 ml",
    descripcion: "Sellador elástico de alta adherencia para carrocerías y metales.",
    precio: 8900,
    cantidad: 20,
    categoria: "Accesorios y Taller",
    image: "../assets/wurth_sellador.jpg"
  },
  {
    id: 42,
    nombre: "Descarbonizante Carbo Off",
    nombreOficial: "Wurth Carbo Off Descarbonizante Limpia Carburador y TBI",
    descripcion: "Descarbonizante potente para carburadores, TBI y cuerpos de mariposa.",
    precio: 9100,
    cantidad: 15,
    categoria: "Limpieza y Taller",
    image: "../assets/wurth_carbo_off.jpg"
  },
  {
    id: 43,
    nombre: "Desoxidante Roast Off Plus",
    nombreOficial: "Wurth Roast Off Plus",
    descripcion: "Desoxidante con partículas de molibdeno para eliminar óxido y corrosión.",
    precio: 9700,
    cantidad: 15,
    categoria: "Limpieza y Taller",
    image: "../assets/wurth_roast_off_plus.jpg"
  },

  // --- NEUMÁTICOS ---
  {
    id: 44,
    nombre: "Kit de Reparación de Neumáticos MC Care de Motul",
    nombreOficial: "Tyre Repair MC Care de Motul",
    descripcion: "Kit de reparación de neumáticos para motocicletas.",
    precio: 5800,
    cantidad: 35,
    categoria: "Neumáticos",
    image: "../assets/tyre_repair_mc_motul.jpg"
  },

  // --- FLUIDOS DE FRENOS ---
  {
    id: 45,
    nombre: "Líquido de Frenos DOT-4 de Mannol",
    nombreOficial: "DOT-4 Brake Fluid de Mannol",
    descripcion: "Líquido de frenos de alto rendimiento para vehículos modernos.",
    precio: 3600,
    cantidad: 55,
    categoria: "Fluidos de Frenos",
    image: "../assets/dot4_brake_fluid_mannol.jpg"
  },

  {
  id: 46,
  nombre: "Aceite de Motor Favorit 7510 15W50",
  nombreOficial: "Favorit 7510 15W50",
  descripcion: "Aceite mineral de alto rendimiento para motores a gasolina y diésel.",
  precio: 8700,
  cantidad: 40,
  categoria: "Lubricantes",
  image: "../assets/favorit_7510_15w50.jpg"
}
];

export default productos;
