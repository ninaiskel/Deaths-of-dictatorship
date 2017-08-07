const people = [
  {
    id: 1,
    name: "Jairo Johan Ortiz Bustamante",
    description: "Era estudiante de derecho en el núcleo San Antonio de la Universidad Bicentenaria de Aragua.",
    age: 19,
    date_death: {
      day: 06,
      month: 04,
      year: 2017
    },
    place_death: "Estado Miranda",
    coments: "Jairo cayó herido aproximadamente a las 9:30 pm. Estaba cercano a la entrada del centro comercial de la zona, justo al lado de la panadería, ahí lo alcanzó la bala. Sus compañeros de protesta lo trasladaron de inmediato al Centro Médico Docente Los Altos, contiguo al lugar de la protesta y a pocos metros donde se desplomó el joven universitario.",
    links: "http://www.eluniversal.com/noticias/sucesos/padre-jairo-ortiz-hijo-era-totalmente-pacifico_647851",
    image: "images/photos/jairo-ortiz.jpg"
  },
  {
    id: 2,
    name: "Daniel queliz Araca",
    description: "estudiante de derecho de la Universidad Arturo Michelena ",
    age: 20,
    date_death: {
      day: 10,
      month: 04,
      year: 2017
    },
    place_death: "Estado Carabobo",
    coments: "Durante la situación, el joven resultó herido en el cuello por un impacto de bala. Posteriormente, la víctima fue trasladada a la Ciudad Hospitalaria Dr. Enrique Tejera, donde ingresó sin signos vitales.",
    links: "http://www.eluniversal.com/noticias/sucesos/murio-joven-daniel-queliz-mientras-protestaba-valencia_647914",
    image: "images/photos/daniel-queliz.jpg"
  },
  {
    id: 3,
    name: "Miguel colmenares",
    description: "_",
    age: 36,
    date_death: {
      day: 11,
      month: 04,
      year: 2017
    },
    place_death: "Estado Lara",
    coments: "quien recibió 11 disparos por colectivos, señalaron medios de comunicación. Los hechos ocurrieron en la calle 59 del oeste de Barquisimeto, donde se realizaban manifestaciones violentas y trancas de calles.",
    links:"http://www.el-nacional.com/noticias/sucesos/mataron-disparos-joven-durante-manifestacion-barquisimeto_159875" ,
    image: "images/photos/miguel-colmenares.jpg"
  },
  {
    id: 4,
    name: "Brayan David Principal Giménez",
    description: "Adolescente, tercer año de bachillerato.",
    age: 14,
    date_death: {
      day: 11,
      month: 04,
      year: 2017
    },
    place_death: "Estado Lara",
    coments: "Murió luego de ser herido de bala por colectivos en la urbanización Yucatán en el norte de Barquisimeto. Según informaron sus familiares a la web El Pitazo, el joven salió a comprar café y en ese instante se presume que llegaron los colectivos a disparar. Su asesinato ocurrió la misma noche en que falleció Colmenares.",
    links:"http://www.caraotadigital.net/sucesos/versiones-encontradas-sobre-muerte-de-brayan-principal-en-barquisimeto/" ,
    image: "images/photos/brayan-principal.jpg"
  },
  {
    id: 5,
    name: "Gruseny Antonio Canelón Scirpatempo",
    description: "deportista  y se dedicaba a la venta de repuestos de vehículos. Era conocido como Tony por sus amigos y allegados.",
    age: 32,
    date_death: {
      day: 14,
      month: 04,
      year: 2017
    },
    place_death: "Estado Lara",
    coments: "Fue herido con perdigones a quemarropa en el pecho, el pasado 11 de abril, durante una manifestación en el distribuidor Bellas Artes de Cabudare, estado Lara. Se presume que Canelón fue atacado por funcionarios de la Guardia Nacional Bolivariana (GNB). El hombre falleció el 14 de abril.",
    links:"http://www.el-nacional.com/noticias/politica/marquina-gruseny-antonio-canelon-otra-victima-mas-dictadura_177166" ,
    image: "images/photos/gruseny-canelon.jpg"
  },
  {
    id: 6,
    name: "Carlos José Moreno Barón",
    description: " estudiante de primer semestre de economía en la Universidad Central de Venezuela. Vivía con su madre y hermana. Jugaba futbol en sus tiempos libres.",
    age: 17,
    date_death: {
      day: 19,
      month: 04,
      year: 2017
    },
    place_death: "Distrito Capital",
    coments: "Falleció por herida de arma de fuego en la región cefálica durante una manifestación en la plaza La Estrella, San Bernardino, Distrito Capital; cuando un grupo de motorizados arrojó bombas lacrimógenas a los presentes y accionaron armas de fuego, resultando herido, fue trasladado hasta el Hospital de Clínicas Caracas donde falleció.",
    links:"http://www.caraotadigital.net/sucesos/carlos-jose-moreno/" ,
    image: "images/photos/carlos-moreno.jpg"
  },
  {
    id: 7,
    name: "Paola Andreína Ramírez Gómez",
    description: "Era estudiante de la Universidad Católica de San Cristóbal.",
    age: 32,
    date_death: {
      day: 19,
      month: 04,
      year: 2017
    },
    place_death: "Estado Tachira",
    coments: "La joven recibió un disparo que le perforó los pulmones cuando se encontraba en las inmediaciones de la plaza Las Palomas del barrio San Carlos en el estado Táchira.",
    links:"https://eldiariony.com/2017/04/20/los-3-videos-que-muestran-como-presuntos-chavistas-mataron-a-joven-en-protesta-opositora/" ,
    image: "images/photos/paola-ramirez.jpg"
  },
  {
    id: 8,
    name: "Niumar José Sanclemente Barrios",
    description: "sargento segundo de la GNB",
    age: 28,
    date_death: {
      day: 19,
      month: 04,
      year: 2017
    },
    place_death: "Estado Miranda",
    coments: "cuando se encontraba controlando una manifestación en San Antonio de los Altos, estado Miranda. San Clemente resultó herido de un disparo en el tórax cuando un hombre, que aún no ha sido identificado, disparó contra los efectivos de la Fuerza Armada.",
    links:"http://runrun.es/nacional/305695/un-gnb-muerto-y-otro-herido-en-san-antonio-de-los-altos.html" ,
    image: "images/photos/niumar-sanclemente.jpg"
  },
  {
    id: 9,
    name: "Mervins Fernando Guitian Díaz",
    description: "Supervisor de mantenimiento de obras públicas en la Alcaldía del municipio Sucre del estado Miranda. Sufría de epilepsia.",
    age: 26,
    date_death: {
      day: 20,
      month: 04,
      year: 2017
    },
    place_death: "Estado Miranda",
    coments: "murió el jueves en la noche en el Hospital de El Llanito, pasadas las 9:00 pm, debido a una herida por un tiro de fusil en el abdomen cuando atravesaba el puente del barrio 5 de Julio de Petare, media hora en una protesta de vecinos.",
    links:"http://www.el-nacional.com/noticias/sucesos/tiro-fusil-murio-joven-discapacitado-petare_178468" ,
    image: "images/photos/mervis-guitian.jpg"
  },
  {
    id: 10,
    name: "Elio Manuel Pacheco Perez",
    description: "Estudiaba administración y trabajaba como obrero en la empresa Fospuca.",
    age: 21,
    date_death: {
      day: 20,
      month: 04,
      year: 2017
    },
    place_death: "Distrito Capital",
    coments: "Falleció producto de una electrocución por el hecho acontecido en la panadería “La Mayer del Pan”, ubicada en la calle San Andrés Cajigal en El Valle, de acuerdo al Ministerio Público.",
    links:"http://runrun.es/nacional/305901/diez-muertos-en-el-valle-por-saqueo-a-una-panaderia.html" ,
    image: "images/photos/elio-pacheco.jpg"
  },
  {
    id: 11,
    name: "Keyner Aranguren",
    description: "Obrero",
    age: 20,
    date_death: {
      day: 20,
      month: 04,
      year: 2017
    },
    place_death: "Distrito Capital",
    coments: "Falleció producto de una electrocución por el hecho acontecido en la panadería “La Mayer del Pan”, ubicada en la calle San Andrés Cajigal en El Valle, de acuerdo al Ministerio Público.",
    links:"http://runrun.es/nacional/305901/diez-muertos-en-el-valle-por-saqueo-a-una-panaderia.html" ,
    image: "images/photos/no-photo.jpg"
  },
  {
    id: 12,
    name: "Robert Joel Centeno",
    description: "Servidor Público",
    age: 29,
    date_death: {
      day: 20,
      month: 04,
      year: 2017
    },
    place_death: "Distrito Capital",
    coments: "Falleció producto de una electrocución por el hecho acontecido en la panadería “La Mayer del Pan”, ubicada en la calle San Andrés Cajigal en El Valle, de acuerdo al Ministerio Público.",
    links:"http://runrun.es/nacional/305901/diez-muertos-en-el-valle-por-saqueo-a-una-panaderia.html" ,
    image: "images/photos/no-photo.jpg"
  },
  {
    id: 13,
    name: "Yorgeiber Barrena",
    description: "Estudiante de educacion media",
    age: 15,
    date_death: {
      day: 20,
      month: 04,
      year: 2017
    },
    place_death: "Distrito Capital",
    coments: "Falleció producto de una electrocución por el hecho acontecido en la panadería “La Mayer del Pan”, ubicada en la calle San Andrés Cajigal en El Valle, de acuerdo al Ministerio Público.",
    links:"http://runrun.es/nacional/305901/diez-muertos-en-el-valle-por-saqueo-a-una-panaderia.html" ,
    image: "images/photos/no-photo.jpg"
  },
  {
    id: 14,
    name: "William Heriberto Marrero Rebolledo",
    description: "Estilista",
    age: 33,
    date_death: {
      day: 20,
      month: 04,
      year: 2017
    },
    place_death: "Distrito Capital",
    coments: "Falleció producto de una electrocución por el hecho acontecido en la panadería “La Mayer del Pan”, ubicada en la calle San Andrés Cajigal en El Valle, de acuerdo al Ministerio Público.",
    links:"http://runrun.es/nacional/305901/diez-muertos-en-el-valle-por-saqueo-a-una-panaderia.html" ,
    image: "images/photos/william-marrero.jpg"
  },
  {
    id: 15,
    name: "Jairo Ramírez",
    description: "Mecánico",
    age: 46,
    date_death: {
      day: 20,
      month: 04,
      year: 2017
    },
    place_death: "Distrito Capital",
    coments: "Falleció producto de una electrocución por el hecho acontecido en la panadería “La Mayer del Pan”, ubicada en la calle San Andrés Cajigal en El Valle, de acuerdo al Ministerio Público.",
    links:"http://runrun.es/nacional/305901/diez-muertos-en-el-valle-por-saqueo-a-una-panaderia.html" ,
    image: "images/photos/no-photo.jpg"
  },
  {
    id: 16,
    name: "Jonathan Antonio Menezez López",
    description: "Obrero",
    age: 27,
    date_death: {
      day: 20,
      month: 04,
      year: 2017
    },
    place_death: "Distrito Capital",
    coments: "Falleció producto de una electrocución por el hecho acontecido en la panadería “La Mayer del Pan”, ubicada en la calle San Andrés Cajigal en El Valle, de acuerdo al Ministerio Público.",
    links:"http://runrun.es/nacional/305901/diez-muertos-en-el-valle-por-saqueo-a-una-panaderia.html" ,
    image: "images/photos/no-photo.jpg"
  },
  {
    id: 17,
    name: "Romer Stivenson Zamora",
    description: "Mototaxista",
    age: 29,
    date_death: {
      day: 20,
      month: 04,
      year: 2017
    },
    place_death: "Distrito Capital",
    coments: "Falleció producto de una electrocución por el hecho acontecido en la panadería “La Mayer del Pan”, ubicada en la calle San Andrés Cajigal en El Valle, de acuerdo al Ministerio Público.",
    links:"http://runrun.es/nacional/305901/diez-muertos-en-el-valle-por-saqueo-a-una-panaderia.html" ,
    image: "images/photos/no-photo.jpg"
  },
  {
    id: 18,
    name: "Francisco Javier González Núñez",
    description: " ",
    age: 34,
    date_death: {
      day: 20,
      month: 04,
      year: 2017
    },
    place_death: "Distrito Capital",
    coments: "Recibió un disparo cuando se encontraba en una manifestación en la calle Cajigal de El Valle. ",
    links:"http://runrun.es/rr-es-plus/306272/son-18-los-muertos-en-protestas-de-el-valle-y-no-11-como-dijo-el-gobierno.html" ,
    image: "images/photos/no-photo.jpg"
  },
  {
    id: 19,
    name: "Albert Alejandro Rodríguez Aponte",
    description: "El joven padecía de patologías cardiaca",
    age: 16,
    date_death: {
      day: 20,
      month: 04,
      year: 2017
    },
    place_death: "Distrito Capital",
    coments: "Murió por asfixia producto del gas lacrimógeno que se usó para controlar una manifestación en la parroquia El Valle",
    links:"http://runrun.es/rr-es-plus/306272/son-18-los-muertos-en-protestas-de-el-valle-y-no-11-como-dijo-el-gobierno.html" ,
    image: "images/photos/no-photo.jpg"
  },
  {
    id: 20,
    name: "Ramón Ernesto Martínez Cegarra",
    description: "Comerciante",
    age: 28,
    date_death: {
      day: 20,
      month: 04,
      year: 2017
    },
    place_death: "Distrito Capital",
    coments: "Recibio un disparo al defender su negocio",
    links:"http://runrun.es/rr-es-plus/306272/son-18-los-muertos-en-protestas-de-el-valle-y-no-11-como-dijo-el-gobierno.html" ,
    image: "images/photos/no-photo.jpg"
  },
  {
    id: 21,
    name: "Almelina Carrillo Virgüez",
    description: "Laboraba como camarera en una clínica privada de la parroquia San Bernardino",
    age: 47,
    date_death: {
      day: 23,
      month: 04,
      year: 2017
    },
    place_death: "Distrito Capital",
    coments: "Herida en la cabeza con una botella de agua congelada el pasado 19 de abril",
    links:"http://www.panorama.com.ve/sucesos/Capturan-a-involucrado-en-la-muerte-de-Almelina-Carrillo-en-La-Candelaria-el-pasado-19-de-abril-20170503-0071.html" ,
    image: "images/photos/almelina-carrillo.jpg"
  },
  {
    id: 22,
    name: "Renzo Jesús Rodríguez Roda",
    description: "Obrero",
    age: 54,
    date_death: {
      day: 24,
      month: 04,
      year: 2017
    },
    place_death: "Estado Barinas",
    coments: "Grupo de presuntos colectivos atacaron a los manifestantes que se encontraba en Barinitas, el hombre resultó lesionado en la región pectoral izquierda. No participaba en el planton",
    links:"https://elpitazo.com/ultimas-noticias/muerto-barinitas-afecto-al-oficialismo/" ,
    image: "images/photos/renzo-rodriguez.jpg"
  },
  {
    id: 23,
    name: "Jesús Leonardo Sulbarán",
    description: "Estudiante de Criminología y funcionario de la Gobernación de Mérida",
    age: 41,
    date_death: {
      day: 24,
      month: 04,
      year: 2017
    },
    place_death: "Estado Merida",
    coments: "Murió tras recibir un disparo en el tórax durante las manifestaciones registradas en las adyacencias del Viaducto Campo Elías.",
    links:"http://www.el-nacional.com/noticias/protestas/jesus-sulbaran-murio-durante-manifestacion-merida-este-24-a_178851" ,
    image: "images/photos/jesus-sulbaran.jpg"
  },
  {
    id: 24,
    name: "Jackson Enrique Hernández",
    description: "Estudiante",
    age: 16,
    date_death: {
      day: 24,
      month: 04,
      year: 2017
    },
    place_death: "Estado Táchira",
    coments: "recibió dos tiros en sitio donde se efectuaba una protesta en San Cristobal",
    links:"https://www.el-carabobeno.com/murio-joven-recibio-dos-tiros-sitio-donde-se-efectuaba-una-protesta-san-cristobal/" ,
    image: "images/photos/jackson-hernandez.jpg"
  },
  {
    id: 25,
    name: "Johan Medina",
    description: "Trabajaba como Bedel en el Liceo Seferino Castillo del Tocuyo",
    age: 23,
    date_death: {
      day: 25,
      month: 04,
      year: 2017
    },
    place_death: "Estado Lara",
    coments: "Se encontraba en una manifestación en la Avenida Lisandro Alvarado, cuando recibió un disparo que le ocasionó un traumatismo craneoencefálico",
    links:"http://www.eluniversal.com/noticias/venezuela/muere-joven-durante-protesta-lara_649912" ,
    image: "images/photos/johan-medina.jpg"
  },
  {
    id: 26,
    name: "Luis Alberto Márquez",
    description: "Tenía 23 años trabajando en la Universidad de Los Andes",
    age: 52,
    date_death: {
      day: 25,
      month: 04,
      year: 2017
    },
    place_death: "Estado Mérida",
    coments: "Murió tras recibir un disparo de arma de fuego en la cabeza el pasado 24 de abril, cuando se encontraba reunido con un grupo de personas en viaducto Campo Elías, en la capital del estado Mérida. Fue herido por presuntos grupos armados. Falleció el 25 de abril.",
    links:"https://elpitazo.com/ultimas-noticias/luis-alberto-marquez-sindicalista-murio-las-protestas-merida/" ,
    image: "images/photos/luis-marquez.jpg"
  },
  {
    id: 27,
    name: "Christian Humberto Ochoa Soriano",
    description: "Era el menor de tres hermanos.",
    age: 52,
    date_death: {
      day: 25,
      month: 04,
      year: 2017
    },
    place_death: "Estado Carabobo",
    coments: "Fue gravemente herido durante las protestas del último lunes, cuando recibió varios disparos en la ciudad de Valencia",
    links:"http://efectococuyo.com/principales/christian-ochoa-la-victima-27-que-muere-en-venezuela-durante-protestas-de-abril" ,
    image: "images/photos/christian-ochoa.jpg"
  },
  {
    id: 28,
    name: "Juan Pablo Pernalete Llovera",
    description: "Estudiante de Contaduría Pública de la Universidad Metropolitana y se entrenaba para ser jugador de la NBA",
    age: 20,
    date_death: {
      day: 26,
      month: 04,
      year: 2017
    },
    place_death: "Estado Miranda",
    coments: "Murió luego de recibir el impacto de una bomba lacrimógena en el pectoral izquierdo mientras participaba en una manifestación en el sector de Altamira.",
    links:"http://www.el-nacional.com/noticias/bbc-mundo/conmovedora-historia-juan-pernalete-uno-los-muertos-las-protestas_182300" ,
    image: "images/photos/juan-pernalete.jpg"
  },
  {
    id: 29,
    name: "Eyker Daniel Rojas Gil",
    description: "Técnico de Celulares",
    age: 20,
    date_death: {
      day: 27,
      month: 04,
      year: 2017
    },
    place_death: "Estado Lara",
    coments: "Herido por arma de fuego cuando se encontraba cerca de una manifestación en Barquisimeto. Testigos del hecho responsabilizaron a funcionarios de la GNB de su muerte.",
    links:"http://runrun.es/nacional/306811/reportan-un-fallecido-por-arma-de-fuego-en-protesta-en-lara.html" ,
    image: "images/photos/eyker-rojas.jpg"
  },
  {
    id: 30,
    name: "Carlos Eduardo Aranguren Salcedo",
    description: "Comerciante informal ",
    age: 30,
    date_death: {
      day: 02,
      month: 05,
      year: 2017
    },
    place_death: "Estado Miranda",
    coments: "Asesinado por arma de fuego en medio de protestas en petare. no participaba en la protesta",
    links:"http://www.caraotadigital.net/sucesos/asesinaron-comerciante-informal-durante-disturbios-por-protestas-en-puente-baloa/" ,
    image: "images/photos/carlos-salcedo.jpg"
  },
  {
    id: 31,
    name: "Yonathan Eduardo Quintero Arenas",
    description: "Trabajaba como ayudante de mecánica.",
    age: 21,
    date_death: {
      day: 02,
      month: 05,
      year: 2017
    },
    place_death: "Estado Carabobo",
    coments: "Se encontraba en las inmediaciones del supermercado Villa Florida, sector La Guacamaya de Valencia, donde habrían intentado ingresar de manera irregular. En ese momento, se escucharon varios disparos provenientes de la parte superior de dicho local, efectuados presuntamente por el dueño del local.",
    links:"http://runrun.es/nacional/307647/confirman-muerte-de-joven-durante-protesta-en-valencia.html" ,
    image: "images/photos/no-photo.jpg"
  },
  {
    id: 32,
    name: "Ángel Enrique Moreira González",
    description: "Perteneció a la selección nacional de natación y también practicó la modalidad de nado deportivo en aguas abiertas",
    age: 28,
    date_death: {
      day: 02,
      month: 05,
      year: 2017
    },
    place_death: "Estado Miranda",
    coments: "Cuando conducía por la autopista Prados del Este, un vehículo automotor que intentó evadir una manifestación, a la altura del distribuidor Santa Fe, lo arroyó causándole la muerte.",
    links:"http://runrun.es/nacional/307735/motorizado-fue-arrollado-por-vehiculo-que-esquivaba-una-barricada-en-prados-del-este.html#" ,
    image: "images/photos/angel-moreira.jpg"
  },
  {
    id: 33,
    name: "María de los Ángeles Guanipa Barrientos",
    description: "Comerciante",
    age: 36,
    date_death: {
      day: 02,
      month: 05,
      year: 2017
    },
    place_death: "Estado Carabobo",
    coments: "Murió en un accidente de tránsito luego de chocar contra una barricada ubicada en el km 174 de la autopista Valencia- Puerto Cabello, a la altura del distribuidor Giradot.",
    links:"http://runrun.es/nacional/307642/2-fallecidos-y-10-heridos-dejo-accidente-en-distribuidor-girardot-en-valencia.html" ,
    image: "images/photos/maria-guanipa.jpg"
  },
  {
    id: 34,
    name: "Ana Victoria Colmenares de Hernández",
    description: "Comerciante",
    age: 43,
    date_death: {
      day: 02,
      month: 05,
      year: 2017
    },
    place_death: "Estado Carabobo",
    coments: "Murió en un accidente de tránsito luego de chocar contra una barricada ubicada en el km 174 de la autopista Valencia- Puerto Cabello, a la altura del distribuidor Giradot.",
    links:"http://runrun.es/nacional/307642/2-fallecidos-y-10-heridos-dejo-accidente-en-distribuidor-girardot-en-valencia.html" ,
    image: "images/photos/ana-colmenares.jpg"
  },
  {
    id: 35,
    name: "Jesús Armando Alonzo Valera",
    description: "Estudiante",
    age: 15,
    date_death: {
      day: 02,
      month: 05,
      year: 2017
    },
    place_death: "Estado Carabobo",
    coments: "Fue asesinado en el barrio Pedro Herrera. Valencia, estado Carabobo. Cuando estaba observando un saqueo. Víctima no reconocida por el Ministerio Público.",
    links:"https://www.el-carabobeno.com/muerto-adolescente-disturbios/" ,
    image: "images/photos/no-photo.jpg"
  },
  {
    id: 36,
    name: "Armando Cañizales Carrillo",
    description: "Formaba parte del Sistema Nacional de Orquesta Sinfónica de Venezuela, quien iniciaría estudios en la Facultad de Medicina de la Universidad Central de Venezuela.",
    age: 18,
    date_death: {
      day: 03,
      month: 05,
      year: 2017
    },
    place_death: "Estado Miranda",
    coments: "Sufrió un trauma penetrante en el cuello sin salida que produjo shock y paro cardiorrespiratorio",
    links:"http://www.el-nacional.com/noticias/oposicion/menor-edad-fue-asesinado-durante-protesta-las-mercedes_180379" ,
    image: "images/photos/armando-cañizalez.jpg"
  },
  {
    id: 37,
    name: "Gerardo José Barrera Alonso",
    description: "Funcionario policial del municipio San Joaquín del estado Carabobo",
    age: 38,
    date_death: {
      day: 03,
      month: 05,
      year: 2017
    },
    place_death: "Estado Carabobo",
    coments: "Según información preliminar, el hecho ocurrió en horas de la tarde del miércoles 3 de mayo, cuando un grupo de personas se encontraba manifestando en la urbanización La Pradera del municipio San Joaquín, lugar en el que el funcionario resultó herido luego de recibir un disparo.",
    links:"http://www.eluniversal.com/noticias/sucesos/policarabobo-muerto-otros-dos-heridos-actos-vandalicos-carabobo_651225" ,
    image: "images/photos/gerardo-barrera.jpg"
  },
  {
    id: 39,
    name: "Luis Eloy Pacheco",
    description: "Se dedicaba a  vender frutas y verduras",
    age: 22,
    date_death: {
      day: 04,
      month: 05,
      year: 2017
    },
    place_death: "Estado Carabobo",
    coments: "ecibió un disparo en el rostro durante una protesta, proveniente del arma de un PoliCarabobo, cuando se encontraba cerca de una turba en el sector Pinzón Herrera de Central Tacarigua, municipio Carlos Arvelo del estado Carabobo. Su muerte no ha sido reconocida por el Ministerio Público.",
    links:"http://runrun.es/nacional/308297/ministerio-publico-aun-no-reconoce-cinco-muertes-en-carabobo-en-marco-de-protestas.html" ,
    image: "images/photos/no-photo.jpg"
  },
  {
    id: 40,
    name: "Hecder Lugo Pérez",
    description: "practicaba natación, era bachiller",
    age: 20,
    date_death: {
      day: 05,
      month: 05,
      year: 2017
    },
    place_death: "Estado Carabobo",
    coments: "Fue herido el 4 de mayo durante manifestación en Carabobo",
    links:"http://www.talcualdigital.com/Nota/142306/fallecio-hecder-lugo-perez-el-joven-herido-en-la-cabeza-en-carabobo" ,
    image: "images/photos/hecder-perez.jpg"
  },
  {
    id: 41,
    name: "Miguel Joseph Medina Romero",
    description: "Se trata de la primera muerte en Zulia como resultado de las protestas que se registran desde el 6 de abril contra el gobierno",
    age: 20,
    date_death: {
      day: 05,
      month: 05,
      year: 2017
    },
    place_death: "Estado Zulia",
    coments: "Recibió un disparo en el abdomen el pasado 3 de mayo durante una protesta en el sector Pomona, ubicado al sur de Maracaibo en el estado Zulia. Medina falleció el 5 de mayo en la Unidad de Cuidados Intensivos del Hospital General del Sur. Testigos afirman que funcionarios de la Policía Nacional se encontraban reprimiendo la manifestación cuando el joven fue atacado.",
    links:"http://www.eluniversal.com/noticias/sucesos/fallecio-maracaibo-joven-herido-abdomen_651310" ,
    image: "images/photos/miguel-medina.jpg"
  },
  {
    id: 42,
    name: "Anderson Enrique Dugarte",
    description: "Trabajaba como mototaxista",
    age: 32,
    date_death: {
      day: 10,
      month: 05,
      year: 2017
    },
    place_death: "Estado Mérida",
    coments: "fue una de las personas heridas durante las manifestaciones del lunes 8 de mayo en Mérida, recibió una bala en el cráneo por la cual falleció el 10 de mayo en el Hospital Universitario de Los Andes.",
    links:"http://www.eluniversal.com/noticias/sucesos/fallecio-maracaibo-joven-herido-abdomen_651310" ,
    image: "images/photos/anderson-dugarte.jpg"
  },
  {
    id: 43,
    name: "Miguel Fernando Castillo Bracho",
    description: "Era comunicador social mención audiovisual egresado de la Universidad Santa María.",
    age: 27,
    date_death: {
      day: 10,
      month: 05,
      year: 2017
    },
    coments: "Fue asesinado durante una manifestación en Las Mercedes, municipio Baruta del estado Miranda.",
    place_death: "Estado Miranda",
    links:"http://www.caraotadigital.net/nacionales/miguel-castillo-otra-vida-apagada-por-la-represion-gubernamental-perfil/" ,
    image: "images/photos/miguel-castillo.jpg"
  },
  {
    id: 44,
    name: "Luis José Alviárez Chacón",
    description: "Era hijo único, bachiller, atleta en la disciplina de Ping Pong.",
    age: 18,
    date_death: {
      day: 15,
      month: 05,
      year: 2017
    },
    coments: "El joven tachirense de 18 años manifestaba junto a un grupo de personas en Palmira cuando recibió un impacto de bala en el tórax disparado por un funcionario de la PNB. Fue ingresado sin signos vitales a un centro asistencial de la localidad.",
    place_death: "Estado Táchira",
    links:"http://cnnespanol.cnn.com/2017/05/16/muere-un-adolescente-en-las-protestas-en-palmira-venezuela/" ,
    image: "images/photos/no-photo.jpg"
  },
  {
    id: 45,
    name: "Diego Armando Hernández ",
    description: "Su sitio de residencia era en el barrio Los Hornos, en Capacho Viejo, municipio aledaño a donde murió Diego Hernández",
    age: 33,
    date_death: {
      day: 15,
      month: 05,
      year: 2017
    },
    coments: "Recibió un impacto de bala en el pecho el pasado 15 de mayo cuando se encontraba cerca de una manifestación en Capacho, estado Táchira. El Ministerio Público imputó a un policía de Táchira, identificado como Luis Oviedo, de su muerte.",
    place_death: "Estado Táchira",
    links:"https://elpitazo.com/regiones/asesinado-tachira-diego-hernandez-cuando-pasaba-una-manifestacion/" ,
    image: "images/photos/diego-hernandez.jpg"
  },
  {
    id: 46,
    name: "Yeison Nathanael Mora Castillo",
    description: "El joven laboraba en una ferretería.",
    age: 17,
    date_death: {
      day: 16,
      month: 05,
      year: 2017
    },
    coments: "el adolescente fue asesinado producto de un disparo de arma de fuego en la cara mientras se encontraba en el “Gran Plantón” realizado el 16 de mayo en el municipio Pedraza.",
    place_death: "Estado Barinas",
    links:"http://runrun.es/nacional/venezuela-2/309541/fallecio-adolescente-herido-de-bala-durante-gran-planton-en-barinas.html" ,
    image: "images/photos/yeison-castillo.jpg"
  },
  {
    id: 47,
    name: "José Francisco Guerrero ",
    description: "Se dedicaba al trabajo de obrero, tenía seis hermanos",
    age: 15,
    date_death: {
      day: 16,
      month: 05,
      year: 2017
    },
    coments: "De acuerdo con la información preliminar, aproximadamente a las 4:00 pm el joven de 15 años realizaba compras en un abasto ubicado en el referido sector, cerca de donde se realizaba una manifestación, cuando recibió un disparo a nivel umbilical.",
    place_death: "Estado Táchira",
    links:"http://www.panorama.com.ve/politicayeconomia/Fallecio-Jose-Francisco-Guerrero-de-15-anos-por-un-impacto-de-bala-en-Sabaneta-estado-Tachira-20170517-0081.html" ,
    image: "images/photos/jose-guerrero.jpg"
  },
  {
    id: 48,
    name: "Diego Fernando Arellano",
    description: "Era biologo",
    age: 31,
    date_death: {
      day: 16,
      month: 05,
      year: 2017
    },
    coments: "Recibió un disparo en el tórax con un arma de fuego cuando se encontraba manifestando el pasado 16 de mayo en la avenida Perimetral de San Antonio de los Altos. Testigos aseguraron que un funcionario de la GNB hirió a Arellano cuando se encontraba reprimiendo la manifestación. ",
    place_death: "Estado Miranda",
    links:"http://runrun.es/nacional/venezuela-2/309611/muere-herido-de-bala-en-san-antonio-de-los-altos-durante-protesta-16may.html" ,
    image: "images/photos/diego-arellano.jpg"
  },
  {
    id: 49,
    name: "Manuel Felipe Castellanos",
    description: "",
    age: 46,
    date_death: {
      day: 17,
      month: 05,
      year: 2017
    },
    coments: "El hombre falleció este 17 de mayo producto de un disparo en el cuello mientras había un enfrentamiento entre manifestantes y funcionarios de las Fuerzas Armadas en el sector Tucapé, en el municipio Cárdenas del estado Táchira. La víctima había salido para comprar pañales para su hijo. El Ministerio Público imputó a tres GNB por el asesinato.",
    place_death: "Estado Táchira",
    links:"http://runrun.es/nacional/309820/muere-otro-tachirense-en-manifestacion-de-tucape.html" ,
    image: "images/photos/no-photo.jpg"
  },
  {
    id: 50,
    name: "Paul Moreno",
    description: "Estudiante de Medicina y miembro de la Cruz Verde",
    age: 24,
    date_death: {
      day: 18,
      month: 05,
      year: 2017
    },
    coments: "Moreno fue arrollado cuando se encontraba auxiliando a varios manifestantes afectados por los gases lacrimógenos. El responsable aún no ha sido identificado. ",
    place_death: "Estado Zulia",
    links:"http://www.el-nacional.com/noticias/oposicion/quien-era-paul-moreno-miembro-cruz-verde-asesinado-protesta_183016" ,
    image: "images/photos/paul-moreno.jpg"
  },
  {
    id: 51,
    name: "Daniel Rodríguez",
    description: "Estudiante de la Universidad Católica del Táchira",
    age: 18,
    date_death: {
      day: 19,
      month: 05,
      year: 2017
    },
    coments: "Falecio en horas luego de recibir un disparo en la cabeza por colectivos armados en Córdoba, estado Táchira.",
    place_death: "Estado Táchira",
    links:"http://www.el-nacional.com/noticias/oposicion/quien-era-paul-moreno-miembro-cruz-verde-asesinado-protesta_183016" ,
    image: "images/photos/daniel-rodriguez.jpg"
  },
  {
    id: 52,
    name: "Jorge Escandón",
    description: "Funcionario de la policía de Carabobo",
    age: 37,
    date_death: {
      day: 19,
      month: 05,
      year: 2017
    },
    coments: "Recibió un impacto de bala en la cabeza durante una manifestación realizada el pasado 15 de mayo en la urbanización Palma Real de municipio Naguanagua. El hombre falleció este viernes 19 de mayo.",
    place_death: "Estado Carabobo",
    links:"http://runrun.es/nacional/310140/muere-el-policarabobo-herido-en-manifestacion-del-15may.html" ,
    image: "images/photos/jorge-escandon.jpg"
  },
  {
    id: 53,
    name: "Edy Alejandro Terán Aguilar",
    description: "estudiante del quinto semestre de administración de recursos humanos en la Universidad Simón Rodríguez",
    age: 23,
    date_death: {
      day: 20,
      month: 05,
      year: 2017
    },
    coments: "Fue asesinado de un impacto de bala en el pecho disparado por un grupo de presuntos colectivos que abrieron fuego contra una protesta en el sector El Murachí en Valera.",
    place_death: "Estado Trujillo",
    links:"http://www.analitica.com/sucesos/victima-48-de-protestas-era-universitario-y-trabaja-en-mercado-para-costear-sus-estudios/" ,
    image: "images/photos/edy-teran.jpg"
  },
  {
    id: 54,
    name: "Yorman Alí Bervecia Cabeza",
    description: "Había culminado sus estudios de Bachillerato, participaba en las manifestaciones porque quería un mejor futuro.",
    age: 19,
    date_death: {
      day: 22,
      month: 05,
      year: 2017
    },
    coments: "Participaba en una manifestación en las adyacencias de la urbanización José Antonio Páez cuando recibió un disparo en el tórax. De inmediato, el joven fue trasladado al ambulatorio Los Pozones, donde ingresó sin signos vitales.",
    place_death: "Estado Barinas",
    links:"http://www.eluniversal.com/noticias/sucesos/mueren-dos-personas-durante-dia-protesta-barinas_653806" ,
    image: "images/photos/yorman-bervecia.jpg"
  },
  {
    id: 55,
    name: "Elvis Adonis Montilla Pérez ",
    description: "Estudiaba en la Universidad Francisco de Miranda de Coro.",
    age: 22,
    date_death: {
      day: 22,
      month: 05,
      year: 2017
    },
    coments: "se encontraba en las adyacencias de la urbanización Palma de Oro, cuando fue herido con un arma de fuego en el pecho. Familiares y testigos indican que un encapuchado habría disparado al joven.",
    place_death: "Estado Barinas",
    links:"http://www.talcualdigital.com/Nota/142943/confirman-tercer-muerto-por-las-protestas-en-el-estado-barinas" ,
    image: "images/photos/elvis-montilla.jpg"
  },
  {
    id: 56,
    name: "Alfredo José Briceño Carrizales",
    description: "Dejó un hijo de tres años",
    age: 25,
    date_death: {
      day: 22,
      month: 05,
      year: 2017
    },
    coments: " se encontraba durante una manifestación que se efectuaba frente a su domicilio en la calle Cedeño delestado Barinas, momento en el cual fue impactado  por un proyectil disparado por arma de fuego, causándole una herida en elintercostal izquierdo.",
    place_death: "Estado Barinas",
    links:"http://www.talcualdigital.com/Nota/142943/confirman-tercer-muerto-por-las-protestas-en-el-estado-barinas" ,
    image: "images/photos/no-photo.jpg"
  },
  {
    id: 57,
    name: "Miguel Ángel Bravo Ramírez",
    description: "Era obrero",
    age: 25,
    date_death: {
      day: 22,
      month: 05,
      year: 2017
    },
    coments: "Se encontraba durante una manifestación en la Plaza Bolívar de Socopó, parroquia Ticoporo, municipio Antonio José de Sucre del estado Barinas, cuando recibió varios impactos de bala. Falleció al ser trasladado de la clínica San José al Hospital Dr. Luis Razetti.",
    place_death: "Estado Barinas",
    links:"https://www.derechos.org.ve/web/wp-content/uploads/05-06-2017.pdf" ,
    image: "images/photos/miguel-bravo.jpg"
  },
  {
    id: 59,
    name: "Ynigo Jesús Leiva",
    description: "Dueño de un abasto en la calle Apure del Barrio San Andrés de El Valle.",
    age: 66,
    date_death: {
      day: 22,
      month: 05,
      year: 2017
    },
    coments: "Murió la noche del lunes 22 en El Valle durante la manifestación reprimida por efectivos de la GNB y PNB. Leiva, dueño de un abasto, murió producto de un impacto de proyectil que lo alcanzó cuando en el sector llegaron funcionarios de los cuerpos de seguridad en una tanqueta y ocurrió un tiroteo.",
    place_death: "Distrito Capital",
    links:"http://www.caraotadigital.net/sucesos/comerciante-asesinado-en-el-valle-habia-cerrado-su-negocio-cuando-fue-asesinado/" ,
    image: "images/photos/no-photo.jpg"
  },
  {
    id: 60,
    name: "Freiber Pérez Vielma",
    description: "",
    age: 21,
    date_death: {
      day: 23,
      month: 05,
      year: 2017
    },
    coments: "Falleció la mañana del 23 de mayo, luego de resultar herido por un disparo en la espalda la noche del lunes 22 durante una manifestación en el sector El Corozo, parroquia Manuel Palacio Fajardo de Barinas.",
    place_death: "Estado Barinas",
    links:"http://runrun.es/nacional/310496/muere-otro-joven-en-barinas-con-disparo-en-la-espalda.html" ,
    image: "images/photos/freiber-perez.jpg"
  },
  {
    id: 61,
    name: "Erick Antonio Molina Contreras",
    description: "Obrero",
    age: 35,
    date_death: {
      day: 23,
      month: 05,
      year: 2017
    },
    coments: "Falleció al recibir varios disparos por arma de fuego el  23 de mayo cuando protestaba en la urbanización Los Próceres, en el estado Barinas. Luego del suceso Molina fue trasladado al Hospital Doctor Luis Razetti, donde falleció.",
    place_death: "Estado Barinas",
    links:"http://runrun.es/nacional/310694/aumenta-a-7-numero-de-asesinados-durante-las-protestas-de-barinas.html" ,
    image: "images/photos/no-photo.jpg"
  },
  {
    id: 62,
    name: "Juan Antonio Sánchez Suárez",
    description: "",
    age: 21,
    date_death: {
      day: 23,
      month: 05,
      year: 2017
    },
    coments: "Se encontraba en la urbanización José Antonio Páez de Barinas, donde se llevaba a cabo una manifestación, cuando recibió dos disparos de arma de fuego a nivel de la región pectoral y otro en la región intercostal. ",
    place_death: "Estado Barinas",
    links:"http://runrun.es/nacional/310694/aumenta-a-7-numero-de-asesinados-durante-las-protestas-de-barinas.html" ,
    image: "images/photos/no-photo.jpg"
  },
  {
    id: 63,
    name: "Adrián José Duque Bravo",
    description: "Contador público",
    age: 24,
    date_death: {
      day: 24,
      month: 05,
      year: 2017
    },
    coments: "Duque se encontraba en una manifestación que se desarrollaba en las Torres del Saladillo, cuando recibió un impacto en la región abdominal izquierda, por lo que fue trasladado al Hospital Chiquinquirá, donde posteriormente falleció.",
    place_death: "Estado Zulia",
    links:"http://www.panorama.com.ve/sucesos/Murio-Adrian-Duque-en-manifestaciones-en-Torres-del-Saladillo-Maracaibo-20170524-0116.html" ,
    image: "images/photos/adrian-duque.jpg"
  },
  {
    id: 64,
    name: "Augusto Sergio Pugas Velásquez",
    description: "Estudiante de enfermeria",
    age: 22,
    date_death: {
      day: 24,
      month: 05,
      year: 2017
    },
    coments: "Murió tras resultar herido durante una manifestación en el decanato de la Universidad de Oriente en Ciudad Bolívar. Según testigos, efectivos de la Policía del Estado Bolívar",
    place_death: "Estado Bolívar",
    links:"http://www.talcualdigital.com/Nota/143033/murio-estudiante-augusto-puga-herido-de-bala-en-ciudad-bolivar" ,
    image: "images/photos/augusto-pugas.jpg"
  },
  {
    id: 65,
    name: "Manuel Sosa Ponte",
    description: "",
    age: 33,
    date_death: {
      day: 26,
      month: 05,
      year: 2017
    },
    coments: "La víctima recibió un impacto de bala en la región infraclavicular del tórax durante una manifestación que era reprimida por funcionarios de la GNB realizada este 25 de mayo en Valle Hondo, estado Lara. Sosa falleció este viernes 26 de mayo en horas de la madrugada.",
    place_death: "Estado Lara",
    links:"http://www.caraotadigital.net/carrusel/murio-joven-que-recibio-disparo-en-la-cabeza-durante-protestas-en-lara/" ,
    image: "images/photos/manuel-sosa.jpg"
  },
  {
    id: 66,
    name: "Danny José Subero ",
    description: "Teniente retirado de la Guardia Nacional Bolivariana",
    age: 34,
    date_death: {
      day: 27,
      month: 05,
      year: 2017
    },
    coments: "Murió luego de ser golpeado (linchado) por un grupo de personas en el sector Valle Hondo, en la parroquia Cabudare",
    place_death: "Estado Lara",
    links:"http://runrun.es/nacional/312104/imputaran-a-seis-personas-por-muerte-de-gnb-en-lara.html" ,
    image: "images/photos/dany-subero.jpg"
  },
  {
    id: 67,
    name: "Cesar David Pereira Villegas",
    description: "Estudiaba publicidad y mercadeo en el IUTIRLA, tambien era dirigente juvenil de Voluntad Popular",
    age: 21,
    date_death: {
      day: 27,
      month: 05,
      year: 2017
    },
    coments: "La víctima recibió el impacto de una metra durante una manifestación que se realizó en el sector Peñón del Faro de Lecherías, en el estado Anzoátegui, el pasado 27 de mayo. El dirigente juvenil de Voluntad Popular murió el 28 de mayo producto de sus heridas.",
    place_death: "Estado Anzoategui",
    links:"http://www.eluniversal.com/noticias/sucesos/fallecio-cesar-pereira-activista-herido-durante-protesta_654590" ,
    image: "images/photos/cesar-pereira.jpg"
  },
  {
    id: 68,
    name: "Nelson Antonio Moncada Gómez",
    description: "Era Juez de la Sala 1 de la Corte de Apelaciones del TSJ en el Circuito Judicial Penal del Área Metropolitana de Caracas",
    age: 37,
    date_death: {
      day: 28,
      month: 05,
      year: 2017
    },
    coments: "Asesinado la noche del miércoles en El Paraíso cuando fue interceptado por sujetos que se encontraban en una barricada, quienes lo hirieron cuando intentaba huir. Se maneja una hipótesis de sicariato.",
    place_death: "Distrito Capital",
    links:"http://runrun.es/nacional/311936/asesinan-en-el-paraiso-a-juez-que-participo-en-caso-de-bassil-da-costa.html" ,
    image: "images/photos/nelson-moncada.jpg"
  },
  {
    id: 69,
    name: "María Estefanía Rodríguez",
    description: "Trabajaba como camarera en un hotel",
    age: 46,
    date_death: {
      day: 01,
      month: 06,
      year: 2017
    },
    coments: "en horas de la tarde la víctima transitaba por el sector, e intentaba atravesar la protesta, cuando se formó un tiroteo y recibió un disparo en la región intercostal derecha. De inmediato, fue trasladada al Hospital Antonio María Pineda, donde ingresó sin signos vitales.",
    place_death: "Estado Lara",
    links:"http://www.elimpulso.com/featured/dama-trataba-pasar-una-protesta-murio-al-recibir-disparo-barquisimeto-01jun" ,
    image: "images/photos/maria-rodriguez.jpg"
  },
  {
    id: 70,
    name: "Luis Miguel Gutiérrez Molina",
    description: "Trabajaba como caletero descargando materiales de construcción",
    age: 20,
    date_death: {
      day: 02,
      month: 06,
      year: 2017
    },
    coments: "Resultó herido durante una manifestación el 17 de mayo en el municipio Tovar.",
    place_death: "Estado Mérida",
    links:"http://www.eluniversal.com/noticias/sucesos/luis-gutierrez-convirtio-asesinado-las-protestas_655462",
    image: "images/photos/no-photo.jpg"
  },
  {
    id: 71,
    name: "Yoiner Javier Peña Hernández",
    description: "Joven de 28 años de edad con discapacidad, que a pesar de su condición era un individuo activo",
    age: 28,
    date_death: {
      day: 03,
      month: 06,
      year: 2017
    },
    coments: "El hombre resultó herido por un arma de fuego durante una manifestación el pasado 11 de abril en la avenida Florencio Jiménez en Barquisimeto, estado Lara. Peña falleció la madrugada de este sábado 3 de junio producto de sus heridas. Se presume que el hombre fue atacado por colectivos.",
    place_death: "Estado Lara",
    links:"http://runrun.es/nacional/312215/fallece-yoiner-pena-joven-herido-en-protestas-de-abril-en-lara.html",
    image: "images/photos/yoiner-peña.jpg"
  },
  {
    id: 72,
    name: "Orlando Figuera",
    description: "Se dedicaba al oficio de cuidar y aparcar vehículos en un supermercado en Las Mercedes",
    age: 21,
    date_death: {
      day: 04,
      month: 06,
      year: 2017
    },
    coments: "la víctima falleció luego de ser incinerado y apuñalado durante una protesta en Altamira, Caracas, el pasado 20 de mayo. Figuera murió este domingo 4 de junio en horas de la madrugada producto de sus heridas. Hasta el momento se desconocen detalles del victimario.",
    place_death: "Estado Miranda",
    links:"http://www.bbc.com/mundo/noticias-america-latina-40007635",
    image: "images/photos/orlando-figuera.jpg"
  },
  {
    id: 73,
    name: "Edwar José Paredes",
    description: "Empleado del CDI",
    age: 25,
    date_death: {
      day: 06,
      month: 06,
      year: 2017
    },
    coments: "El hombre recibió un disparo en el tórax durante una protesta en la ciudad Ejido del municipio Campo Elías en el estado Mérida. El hecho ocurrió este 6 de junio. Paredes fue trasladado al Hospital Universitario de los Andes (HULA) y falleció luego de ser operado.",
    place_death: "Estado Mérida",
    links:"https://elpitazo.com/ultimas-noticias/confirman-muerte-joven-merida-tras-recibir-impacto-bala/",
    image: "images/photos/no-photo.jpg"
  },
  {
    id: 74,
    name: "Neomar Lander Armas",
    description: "“Yo tengo 17 años, y no estoy estudiando porque me quiero ir del país a buscar un mejor país, pero sinceramente no me quiero ir de Venezuela, este es mi país yo nací aquí y estoy luchando por él”, declaró en una oportunidad Neomar en un vídeo que también ha circulado por las redes sociales",
    age: 17,
    date_death: {
      day: 07,
      month: 06,
      year: 2017
    },
    coments: "Lander se encontraba en Las Mercedes protestando en compañía de su madre y el grupo de manifestantes de la “La Resistencia”. Después de las 3:00 pm, el joven se fue con varias personas a la avenida Libertador de Chacao. Allí, él y los “escuderos” hacían frente a funcionarios de PNB. Al parecer Lo mató el impacto de un objeto contundente o proyectil disparado a corta distancia por uno de los policías ",
    place_death: "Disrito Capital",
    links:"http://runrun.es/rr-es-plus/313986/infografia-y-video-a-neomar-lander-lo-habria-matado-una-bomba-disparada-por-la-pnb.html",
    image: "images/photos/neomar-lander.jpg"
  },
  {
    id: 75,
    name: "Sócrates Salgado",
    description: "Había sido operado del corazón hace 6 meses. Vivía en El Teleférico Macuto",
    age: 49,
    date_death: {
      day: 12,
      month: 06,
      year: 2017
    },
    coments: "Murió a consecuencia de gases lacrimógenos durante una protesta en La Guaira, estado Vargas.",
    place_death: "Estado Vargas",
    links:"http://elestimulo.com/blog/socrates-salgado-murio-por-las-lacrimogenas-lanzadas-en-protesta-por-hambre/",
    image: "images/photos/socrates-salgado.jpg"
  },
  {
    id: 76,
    name: "Douglas Acevedo Sánchez",
    description: "Supervisor Jefe de la Policía del estado Mérida",
    age: 41,
    date_death: {
      day: 13,
      month: 06,
      year: 2017
    },
    coments: "Junto con un grupo de funcionarios de la policía, se disponían a restablecer el orden público en una manifestación suscitada en la avenida Urdaneta, cuando se presentó una situación irregular tras la cual resultó herido Acevedo de un impacto de bala en la región clavicular izquierda, provocada por un arma de fuego. Otras tres personas resultaron heridas igualmente.",
    place_death: "Estado Mérida",
    links:"http://runrun.es/nacional/313490/muere-supervisor-jefe-de-policia-estatal-durante-manifestacion-en-merida.html",
    image: "images/photos/douglas-acevedo.jpg"
  },
  {
    id: 77,
    name: "José Amador Lorenzo González",
    description: "",
    age: 50,
    date_death: {
      day: 14,
      month: 06,
      year: 2017
    },
    coments: "Falleció luego de un choque en motocicleta, al evadir una barricada en la Autopista Prados del Este",
    place_death: "Estado Miranda",
    links:"http://efectococuyo.com/principales/dos-motorizados-mueren-al-colisionar-en-autopista-de-caracas-durante-protesta",
    image: "images/photos/no-photo.jpg"
  },
  {
    id: 78,
    name: "Luis Alberto Machado Valdez",
    description: "",
    age: 27,
    date_death: {
      day: 14,
      month: 06,
      year: 2017
    },
    coments: "Falleció luego de un choque en motocicleta, al evadir una barricada en la Autopista Prados del Este",
    place_death: "Estado Miranda",
    links:"http://efectococuyo.com/principales/dos-motorizados-mueren-al-colisionar-en-autopista-de-caracas-durante-protesta",
    image: "images/photos/no-photo.jpg"
  },
  {
    id: 79,
    name: "Luis Enrique Vera Sulbarán",
    description: "Estudiante de administración",
    age: 20,
    date_death: {
      day: 15,
      month: 06,
      year: 2017
    },
    coments: "Murió arrollado durante una manifestación en frente de la Universidad Rafael Belloso Chacín.",
    place_death: "Estado Zulia",
    links:"http://runrun.es/nacional/313747/estudiante-murio-tras-ser-arrollado-por-camion-en-el-marco-de-una-protesta-en-maracaibo.html",
    image: "images/photos/luis-vera.jpg"
  },
  {
    id: 80,
    name: "José Gregorio Pérez Pérez",
    description: "Estudiante universitario",
    age: 21,
    date_death: {
      day: 15,
      month: 06,
      year: 2017
    },
    coments: "La víctima se encontraba en una manifestación que se llevaba a cabo en el sector antes indicado, cuando se suscitó una situación irregular en la que Pérez Caicedo recibió un disparo en el rostro.",
    place_death: "Estado Táchira",
    links:"http://runrun.es/nacional/313806/asesinan-a-estudiante-de-disparo-en-el-rostro-cuando-protestaba-en-tachira.html",
    image: "images/photos/no-photo.jpg"
  },
  {
    id: 81,
    name: "Nelson Daniel Arevalo Avendaño",
    description: "Era conocido como Dominic",
    age: 21,
    date_death: {
      day: 16,
      month: 06,
      year: 2017
    },
    coments: "Es la Décima víctima en Lara caído durante manifestaciones.",
    place_death: "Estado Lara",
    links:"http://www.elimpulso.com/featured/muere-joven-herido-enfrentamiento-las-trinitarias-16jun",
    image: "images/photos/nelson-arevalo.jpg"
  },
  {
    id: 82,
    name: "Fabian Urbina",
    description: "Estudiaba tercer semestre de Mercadeo y Publicidad.",
    age: 17,
    date_death: {
      day: 19,
      month: 06,
      year: 2017
    },
    coments: "Resultó herido mientras funcionarios de la GNB y PNB reprimían la movilización opositora que tenía como destino el CNE en el Distribuidor Altamira. Recibió un impacto de bala en el tórax derecho, cerca de la orquilla esternal. Murió en la Clínica Ávila.",
    place_death: "Estado Miranda",
    links:"http://www.el-nacional.com/noticias/protestas/fabian-urbina-tambien-fue-herido-dias-atras-durante-represion-policial_188565",
    image: "images/photos/fabian-urbina.jpg"
  },
  {
    id: 83,
    name: "David José Vallenilla Luis",
    description: "TSU en enfermería",
    age: 22,
    date_death: {
      day: 22,
      month: 06,
      year: 2017
    },
    coments: "Se encontraba manifestando en La Carlota cuando un efectivo de la Policía Aérea que resguardaba la base militar le disparó a quemarropa.",
    place_death: "Estado Miranda",
    links:"http://www.caraotadigital.net/nacionales/gnb-disparo-quemarropa-contra-david-vallenilla-durante-represion-fotos-y-videos/",
    image: "images/photos/david-vallenilla.jpg"
  },
  {
    id: 84,
    name: "Lendy Guanipa Millán",
    description: "Lendy y su esposa vivían en situación de calle, debajo de un puente, a pocos metros de la redoma de Petare.",
    age: 27,
    date_death: {
      day: 23,
      month: 06,
      year: 2017
    },
    coments: "Mientras buscaba algo de comida entre los promontorios de desechos del Puente 5 de Julio, en Petare, Lendy José Guanipa recibió un tiro en un brazo que lo atravesó por un costado",
    place_death: "Estado Miranda",
    links:"http://runrun.es/nacional/315732/monitordevictimas-mataron-a-hombre-que-buscaba-comida-en-la-basura-cuando-reprimian-manifestacion-en-petare.html",
    image: "images/photos/no-photo.jpg"
  },
  {
    id: 85,
    name: "Ronny Alberto Parra Araujo",
    description: "Sargento primero de la Guardia Nacional Bolivariana",
    age: 27,
    date_death: {
      day: 27,
      month: 06,
      year: 2017
    },
    coments: "El militar resultó herido en horas de la madrugada mientras intentaba controlar una situación irregular suscitada en el sector El Castaño.",
    place_death: "Estado Aragua",
    links:"http://runrun.es/nacional/315245/fiscalia-investiga-muerte-de-gnb-ocurrida-en-maracay-este-martes.html",
    image: "images/photos/ronny-parra.jpg"
  },
  {
    id: 86,
    name: "Jhonatan José Zavatti Serrano",
    description: "",
    age: 25,
    date_death: {
      day: 27,
      month: 06,
      year: 2017
    },
    coments: "Resultó herido con arma de fuego en la cabeza el lunes 26 de junio cuando caminaba por la calle principal del barrio 5 de Julio de la parroquia Petare, en el municipio Sucre del estado Miranda, donde se desarrollaba una manifestación en horas de la noche.",
    place_death: "Estado Miranda",
    links:"http://www.eluniversal.com/noticias/sucesos/murio-joven-que-recibio-tiro-cabeza-durante-protesta-petare_659049",
    image: "images/photos/no-photo.jpg"
  },
  {
    id: 87,
    name: "Javier Alexander Toro Trejo",
    description: "Era Comerciante",
    age: 34,
    date_death: {
      day: 27,
      month: 06,
      year: 2017
    },
    coments: "durante la noche del 27 de junio Toro se encontraba en una manifestación con un grupo de personas que pretendía ingresar indebidamente a locales comerciales del sector La Pica del municipio Libertador de Aragua. Oficiales de la policía regional intentaban dispersarlos con el uso de bombas lacrimógenas cuando sujetos desconocidos dispararon al grupo e hirieron al hombre.",
    place_death: "Estado Aragua",
    links:"https://www.elperiodiquito.com/noticias/67452/Asesinaron-a-vendedor-de-donas",
    image: "images/photos/no-photo.jpg"
  },
  {
    id: 88,
    name: "Isael Jesús Macadán Aquino",
    description: "Estudiante",
    age: 18,
    date_death: {
      day: 28,
      month: 06,
      year: 2017
    },
    coments: "Murió luego de recibir dos impactos de bala, uno en el brazo derecho y otro en la rodilla, mientras se llevaban a cabo protestas y saqueo.",
    place_death: "Estado Anzoategui",
    links:"http://www.elimpulso.com/noticias/nacionales/confirman-muerte-de-isael-jesus-macadan-durante-disturbios-en-barcelona-28jun",
    image: "images/photos/isael-macadan.jpg"
  },
  {
    id: 89,
    name: "Robeto Enrique Durán Ramírez",
    description: "Era vendedor. Fue camarógrafo en el canal Somos TV y dejó dos hijos.",
    age: 26,
    date_death: {
      day: 28,
      month: 06,
      year: 2017
    },
    coments: "Participaba en un “plantón” en la urbanización Terepaima, urbanización Sucre de Barquisimeto, estado Lara, cuando cayó malherido por un proyectil en la cabeza.",
    place_death: "Estado Lara",
    links:"http://runrun.es/nacional/315492/asesinan-de-dos-disparos-en-la-cabeza-a-joven-de-20-anos-en-barquisimeto.html",
    image: "images/photos/roberto-duran.jpg"
  },
  {
    id: 90,
    name: "Luiyin Alfonso Paz Borjas",
    description: "Paz deja una hija de tres años y vivía en el barrio La Chinita.",
    age: 20,
    date_death: {
      day: 28,
      month: 06,
      year: 2017
    },
    coments: "Fue arrollado por un camión cisterna durante una manifestación.",
    place_death: "Estado Zulia",
    links:"http://runrun.es/nacional/venezuela-2/315533/muere-manifestante-tras-ser-arrollado-por-un-camion-en-zulia.html",
    image: "images/photos/no-photo.jpg"
  }

];
