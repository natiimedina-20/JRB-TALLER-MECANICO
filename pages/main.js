const productos = [
  // --- LUBRICANTES ---
  {
    id: 1,
    nombre: "Aceite de Motor Sintético 7501 Classic 10W40",
    nombreOficial: "7501 Classic Sinthetic Motor Oil 10W40",
    descripcion: "Aceite de motor sintético para todo tipo de vehículos.",
    precio: 11808.62,
    cantidad: 50,
    categoria: "Lubricantes",
    image: "../assets/7501_classic_10w40.jpg"
    
  },
  {
    id: 2,
    nombre: "Aceite de Transmisión Extra 8103 SAE 75W90",
    nombreOficial: "8103 Extra Getriebeöl SAE 75W90",
    descripcion: "Aceite de transmisión para engranajes y cajas de cambios.",
    precio: 23995.79,
    cantidad: 40,
    categoria: "Lubricantes",
    image: "../assets/8103_extra_75w90.jpg"
  },
  {
    id: 3,
    nombre: "Aceite de Motor 7903 Elite SAE 5W40 de Mannol",
    nombreOficial: "7903 Elite SAE 5W40 de Mannol",
    descripcion: "Aceite de motor sintético de alto rendimiento.",
    precio: 79848.90,
    cantidad: 45,
    categoria: "Lubricantes",
    image: "../assets/7003_elite_5w40.jpg"
  },
  {
    id: 4,
    nombre: "Aceite de Motor Energy 5W30 de Mannol",
    nombreOficial: "Energy 5W30 de Mannol",
    descripcion: "Aceite de motor para protección y eficiencia de combustible.",
    precio: 76984.20,
    cantidad: 50,
    categoria: "Lubricantes",
    image: "../assets/energy_5w30.jpg"
  },
  {
    id: 5,
    nombre: "Aceite Wolf Official Tech 5W30 C3",
    nombreOficial: "Wolf Official Tech 5W30 C3",
    descripcion: "Aceite sintético para motores modernos con filtro de partículas.",
    precio: 76984.20,
    cantidad: 35,
    categoria: "Lubricantes",
    image: "../assets/wolf_official_5w30.jpg"
  },
  {
    id: 6,
    nombre: "Aceite 7709 O.E.M. para Toyota y Lexus SAE 5W30",
    nombreOficial: "7709 O.E.M. for Toyota Lexus SAE 5W30",
    descripcion: "Aceite de motor recomendado para vehículos Toyota y Lexus.",
    precio: 52930.46,
    cantidad: 30,
    categoria: "Lubricantes",
    image: "../assets/7709_toyota_5w30.jpg"
  },
  {
    id: 7,
    nombre: "Aceite Wolf GuardTech 10W40",
    nombreOficial: "Wolf GuardTech 10W40",
    descripcion: "Aceite sintético para motor que ofrece protección extrema.",
    precio: 49587,
    cantidad: 40,
    categoria: "Lubricantes",
    image: "../assets/wolf_guardtech_10w40.jpg"
  },
  {
    id: 8,
    nombre: "Aceite Wolf Ecotech 0W20",
    nombreOficial: "Wolf Ecotech 0W20",
    descripcion: "Aceite de baja viscosidad para motores modernos de alto rendimiento.",
    precio: 0,
    cantidad: 25,
    categoria: "Lubricantes",
    image: "../assets/wolf_ecotech_0w20.jpg"
  },
  {
    id: 9,
    nombre: "Aceite Semisintético Gulf Tex C 10W40",
    nombreOficial: "Gulf Tex C Semi Synthetic Engine Oil 10W40",
    descripcion: "Aceite de motor semisintético que protege y mejora el rendimiento.",
    precio: 0,
    cantidad: 50,
    categoria: "Lubricantes",
    image: "../assets/gulf_texc_10w40.jpg"
  },
  {
    id: 10,
    nombre: "Aceite Energy Ultra JP 5W20 de Mannol",
    nombreOficial: "Energy Ultra JP 5W20 de Mannol",
    descripcion: "Aceite de motor de alto rendimiento para vehículos modernos.",
    precio: 62810.96,
    cantidad: 40,
    categoria: "Lubricantes",
    image: "../assets/energy_ultra_jp_5w20.jpg"
  },
  {
    id: 11,
    nombre: "Aceite 2T Universal API TC Mannol",
    nombreOficial: "Mannol 2Takt Universal API TC",
    descripcion: "Aceite para motores 2 tiempos de motocicletas y motosierras.",
    precio: 11572.90,
    cantidad: 40,
    categoria: "Lubricantes",
    image: "../assets/mannol_2takt_universal.jpg"
  },
  {
    id: 12,
    nombre: "Aceite Moto 4T 20W50 Favorit",
    nombreOficial: "Favorit Moto 4 Takt 20W50",
    descripcion: "Aceite mineral para motores de motocicletas 4 tiempos.",
    precio: 0,
    cantidad: 35,
    categoria: "Lubricantes",
    image: "../assets/favorit_4t_20w50.jpg"
  },
  {
    id: 13,
    nombre: "Aceite Moto 4T 20W50 Mannol",
    nombreOficial: "Mannol 7830 Motorbike 4Takt HD SAE 20W50",
    descripcion: "Aceite de alto rendimiento para motocicletas 4T.",
    precio: 11607.15,
    cantidad: 35,
    categoria: "Lubricantes",
    image: "../assets/mannol_7830_4t_20w50.jpg"
  },
  {
    id: 14,
    nombre: "Aceite 4T Power Bike 15W50",
    nombreOficial: "Mannol 7832 4Takt Power Bike 15W50",
    descripcion: "Aceite sintético para motocicletas deportivas y de alto rendimiento.",
    precio: 12705,
    cantidad: 25,
    categoria: "Lubricantes",
    image: "../assets/mannol_7832_powerbike.jpg"
  },
  {
    id: 15,
    nombre: "Aceite Central Hidráulico 8990",
    nombreOficial: "c",
    descripcion: "Aceite hidráulico universal para sistemas de dirección asistida y suspensión.",
    precio: 26532,
    cantidad: 20,
    categoria: "Lubricantes",
    image: "../assets/mannol_8990_hidraulic.jpg"
  },
  {
    id: 16,
    nombre: "Aceite Diesel 10W40 20L",
    nombreOficial: "Wolver Turbo Truck SAE 10W40 20L",
    descripcion: "Aceite semisintético para motores diésel pesados, formato 20L.",
    precio: 0,
    cantidad: 10,
    categoria: "Lubricantes",
    image: "../assets/wolver_turbo_truck_20l.jpg"
  },
  {
    id: 17,
    nombre: "Aceite 4T Ypf Rod Mineral 20W50",
    nombreOficial: "Ypf Rod 4T 20W50 Aceite Lubricante para Motores 4 Tiempos",
    descripcion: "Aceite mineral diseñado para motores de motocicletas 4 tiempos.",
    precio: 0,
    cantidad: 25,
    categoria: "Lubricantes",
    image: "../assets/ypfrod_4t_20w50.jpg"
  },
  {
    id: 18,
    nombre: "Aceite 4T Motul 300V Racing Road 15W30",
    nombreOficial: "Motul 300V Racing Road 15W30 Ester Core 4T Motor Oil",
    descripcion: "Aceite 100% sintético de competición para motocicletas deportivas.",
    precio: 0,
    cantidad: 15,
    categoria: "Lubricantes",
    image: "../assets/motul_300v_15w30.jpg"
  },
  {
    id: 19,
    nombre: "Aceite 4T Motul 7100 10W50",
    nombreOficial: "Motul 7100 Sport and Adventure Road and Off Road 10W50",
    descripcion: "Aceite sintético premium para motos sport y adventure.",
    precio: 0,
    cantidad: 15,
    categoria: "Lubricantes",
    image: "../assets/motul_7100_10w50.jpg"
  },
  {
    id: 20,
    nombre: "Aceite 4T Motul 5000 20W50",
    nombreOficial: "Motul 5000 Recreational and Utility Road and Off Road 20W50",
    descripcion: "Aceite semisintético para motos de uso urbano y off road.",
    precio: 0,
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
    precio: 0,
    cantidad: 60,
    categoria: "Refrigerantes",
    image: "../assets/refrigerante_4l.jpg"
  },
  {
    id: 22,
    nombre: "Agua Destilada para Radiador 4L",
    nombreOficial: "Agua Destilada Agua Rad 4L",
    descripcion: "Agua destilada para radiadores y sistemas de enfriamiento.",
    precio: 0,
    cantidad: 80,
    categoria: "Refrigerantes",
    image: "../assets/agua_rad_4l.jpg"
  },
  {
    id: 23,
    nombre: "Anticongelante AG11",
    nombreOficial: "Mannol 4111 AG11 Antifreeze Concentrated Longterm Coolant Fluid",
    descripcion: "Refrigerante concentrado de larga duración para sistemas de enfriamiento.",
    precio: 0,
    cantidad: 25,
    categoria: "Refrigerantes",
    image: "../assets/mannol_4111_ag11.jpg"
  },
  {
    id: 24,
    nombre: "Anticongelante AG13+",
    nombreOficial: "Mannol 4114 AG13+ Antifreeze Concentrated Advanced Coolant Fluid",
    descripcion: "Refrigerante avanzado concentrado con tecnología G13+.",
    precio: 0,
    cantidad: 25,
    categoria: "Refrigerantes",
    image: "../assets/mannol_4114_ag13plus.jpg"
  },
  {
    id: 25,
    nombre: "Refrigerante Concentrado Verde",
    nombreOficial: "Wurth Refrigerante Concentrado 1L Verde",
    descripcion: "Refrigerante concentrado verde de alto rendimiento.",
    precio: 0,
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
    precio: 8962.80,
    cantidad: 60,
    categoria: "Aditivos",
    image: "../assets/contact_cleaner_mannol.jpg"
  },
  {
    id: 27,
    nombre: "Limpiador de Inyectores de Mannol",
    nombreOficial: "Injection Cleaner de Mannol",
    descripcion: "Limpieza de inyectores para mejorar el rendimiento del motor.",
    precio: 0,
    cantidad: 50,
    categoria: "Aditivos",
    image: "../assets/injection_cleaner_mannol.jpg"
  },
  {
    id: 28,
    nombre: "Motor Flush",
    nombreOficial: "Mannol 9900 Motor Flush",
    descripcion: "Limpia depósitos y residuos dentro del motor antes del cambio de aceite.",
    precio: 5375.75,
    cantidad: 20,
    categoria: "Aditivos",
    image: "../assets/mannol_9900_motorflush.jpg"
  },
  {
    id: 29,
    nombre: "Motor Doctor",
    nombreOficial: "Mannol 9990 Motor Doctor",
    descripcion: "Aditivo que reduce el consumo de aceite y el humo del escape.",
    precio: 13635.30,
    cantidad: 25,
    categoria: "Aditivos",
    image: "../assets/mannol_9990_motordoctor.jpg"
  },
  {
    id: 30,
    nombre: "Ceramo Ester Antifricción",
    nombreOficial: "Mannol Ceramo Ester Additivo Antifricción",
    descripcion: "Aditivo antifricción con cerámica para máxima protección del motor.",
    precio: 14944.10,
    cantidad: 15,
    categoria: "Aditivos",
    image: "../assets/mannol_ceramo_ester.jpg"
  },
  {
    id: 31,
    nombre: "Ester Additive 9929",
    nombreOficial: "Mannol Ester Additive 9929",
    descripcion: "Aditivo con tecnología ester para mejorar el rendimiento del motor.",
    precio: 15553.90,
    cantidad: 15,
    categoria: "Aditivos",
    image: "../assets/mannol_9929_ester.jpg"
  },
  {
    id: 32,
    nombre: "Octane Plus",
    nombreOficial: "Mannol 9954 Super Benzin Octane Plus",
    descripcion: "Aumenta el octanaje y mejora la combustión en motores a gasolina.",
    precio: 13977,
    cantidad: 25,
    categoria: "Aditivos",
    image: "../assets/mannol_9954_octaneplus.jpg"
  },
  {
    id: 33,
    nombre: "ATF Multivehicle",
    nombreOficial: "Mannol 8218 ATF Multivehicle JW3309",
    descripcion: "Fluido sintético para transmisiones automáticas de múltiples vehículos.",
    precio: 16439.40,
    cantidad: 20,
    categoria: "Aditivos",
    image: "../assets/mannol_8218_atf.jpg"
  },
  {
    id: 34,
    nombre: "Arranque de Motor",
    nombreOficial: "Mannol 9669 Motor Starter",
    descripcion: "Spray de arranque rápido para motores de gasolina y diésel.",
    precio: 14430.10,
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
    precio: 0,
    cantidad: 30,
    categoria: "Limpieza y Detalle",
    image: "../assets/silisur_marino.jpg"
  },
  {
    id: 36,
    nombre: "Silicona en Aerosol Vainilla",
    nombreOficial: "Pride Silicona en Aerosol Vainilla",
    descripcion: "Acondicionador con aroma a vainilla para interiores de vehículos.",
    precio: 0,
    cantidad: 30,
    categoria: "Limpieza y Detalle",
    image: "../assets/pride_vainilla.jpg"
  },
  {
    id: 37,
    nombre: "Limpia Tapizados Revigal",
    nombreOficial: "Revigal Limpia Tapizados",
    descripcion: "Espuma limpiadora para tapizados, telas y alfombras.",
    precio: 0,
    cantidad: 30,
    categoria: "Limpieza y Detalle",
    image: "../assets/revigal_limpia_tapizados.jpg"
  },
  {
    id: 38,
    nombre: "Silicona Penetrit",
    nombreOficial: "Penetrit Silicona",
    descripcion: "Silicona multiuso para protección y brillo de superficies plásticas.",
    precio: 0,
    cantidad: 30,
    categoria: "Limpieza y Detalle",
    image: "../assets/penetrit_silicona.jpg"
  },
  {
    id: 39,
    nombre: "Silicona Multiuso Cherry",
    nombreOficial: "Jarama Silicona Multiuso Cherry",
    descripcion: "Silicona aromática multiuso con fragancia cherry.",
    precio: 6000,
    cantidad: 25,
    categoria: "Limpieza y Detalle",
    image: "../assets/jarama_cherry.jpg"
  },
  {
    id: 40,
    nombre: "Silicona Multiuso Sunshine",
    nombreOficial: "Jarama Silicona Multiuso Sunshine",
    descripcion: "Silicona multiuso con aroma Sunshine, ideal para interiores.",
    precio: 6000,
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
    precio: 0,
    cantidad: 20,
    categoria: "Accesorios y Taller",
    image: "../assets/wurth_sellador.jpg"
  },
  {
    id: 42,
    nombre: "Descarbonizante Carbo Off",
    nombreOficial: "Wurth Carbo Off Descarbonizante Limpia Carburador y TBI",
    descripcion: "Descarbonizante potente para carburadores, TBI y cuerpos de mariposa.",
    precio: 0,
    cantidad: 15,
    categoria: "Limpieza y Taller",
    image: "../assets/wurth_carbo_off.jpg"
  },
  {
    id: 43,
    nombre: "Desoxidante Roast Off Plus",
    nombreOficial: "Wurth Roast Off Plus",
    descripcion: "Desoxidante con partículas de molibdeno para eliminar óxido y corrosión.",
    precio: 0,
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
    precio: 0,
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
    precio: 6928.09,
    cantidad: 55,
    categoria: "Fluidos de Frenos",
    image: "../assets/dot4_brake_fluid_mannol.jpg"
  },

  {
    id: 46,
    nombre: "Aceite de Motor Favorit 7510 15W50",
    nombreOficial: "Favorit 7510 15W50",
    descripcion: "Aceite mineral de alto rendimiento para motores a gasolina y diésel.",
    precio: 51432,
    cantidad: 40,
    categoria: "Lubricantes",
    image: "../assets/favorit_7510_15w50.jpg"
  },


  {
    id: 47,
    nombre: "KIT WEGA CHEVROLET CORSA, CLASSIC, AGILE (4 F)",
    nombreOficial: "KIT WEGA 274",
    descripcion: "Kit de filtros WEGA para Chevrolet Corsa, Classic, Agile, incluye todos los filtros indicados.",
    precio: 26863.55,
    cantidad: 10,
    categoria: "Filtros",
    image: "../assets/kitwegaAGILE4f.jpg"
  },
  {
    id: 48,
    nombre: "KIT WEGA CHEVROLET CRUZE 1.4 (3 F)",
    nombreOficial: "KIT WEGA 395",
    descripcion: "Kit de filtros WEGA para Chevrolet Cruze 1.4, incluye todos los filtros indicados.",
    precio: 41795.35,
    cantidad: 10,
    categoria: "Filtros",
    image: "../assets/wega_395.jpg"
  },
  {
    id: 49,
    nombre: "KIT WEGA CHEVROLET CRUZE 1.8 (3 F)",
    nombreOficial: "KIT WEGA V251",
    descripcion: "Kit de filtros WEGA para Chevrolet Cruze 1.8, incluye todos los filtros indicados.",
    precio: 34174.13,
    cantidad: 10,
    categoria: "Filtros",
    image: "../assets/wega_V251.jpg"
  },
  {
    id: 50,
    nombre: "KIT WEGA CHEVROLET PRISMA, ONIX 1.4 (3 F)",
    nombreOficial: "KIT WEGA V252",
    descripcion: "Kit de filtros WEGA para Chevrolet Prisma, Onix 1.4, incluye todos los filtros indicados.",
    precio: 33909.66,
    cantidad: 10,
    categoria: "Filtros",
    image: "../assets/wega_V252.jpg"
  },
  {
    id: 51,
    nombre: "KIT WEGA CHEVROLET S10 (L-VIEJA 2006> ELECT) (3 F)",
    nombreOficial: "KIT WEGA 35388",
    descripcion: "Kit de filtros WEGA para Chevrolet S10 (L-Vieja 2006>), incluye todos los filtros indicados.",
    precio: 92038.50,
    cantidad: 10,
    categoria: "Filtros",
    image: "../assets/wega_35388.jpg"
  },

  {
    id: 52,
    nombre: "KIT WEGA CHEVROLET S10 L. NUEVA (4 F)",
    nombreOficial: "KIT WEGA V218",
    descripcion: "Kit de filtros WEGA para Chevrolet S10 L. Nueva, incluye todos los filtros indicados.",
    precio: 70891.18,
    cantidad: 10,
    categoria: "Filtros",
    image: "../assets/kitwega_chevs10.jpg"
  },
  {
    id: 53,
    nombre: "KIT WEGA CHEVROLET TRACKER 1.2T, ONIX 1.2 (3 F)",
    nombreOficial: "KIT WEGA V2",
    descripcion: "Kit de filtros WEGA para Chevrolet Tracker 1.2T, Onix 1.2, incluye todos los filtros indicados.",
    precio: 31214.30,
    cantidad: 10,
    categoria: "Filtros",
    image: "../assets/kitwega_tracker12.jpg"
  },
  {
    id: 54,
    nombre: "KIT WEGA CHEVROLET TRACKER 1.8 (3 F)",
    nombreOficial: "KIT WEGA V253",
    descripcion: "Kit de filtros WEGA para Chevrolet Tracker 1.8, incluye todos los filtros indicados.",
    precio: 29068.99,
    cantidad: 10,
    categoria: "Filtros",
    image: "../assets/kitwega_tracker18.jpg"
  },
  {
    id: 55,
    nombre: "KIT WEGA FIAT ARGO / CRONOS 1.8 (4 F)",
    nombreOficial: "KIT WEGA 77412",
    descripcion: "Kit de filtros WEGA para Fiat Argo / Cronos 1.8, incluye todos los filtros indicados.",
    precio: 42544.40,
    cantidad: 10,
    categoria: "Filtros",
    image: "../assets/kitwega_argo_cronos.jpg"
  },
  {
    id: 56,
    nombre: "KIT WEGA FIAT CRONOS 1.3, ARGO 1.3 (4 F)",
    nombreOficial: "KIT WEGA V254",
    descripcion: "Kit de filtros WEGA para Fiat Cronos 1.3, Argo 1.3, incluye todos los filtros indicados.",
    precio: 41380.38,
    cantidad: 10,
    categoria: "Filtros",
    image: "../assets/kitwega_cronos_argo.jpg"
  },
  {
    id: 57,
    nombre: "KIT WEGA FIAT MOBI FIREFLY 1.0 77CV (4 F)",
    nombreOficial: "KIT WEGA V284",
    descripcion: "Kit de filtros WEGA para Fiat Mobi Firefly 1.0 77CV, incluye todos los filtros indicados.",
    precio: 37034.66,
    cantidad: 10,
    categoria: "Filtros",
    image: "../assets/kitwega_mobi.jpg"
  },

  {
    id: 58,
    nombre: "KIT WEGA FIAT PALIO 1.3, SIENA 1.4 FIRE (4 F)",
    nombreOficial: "KIT WEGA V255",
    descripcion: "Kit de filtros WEGA para Fiat Palio 1.3, Siena 1.4 Fire, incluye todos los filtros indicados.",
    precio: 30912.06,
    cantidad: 10,
    categoria: "Filtros",
    image: "../assets/kitwega_palio_siena.jpg"
  },
  {
    id: 59,
    nombre: "KIT WEGA FIAT PALIO III, SIENA, STRADA 1.6 E-TORQ (4 F)",
    nombreOficial: "KIT WEGA V276",
    descripcion: "Kit de filtros WEGA para Fiat Palio III, Siena, Strada 1.6 E-Torq, incluye todos los filtros indicados.",
    precio: 39967.60,
    cantidad: 10,
    categoria: "Filtros",
    image: "../assets/kitwega_palio3_siena_strada.jpg"
  },
  {
    id: 60,
    nombre: "KIT WEGA FIAT TORO DIESEL 2.0, RENEGADE DIESEL (4 F)",
    nombreOficial: "KIT WEGA V256",
    descripcion: "Kit de filtros WEGA para Fiat Toro Diesel 2.0, Renegade Diesel, incluye todos los filtros indicados.",
    precio: 75693.57,
    cantidad: 10,
    categoria: "Filtros",
    image: "../assets/kitwega_toro_renegade.jpg"
  },
  {
    id: 61,
    nombre: "KIT WEGA FIAT TORO, JEEP RENEGADE 1.8 (4 F)",
    nombreOficial: "KIT WEGA V244",
    descripcion: "Kit de filtros WEGA para Fiat Toro, Jeep Renegade 1.8, incluye todos los filtros indicados.",
    precio: 44753.24,
    cantidad: 10,
    categoria: "Filtros",
    image: "../assets/kitwega_toro_renegade18.jpg"
  },
  {
    id: 62,
    nombre: "KIT WEGA FIAT UNO WAY, MOBI, PALIO II 1.4 (3 F)",
    nombreOficial: "KIT WEGA V277",
    descripcion: "Kit de filtros WEGA para Fiat Uno Way, Mobi, Palio II 1.4, incluye todos los filtros indicados.",
    precio: 35234.20,
    cantidad: 10,
    categoria: "Filtros",
    image: "../assets/kitwega_uno_mobi_palio.jpg"
  },
  {
    id: 63,
    nombre: "KIT WEGA FORD ECOSPORT, FIESTA 1.6 ZETEC ROCAM (4 F)",
    nombreOficial: "KIT WEGA V278",
    descripcion: "Kit de filtros WEGA para Ford Ecosport, Fiesta 1.6 Zetec Rocam, incluye todos los filtros indicados.",
    precio: 36580.73,
    cantidad: 10,
    categoria: "Filtros",
    image: "../assets/kitwega_ford_ecosport.jpg"
  },
  {
    id: 64,
    nombre: "KIT WEGA FORD FIESTA KINETIC, KA, ECOSPORT 1.6 (4 F)",
    nombreOficial: "KIT WEGA V241",
    descripcion: "Kit de filtros WEGA para Ford Fiesta Kinetic, KA, Ecosport 1.6, incluye todos los filtros indicados.",
    precio: 39666.51,
    cantidad: 10,
    categoria: "Filtros",
    image: "../assets/kitwega_ford_fiesta.jpg"
  },
  {
    id: 65,
    nombre: "KIT WEGA FORD FOCUS II & III KINETIC 1.6-2.0 (4 F)",
    nombreOficial: "KIT WEGA V243",
    descripcion: "Kit de filtros WEGA para Ford Focus II & III Kinetic 1.6-2.0, incluye todos los filtros indicados.",
    precio: 50448.23,
    cantidad: 10,
    categoria: "Filtros",
    image: "../assets/kitwega_ford_focus.jpg"
  },
  {
    id: 66,
    nombre: "KIT WEGA FORD KA FREESTYLE, ECOSPORT 1.5 KINETIC",
    nombreOficial: "KIT WEGA V242",
    descripcion: "Kit de filtros WEGA para Ford KA Freestyle, Ecosport 1.5 Kinetic, incluye todos los filtros indicados.",
    precio: 29541.40,
    cantidad: 10,
    categoria: "Filtros",
    image: "../assets/kitwega_ford_ka.jpg"
  },
  {
    id: 67,
    nombre: "KIT WEGA FORD RANGER 2.2-3.2 CC (4 F)",
    nombreOficial: "KIT WEGA V3031",
    descripcion: "Kit de filtros WEGA para Ford Ranger 2.2-3.2 CC, incluye todos los filtros indicados.",
    precio: 45600.62,
    cantidad: 10,
    categoria: "Filtros",
    image: "../assets/kitwega_ford_ranger22.jpg"
  },
  {
    id: 68,
    nombre: "KIT WEGA FORD RANGER 3.0 (3 F) (F. A. CARTUCHO)",
    nombreOficial: "KIT WEGA V308",
    descripcion: "Kit de filtros WEGA para Ford Ranger 3.0 (3 F), incluye todos los filtros indicados.",
    precio: 52493.48,
    cantidad: 10,
    categoria: "Filtros",
    image: "../assets/kitwega_ford_ranger30.jpg"
  },
  {
    id: 69,
    nombre: "KIT WEGA FORD RANGER 3.2 DURATORQ 2021 (4F)",
    nombreOficial: "KIT WEGA V323",
    descripcion: "Kit de filtros WEGA para Ford Ranger 3.2 Duratorq 2021, incluye todos los filtros indicados.",
    precio: 84706.60,
    cantidad: 10,
    categoria: "Filtros",
    image: "../assets/kitwega_ford_ranger32.jpg"
  },
  {
    id: 70,
    nombre: "KIT WEGA HONDA FIT 1.5 NEW 2008 (3 F)",
    nombreOficial: "KIT WEGA V279",
    descripcion: "Kit de filtros WEGA para Honda Fit 1.5 New 2008, incluye todos los filtros indicados.",
    precio: 25730.49,
    cantidad: 10,
    categoria: "Filtros",
    image: "../assets/kitwega_honda_fit.jpg"
  },

  {
    id: 71,
    nombre: "KIT WEGA HONDA HRV (3 F)",
    nombreOficial: "KIT WEGA V294",
    descripcion: "Kit de filtros WEGA para Honda HRV, incluye todos los filtros indicados.",
    precio: 27806.99,
    cantidad: 10,
    categoria: "Filtros",
    image: "../assets/kitwega_honda_hrv.jpg"
  },
  {
    id: 72,
    nombre: "KIT WEGA HONDA TORNADO 250 (F. ACEITE,AIRE,BUJIA, LAMP.)",
    nombreOficial: "KIT WEGA V285",
    descripcion: "Kit de filtros WEGA para Honda Tornado 250, incluye todos los filtros indicados.",
    precio: 10947.69,
    cantidad: 10,
    categoria: "Filtros",
    image: "../assets/kitwega_honda_tornado250.jpg"
  },
  {
    id: 73,
    nombre: "KIT WEGA IVECO DAILY 55C16 (5F)",
    nombreOficial: "KIT WEGA V324",
    descripcion: "Kit de filtros WEGA para Iveco Daily 55C16, incluye todos los filtros indicados.",
    precio: 84706.60,
    cantidad: 10,
    categoria: "Filtros",
    image: "../assets/kitwega_iveco_daily55.jpg"
  },
  {
    id: 74,
    nombre: "KIT WEGA IVECO TECTOR (4F)",
    nombreOficial: "KIT WEGA 400",
    descripcion: "Kit de filtros WEGA para Iveco Tector, incluye todos los filtros indicados.",
    precio: 65437.55,
    cantidad: 10,
    categoria: "Filtros",
    image: "../assets/kitwega_iveco_tector.jpg"
  },
  {
    id: 75,
    nombre: "KIT WEGA M. BENZ SPRINTER 411/415/515 CDI 2012 (4 F)",
    nombreOficial: "KIT WEGA V264",
    descripcion: "Kit de filtros WEGA para M. Benz Sprinter 411/415/515 CDI 2012, incluye todos los filtros indicados.",
    precio: 116797.67,
    cantidad: 10,
    categoria: "Filtros",
    image: "../assets/kitwega_mercedes_sprinter.jpg"
  },


  {
    id: 76,
    nombre: "KIT WEGA M. BENZ VITO (4F)",
    nombreOficial: "KIT WEGA V306",
    descripcion: "Kit de filtros WEGA para M. Benz Vito, incluye todos los filtros indicados.",
    precio: 76459.47,
    cantidad: 10,
    categoria: "Filtros",
    image: "../assets/kitwega_mercedes_vito.jpg"
  },

  {
    id: 77,
    nombre: "KIT WEGA NISSAN FRONTIER NP300 2.3 DCI 190 CV 2015",
    nombreOficial: "KIT WEGA V280",
    descripcion: "Kit de filtros WEGA para Nissan Frontier NP300 2.3 DCI 190 CV 2015, incluye todos los filtros indicados.",
    precio: 59832.63,
    cantidad: 10,
    categoria: "Filtros",
    image: "../assets/kitwega_nissan_frontier.jpg"
  },
  {
    id: 78,
    nombre: "KIT WEGA NISSAN KICKS 1.6 VERSA 1.6 (3F)",
    nombreOficial: "KIT WEGA V301",
    descripcion: "Kit de filtros WEGA para Nissan Kicks 1.6, Versa 1.6, incluye todos los filtros indicados.",
    precio: 28590.34,
    cantidad: 10,
    categoria: "Filtros",
    image: "../assets/kitwega_nissan_kicks.jpg"
  },
  {
    id: 79,
    nombre: "KIT WEGA NISSAN MARCH 1.6 (3 F)",
    nombreOficial: "KIT WEGA V302",
    descripcion: "Kit de filtros WEGA para Nissan March 1.6, incluye todos los filtros indicados.",
    precio: 22646.11,
    cantidad: 10,
    categoria: "Filtros",
    image: "../assets/kitwega_nissan_march.jpg"
  },
  {
    id: 80,
    nombre: "KIT WEGA PEUGEOT 307, CITROEN C4 1.6 16V 110CV",
    nombreOficial: "KIT WEGA V274",
    descripcion: "Kit de filtros WEGA para Peugeot 307, Citroen C4 1.6 16V 110CV, incluye todos los filtros indicados.",
    precio: 26855.26,
    cantidad: 10,
    categoria: "Filtros",
    image: "../assets/kitwega_peugeot307_c4.jpg"
  },
  {
    id: 81,
    nombre: "KIT WEGA PEUGEOT 207 1.4 (4 F)",
    nombreOficial: "KIT WEGA V248",
    descripcion: "Kit de filtros WEGA para Peugeot 207 1.4, incluye todos los filtros indicados.",
    precio: 31176.86,
    cantidad: 10,
    categoria: "Filtros",
    image: "../assets/kitwega_peugeot207_14.jpg"
  },
  {
    id: 82,
    nombre: "KIT WEGA PEUGEOT 207 1.6 (4 F)",
    nombreOficial: "KIT WEGA V247",
    descripcion: "Kit de filtros WEGA para Peugeot 207 1.6, incluye todos los filtros indicados.",
    precio: 20914.92,
    cantidad: 10,
    categoria: "Filtros",
    image: "../assets/kitwega_peugeot207_16.jpg"
  },
  {
    id: 83,
    nombre: "KIT WEGA PEUGEOT 208 / 2008 1.6 16V (4 F)",
    nombreOficial: "KIT WEGA V250",
    descripcion: "Kit de filtros WEGA para Peugeot 208 / 2008 1.6 16V, incluye todos los filtros indicados.",
    precio: 28833.41,
    cantidad: 10,
    categoria: "Filtros",
    image: "../assets/kitwega_peugeot208_2008.jpg"
  },
  {
    id: 84,
    nombre: "KIT WEGA PEUGEOT 208 2008 1.6 GTI (3 F S/F COMB)",
    nombreOficial: "KIT WEGA V249",
    descripcion: "Kit de filtros WEGA para Peugeot 208 2008 1.6 GTI, incluye todos los filtros indicados.",
    precio: 22492.11,
    cantidad: 10,
    categoria: "Filtros",
    image: "../assets/kitwega_peugeot208_gti.jpg"
  },
  {
    id: 85,
    nombre: "KIT WEGA PEUGEOT 308, 208, 408, PART, CITROEN 1.6HDI",
    nombreOficial: "KIT WEGA V240",
    descripcion: "Kit de filtros WEGA para Peugeot 308, 208, 408, Part, Citroen 1.6HDI, incluye todos los filtros indicados.",
    precio: 45624.05,
    cantidad: 10,
    categoria: "Filtros",
    image: "../assets/kitwega_peugeot308_citroen.jpg"
  },
  {
    id: 86,
    nombre: "KIT WEGA RENAULT ALASKAN (4F)",
    nombreOficial: "KIT WEGA V419",
    descripcion: "Kit de filtros WEGA para Renault Alaskan, incluye todos los filtros indicados.",
    precio: 96694.56,
    cantidad: 10,
    categoria: "Filtros",
    image: "../assets/kitwega_renault_alaskan.jpg"
  },

  {
    id: 87,
    nombre: "KIT WEGA RENAULT CLIO II 1.2 (4 F)",
    nombreOficial: "KIT WEGA V258",
    descripcion: "Kit de filtros WEGA para Renault Clio II 1.2, incluye todos los filtros indicados.",
    precio: 24290.67,
    cantidad: 10,
    categoria: "Filtros",
    image: "../assets/kitwega_renault_clio2.jpg"
  },
  {
    id: 88,
    nombre: "KIT WEGA RENAULT DUSTER / SANDERO 1.6 16V (4 F)",
    nombreOficial: "KIT WEGA V257",
    descripcion: "Kit de filtros WEGA para Renault Duster / Sandero 1.6 16V, incluye todos los filtros indicados.",
    precio: 26084.35,
    cantidad: 10,
    categoria: "Filtros",
    image: "../assets/kitwega_renault_duster.jpg"
  },
  {
    id: 89,
    nombre: "KIT WEGA RENAULT DUSTER II, OROCH, CAPTUR (1 F. COM)",
    nombreOficial: "KIT WEGA V275",
    descripcion: "Kit de filtros WEGA para Renault Duster II, Oroch, Captur, incluye todos los filtros indicados.",
    precio: 24208.44,
    cantidad: 10,
    categoria: "Filtros",
    image: "../assets/kitwega_renault_dusterII.jpg"
  },
  {
    id: 90,
    nombre: "KIT WEGA RENAULT KANGOO 1.6 (4 F)",
    nombreOficial: "KIT WEGA V259",
    descripcion: "Kit de filtros WEGA para Renault Kangoo 1.6, incluye todos los filtros indicados.",
    precio: 24250.26,
    cantidad: 10,
    categoria: "Filtros",
    image: "../assets/kitwega_renault_kangoo.jpg"
  },
  {
    id: 91,
    nombre: "KIT WEGA RENAULT KANGOO III 1.5 DCI (4 F)",
    nombreOficial: "KIT WEGA V296",
    descripcion: "Kit de filtros WEGA para Renault Kangoo III 1.5 DCI, incluye todos los filtros indicados.",
    precio: 42550.19,
    cantidad: 10,
    categoria: "Filtros",
    image: "../assets/kitwega_renault_kangooIII.jpg"
  },


  {
    id: 92,
    nombre: "KIT WEGA RENAULT KANGOO III LOGAN M-NISSAN (3 F)",
    nombreOficial: "KIT WEGA 413",
    descripcion: "Kit de filtros WEGA para Renault Kangoo III Logan M-Nissan, incluye todos los filtros indicados.",
    precio: 42815.53,
    cantidad: 10,
    categoria: "Filtros",
    image: "../assets/kitwega_renault_kangooIII_logan.jpg"
  },
  {
    id: 93,
    nombre: "KIT WEGA RENAULT KWID 1.0 (4 F)",
    nombreOficial: "KIT WEGA V260",
    descripcion: "Kit de filtros WEGA para Renault Kwid 1.0, incluye todos los filtros indicados.",
    precio: 32988.32,
    cantidad: 10,
    categoria: "Filtros",
    image: "../assets/kitwega_renault_kwid.jpg"
  },
  {
    id: 94,
    nombre: "KIT WEGA RENAULT MASTER 2.3 (4F)",
    nombreOficial: "KIT WEGA V307",
    descripcion: "Kit de filtros WEGA para Renault Master 2.3, incluye todos los filtros indicados.",
    precio: 99167.54,
    cantidad: 10,
    categoria: "Filtros",
    image: "../assets/kitwega_renault_master.jpg"
  },
  {
    id: 95,
    nombre: "KIT WEGA TOYOTA COROLLA 1.8 VVT 16V (3 F)",
    nombreOficial: "KIT WEGA V263",
    descripcion: "Kit de filtros WEGA para Toyota Corolla 1.8 VVT 16V, incluye todos los filtros indicados.",
    precio: 27440.27,
    cantidad: 10,
    categoria: "Filtros",
    image: "../assets/kitwega_toyota_corolla18.jpg"
  },
  {
    id: 96,
    nombre: "KIT WEGA TOYOTA COROLLA CROSS 2.0 2020 (3 F)",
    nombreOficial: "KIT WEGA WKL1005",
    descripcion: "Kit de filtros WEGA para Toyota Corolla Cross 2.0 2020, incluye todos los filtros indicados.",
    precio: 32748.37,
    cantidad: 10,
    categoria: "Filtros",
    image: "../assets/kitwega_toyota_corolla_cross.jpg"
  },
  {
    id: 97,
    nombre: "KIT WEGA TOYOTA ETIOS 1.5 16V 103 CV 2016> (3 F)",
    nombreOficial: "KIT WEGA V262",
    descripcion: "Kit de filtros WEGA para Toyota Etios 1.5 16V 103 CV 2016>, incluye todos los filtros indicados.",
    precio: 29806.01,
    cantidad: 10,
    categoria: "Filtros",
    image: "../assets/kitwega_toyota_etios_103.jpg"
  },
  {
    id: 98,
    nombre: "KIT WEGA TOYOTA ETIOS 1.5 16V 84 CV 2013-2015 (3 F)",
    nombreOficial: "KIT WEGA V261",
    descripcion: "Kit de filtros WEGA para Toyota Etios 1.5 16V 84 CV 2013-2015, incluye todos los filtros indicados.",
    precio: 26729.57,
    cantidad: 10,
    categoria: "Filtros",
    image: "../assets/kitwega_toyota_etios_84.jpg"
  },
  {
    id: 99,
    nombre: "KIT WEGA TOYOTA HILUX 2.4-2.8 L. NUEVA (4 F)",
    nombreOficial: "KIT WEGA V214",
    descripcion: "Kit de filtros WEGA para Toyota Hilux 2.4-2.8 L. Nueva, incluye todos los filtros indicados.",
    precio: 53195.73,
    cantidad: 10,
    categoria: "Filtros",
    image: "../assets/kitwega_toyota_hilux_24_28.jpg"
  },
  {
    id: 100,
    nombre: "KIT WEGA TOYOTA HILUX 2.5-3.0 (4 F)",
    nombreOficial: "KIT WEGA V213",
    descripcion: "Kit de filtros WEGA para Toyota Hilux 2.5-3.0, incluye todos los filtros indicados.",
    precio: 51824.28,
    cantidad: 10,
    categoria: "Filtros",
    image: "../assets/kitwega_toyota_hilux_25_30.jpg"
  },
  {
    id: 101,
    nombre: "KIT WEGA VW AMAROK 2.0 TD 163 CV (4 F)",
    nombreOficial: "KIT WEGA V215",
    descripcion: "Kit de filtros WEGA para VW Amarok 2.0 TD 163 CV, incluye todos los filtros indicados.",
    precio: 77090.16,
    cantidad: 10,
    categoria: "Filtros",
    image: "../assets/kitwega_vw_amarok_163.jpg"
  },
  {
    id: 102,
    nombre: "KIT WEGA VW AMAROK 2.0 TD 180 CV L. NUEVA (4 F)",
    nombreOficial: "KIT WEGA V216",
    descripcion: "Kit de filtros WEGA para VW Amarok 2.0 TD 180 CV L. Nueva, incluye todos los filtros indicados.",
    precio: 114177.38,
    cantidad: 10,
    categoria: "Filtros",
    image: "../assets/kitwega_vw_amarok_180.jpg"
  },
  {
    id: 103,
    nombre: "KIT WEGA VW AMAROK V6 (4F)",
    nombreOficial: "KIT WEGA V282",
    descripcion: "Kit de filtros WEGA para VW Amarok V6, incluye todos los filtros indicados.",
    precio: 125260.34,
    cantidad: 10,
    categoria: "Filtros",
    image: "../assets/kitwega_vw_amarok_v6.jpg"
  },
  {
    id: 104,
    nombre: "KIT WEGA VW GOL POWER 1.4, 1.6 (4 F)",
    nombreOficial: "KIT WEGA V245",
    descripcion: "Kit de filtros WEGA para VW Gol Power 1.4, 1.6, incluye todos los filtros indicados.",
    precio: 31153.63,
    cantidad: 10,
    categoria: "Filtros",
    image: "../assets/kitwega_vw_gol_power.jpg"
  },
  {
    id: 105,
    nombre: "KIT WEGA VW GOL TREND, FOX, SURAN, SAVEIRO 1.6",
    nombreOficial: "KIT WEGA V237",
    descripcion: "Kit de filtros WEGA para VW Gol Trend, Fox, Suran, Saveiro 1.6, incluye todos los filtros indicados.",
    precio: 31497.90,
    cantidad: 10,
    categoria: "Filtros",
    image: "../assets/kitwega_vw_gol_trend.jpg"
  },
  {
    id: 106,
    nombre: "KIT WEGA VW UP 1.0 12V (4 F)",
    nombreOficial: "KIT WEGA V246",
    descripcion: "Kit de filtros WEGA para VW Up 1.0 12V, incluye todos los filtros indicados.",
    precio: 40248.23,
    cantidad: 10,
    categoria: "Filtros",
    image: "../assets/kitwega_vw_up.jpg"
  },


  {
    id: 107,
    nombre: "Motor Starter 9669 Mannol",
    nombreOficial: "Motor Starter 9669 Mannol",
    descripcion: "Arrancador de motor en aerosol Mannol 9669, facilita el encendido en frío.",
    precio: 0,
    cantidad: 10,
    categoria: "Lubricantes y Otros",
    image: "../assets/motor_starter_9669_mannol.jpg"
  },
  {
    id: 108,
    nombre: "Chain Lube 7901 Mannol",
    nombreOficial: "Chain Lube 7901 Mannol",
    descripcion: "Lubricante para cadenas Mannol 7901, ideal para motos y bicicletas.",
    precio: 0,
    cantidad: 10,
    categoria: "Lubricantes y Otros",
    image: "../assets/chain_lube_7901_mannol.jpg"
  },
  {
    id: 109,
    nombre: "Diesel Cleaner Mannol 9980",
    nombreOficial: "Diesel Cleaner Mannol 9980",
    descripcion: "Aditivo limpiador de sistema de inyección diésel Mannol 9980.",
    precio: 0,
    cantidad: 10,
    categoria: "Aditivos",
    image: "../assets/diesel_cleaner_mannol_9980.jpg"
  },
  {
    id: 110,
    nombre: "Super Benzin Octane Plus 9954",
    nombreOficial: "Super Benzin Octane Plus Mannol 9954",
    descripcion: "Aditivo potenciador de octanaje para motores nafteros Mannol 9954.",
    precio: 0,
    cantidad: 10,
    categoria: "Aditivos",
    image: "../assets/super_benzin_octane_plus_9954.jpg"
  },
  {
    id: 111,
    nombre: "Silicona Jarama Sunshine",
    nombreOficial: "Silicona Jarama Sunshine",
    descripcion: "Silicona perfumada Jarama aroma Sunshine, ideal para interiores de autos.",
    precio: 6000,
    cantidad: 10,
    categoria: "Limpieza y Detalle",
    image: "../assets/silicona_jarama_sunshine.jpg"
  },
  {
    id: 112,
    nombre: "Silicona Jarama Vainilla",
    nombreOficial: "Silicona Jarama Vainilla",
    descripcion: "Silicona perfumada Jarama aroma Vainilla, brillo y protección interior.",
    precio: 6000,
    cantidad: 10,
    categoria: "Limpieza y Detalle",
    image: "../assets/silicona_jarama_vainilla.jpg"
  },
  {
    id: 113,
    nombre: "Silicona Penetril Bosques del Sur",
    nombreOficial: "Silicona Penetril Bosques del Sur",
    descripcion: "Silicona aromatizada Penetril Bosques del Sur, limpia y protege superficies.",
    precio: 7800,
    cantidad: 10,
    categoria: "Limpieza y Detalle",
    image: "../assets/silicona_penetril_bosques_del_sur.jpg"
  },
  {
    id: 114,
    nombre: "Walker Alcohol Desinfectante",
    nombreOficial: "Walker Alcohol Desinfectante",
    descripcion: "Alcohol desinfectante Walker, limpieza y desinfección general.",
    precio: 0,
    cantidad: 10,
    categoria: "Limpieza y Desinfección",
    image: "../assets/walker_alcohol_desinfectante.jpg"
  },
  {
    id: 115,
    nombre: "Drive Limpia Contactos",
    nombreOficial: "Drive Limpia Contactos",
    descripcion: "Limpiador de contactos eléctricos Drive, elimina residuos y humedad.",
    precio: 0,
    cantidad: 10,
    categoria: "Limpieza Técnica",
    image: "../assets/drive_limpia_contactos.jpg"
  },
  {
    id: 116,
    nombre: "Walker W400 Lubricante",
    nombreOficial: "Walker W400 Lubricante Multiuso",
    descripcion: "Lubricante multiuso Walker W400, protege contra la corrosión.",
    precio: 0,
    cantidad: 10,
    categoria: "Lubricantes y Otros",
    image: "../assets/walker_w400_lubricante.jpg"
  },
  {
    id: 117,
    nombre: "Limpia Contactos Locx",
    nombreOficial: "Limpia Contactos Locx",
    descripcion: "Aerosol limpiador de contactos eléctricos marca Locx.",
    precio: 0,
    cantidad: 10,
    categoria: "Limpieza Técnica",
    image: "../assets/limpia_contactos_locx.jpg"
  },
  {
    id: 118,
    nombre: "Limpia Caudalímetros Locx",
    nombreOficial: "Limpia Caudalímetros Locx",
    descripcion: "Limpiador especial para sensores MAF (caudalímetros) marca Locx.",
    precio: 0,
    cantidad: 10,
    categoria: "Limpieza Técnica",
    image: "../assets/limpia_caudalimetros_locx.jpg"
  },
  {
    id: 119,
    nombre: "Total Quartz 9000 5W40",
    nombreOficial: "Total Quartz 9000 5W40",
    descripcion: "Aceite sintético Total Quartz 9000 5W40 para motores nafteros y diésel.",
    precio: 0,
    cantidad: 10,
    categoria: "Lubricantes",
    image: "../assets/total_quartz_9000_5w40.jpg"
  },
  {
    id: 120,
    nombre: "Total Engine Quartz 5W30",
    nombreOficial: "Total Engine Quartz 5W30",
    descripcion: "Aceite sintético Total Engine Quartz 5W30, alto rendimiento y protección.",
    precio: 0,
    cantidad: 10,
    categoria: "Lubricantes",
    image: "../assets/total_engine_quartz_5w30.jpg"
  },
  {
    id: 121,
    nombre: "Total Quartz 7000 10W40",
    nombreOficial: "Total Quartz 7000 10W40",
    descripcion: "Aceite semisintético Total Quartz 7000 10W40, rendimiento y durabilidad.",
    precio: 0,
    cantidad: 10,
    categoria: "Lubricantes",
    image: "../assets/total_quartz_7000_10w40.jpg"
  },
  {
    id: 122,
    nombre: "Elf Evolution 5W30 4L",
    nombreOficial: "Elf Evolution 5W30 4L",
    descripcion: "Aceite sintético Elf Evolution 5W30, presentación 4 litros.",
    precio: 0,
    cantidad: 10,
    categoria: "Lubricantes",
    image: "../assets/elf_evolution_5w30_4l.jpg"
  },
  {
    id: 123,
    nombre: "Valvoline Full Synthetic 5W30 4L",
    nombreOficial: "Valvoline Full Synthetic 5W30 4L",
    descripcion: "Aceite sintético Valvoline 5W30, máxima protección y limpieza del motor.",
    precio: 0,
    cantidad: 10,
    categoria: "Lubricantes",
    image: "../assets/valvoline_full_synthetic_5w30_4l.jpg"
  },
  {
    id: 124,
    nombre: "Motul 8100 X-Clean EFE 5W30 5L",
    nombreOficial: "Motul 8100 X-Clean EFE 5W30 5L",
    descripcion: "Aceite sintético Motul 8100 X-Clean EFE 5W30, bidón de 5 litros.",
    precio: 0,
    cantidad: 10,
    categoria: "Lubricantes",
    image: "../assets/motul_8100_xclean_efe_5w30_5l.jpg"
  },
  {
    id: 125,
    nombre: "Motul 4100 Protect 10W40",
    nombreOficial: "Motul 4100 Protect 10W40",
    descripcion: "Aceite semisintético Motul 4100 Protect 10W40, excelente protección y limpieza.",
    precio: 0,
    cantidad: 10,
    categoria: "Lubricantes",
    image: "../assets/motul_4100_protect_10w40.jpg"
  },
  {
    id: 126,
    nombre: "Racing + Ester 10W60",
    nombreOficial: "Racing + Ester 10W60",
    descripcion: "Aceite sintético Racing + Ester 10W60, formulado para alto rendimiento.",
    precio: 0,
    cantidad: 10,
    categoria: "Lubricantes",
    image: "../assets/racing_ester_10w60.jpg"
  }

];



export default productos;


