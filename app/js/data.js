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
    coments: "se encontraba en la urbanización José Antonio Páez de Barinas, donde se llevaba a cabo una manifestación, cuando recibió dos disparos de arma de fuego a nivel de la región pectoral y otro en la región intercostal. ",
    place_death: "Estado Barinas",
    links:"http://runrun.es/nacional/310694/aumenta-a-7-numero-de-asesinados-durante-las-protestas-de-barinas.html" ,
    image: "images/photos/no-photo.jpg"
  }

];
