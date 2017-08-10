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
    comments: "Jairo cayó herido aproximadamente a las 9:30 pm. Estaba cercano a la entrada del centro comercial de la zona, justo al lado de la panadería, ahí lo alcanzó la bala. Sus compañeros de protesta lo trasladaron de inmediato al Centro Médico Docente Los Altos, contiguo al lugar de la protesta y a pocos metros donde se desplomó el joven universitario.",
    links: "http://www.eluniversal.com/noticias/sucesos/padre-jairo-ortiz-hijo-era-totalmente-pacifico_647851",
    image: "images/photos/jairo-ortiz.jpg"
  },
  {
    id: 2,
    name: "Daniel queliz Araca",
    description: "Estudiante de derecho de la Universidad Arturo Michelena ",
    age: 20,
    date_death: {
      day: 10,
      month: 04,
      year: 2017
    },
    place_death: "Estado Carabobo",
    comments: "Durante la situación, el joven resultó herido en el cuello por un impacto de bala. Posteriormente, la víctima fue trasladada a la Ciudad Hospitalaria Dr. Enrique Tejera, donde ingresó sin signos vitales.",
    links: "http://www.eluniversal.com/noticias/sucesos/murio-joven-daniel-queliz-mientras-protestaba-valencia_647914",
    image: "images/photos/daniel-queliz.jpg"
  },
  {
    id: 3,
    name: "Miguel colmenares",
    description: "",
    age: 36,
    date_death: {
      day: 11,
      month: 04,
      year: 2017
    },
    place_death: "Estado Lara",
    comments: "Recibió 11 disparos por colectivos, señalaron medios de comunicación. Los hechos ocurrieron en la calle 59 del oeste de Barquisimeto, donde se realizaban manifestaciones violentas y trancas de calles.",
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
    comments: "Murió luego de ser herido de bala por colectivos en la urbanización Yucatán en el norte de Barquisimeto. Según informaron sus familiares a la web El Pitazo, el joven salió a comprar café y en ese instante se presume que llegaron los colectivos a disparar. Su asesinato ocurrió la misma noche en que falleció Colmenares.",
    links:"http://www.caraotadigital.net/sucesos/versiones-encontradas-sobre-muerte-de-brayan-principal-en-barquisimeto/" ,
    image: "images/photos/brayan-principal.jpg"
  },
  {
    id: 5,
    name: "Gruseny Antonio Canelón Scirpatempo",
    description: "Deportista y se dedicaba a la venta de repuestos de vehículos. Era conocido como Tony por sus amigos y allegados.",
    age: 32,
    date_death: {
      day: 14,
      month: 04,
      year: 2017
    },
    place_death: "Estado Lara",
    comments: "Fue herido con perdigones a quemarropa en el pecho, el pasado 11 de abril, durante una manifestación en el distribuidor Bellas Artes de Cabudare, estado Lara. Se presume que Canelón fue atacado por funcionarios de la Guardia Nacional Bolivariana (GNB). El hombre falleció el 14 de abril.",
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
    comments: "Falleció por herida de arma de fuego en la región cefálica durante una manifestación en la plaza La Estrella, San Bernardino, Distrito Capital; cuando un grupo de motorizados arrojó bombas lacrimógenas a los presentes y accionaron armas de fuego, resultando herido, fue trasladado hasta el Hospital de Clínicas Caracas donde falleció.",
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
    comments: "La joven recibió un disparo que le perforó los pulmones cuando se encontraba en las inmediaciones de la plaza Las Palomas del barrio San Carlos en el estado Táchira.",
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
    comments: "cuando se encontraba controlando una manifestación en San Antonio de los Altos, estado Miranda. San Clemente resultó herido de un disparo en el tórax cuando un hombre, que aún no ha sido identificado, disparó contra los efectivos de la Fuerza Armada.",
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
    comments: "murió el jueves en la noche en el Hospital de El Llanito, pasadas las 9:00 pm, debido a una herida por un tiro de fusil en el abdomen cuando atravesaba el puente del barrio 5 de Julio de Petare, media hora en una protesta de vecinos.",
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
    comments: "Falleció producto de una electrocución por el hecho acontecido en la panadería “La Mayer del Pan”, ubicada en la calle San Andrés Cajigal en El Valle, de acuerdo al Ministerio Público.",
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
    comments: "Falleció producto de una electrocución por el hecho acontecido en la panadería “La Mayer del Pan”, ubicada en la calle San Andrés Cajigal en El Valle, de acuerdo al Ministerio Público.",
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
    comments: "Falleció producto de una electrocución por el hecho acontecido en la panadería “La Mayer del Pan”, ubicada en la calle San Andrés Cajigal en El Valle, de acuerdo al Ministerio Público.",
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
    comments: "Falleció producto de una electrocución por el hecho acontecido en la panadería “La Mayer del Pan”, ubicada en la calle San Andrés Cajigal en El Valle, de acuerdo al Ministerio Público.",
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
    comments: "Falleció producto de una electrocución por el hecho acontecido en la panadería “La Mayer del Pan”, ubicada en la calle San Andrés Cajigal en El Valle, de acuerdo al Ministerio Público.",
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
    comments: "Falleció producto de una electrocución por el hecho acontecido en la panadería “La Mayer del Pan”, ubicada en la calle San Andrés Cajigal en El Valle, de acuerdo al Ministerio Público.",
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
    comments: "Falleció producto de una electrocución por el hecho acontecido en la panadería “La Mayer del Pan”, ubicada en la calle San Andrés Cajigal en El Valle, de acuerdo al Ministerio Público.",
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
    comments: "Falleció producto de una electrocución por el hecho acontecido en la panadería “La Mayer del Pan”, ubicada en la calle San Andrés Cajigal en El Valle, de acuerdo al Ministerio Público.",
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
    comments: "Recibió un disparo cuando se encontraba en una manifestación en la calle Cajigal de El Valle. ",
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
    comments: "Murió por asfixia producto del gas lacrimógeno que se usó para controlar una manifestación en la parroquia El Valle",
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
    comments: "Recibio un disparo al defender su negocio",
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
    comments: "Herida en la cabeza con una botella de agua congelada el pasado 19 de abril",
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
    comments: "Grupo de presuntos colectivos atacaron a los manifestantes que se encontraba en Barinitas, el hombre resultó lesionado en la región pectoral izquierda. No participaba en el planton",
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
    comments: "Murió tras recibir un disparo en el tórax durante las manifestaciones registradas en las adyacencias del Viaducto Campo Elías.",
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
    comments: "recibió dos tiros en sitio donde se efectuaba una protesta en San Cristobal",
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
    comments: "Se encontraba en una manifestación en la Avenida Lisandro Alvarado, cuando recibió un disparo que le ocasionó un traumatismo craneoencefálico",
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
    comments: "Murió tras recibir un disparo de arma de fuego en la cabeza el pasado 24 de abril, cuando se encontraba reunido con un grupo de personas en viaducto Campo Elías, en la capital del estado Mérida. Fue herido por presuntos grupos armados. Falleció el 25 de abril.",
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
    comments: "Fue gravemente herido durante las protestas del último lunes, cuando recibió varios disparos en la ciudad de Valencia",
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
    comments: "Murió luego de recibir el impacto de una bomba lacrimógena en el pectoral izquierdo mientras participaba en una manifestación en el sector de Altamira.",
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
    comments: "Herido por arma de fuego cuando se encontraba cerca de una manifestación en Barquisimeto. Testigos del hecho responsabilizaron a funcionarios de la GNB de su muerte.",
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
    comments: "Asesinado por arma de fuego en medio de protestas en petare. no participaba en la protesta",
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
    comments: "Se encontraba en las inmediaciones del supermercado Villa Florida, sector La Guacamaya de Valencia, donde habrían intentado ingresar de manera irregular. En ese momento, se escucharon varios disparos provenientes de la parte superior de dicho local, efectuados presuntamente por el dueño del local.",
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
    comments: "Cuando conducía por la autopista Prados del Este, un vehículo automotor que intentó evadir una manifestación, a la altura del distribuidor Santa Fe, lo arroyó causándole la muerte.",
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
    comments: "Murió en un accidente de tránsito luego de chocar contra una barricada ubicada en el km 174 de la autopista Valencia- Puerto Cabello, a la altura del distribuidor Giradot.",
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
    comments: "Murió en un accidente de tránsito luego de chocar contra una barricada ubicada en el km 174 de la autopista Valencia- Puerto Cabello, a la altura del distribuidor Giradot.",
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
    comments: "Fue asesinado en el barrio Pedro Herrera. Valencia, estado Carabobo. Cuando estaba observando un saqueo. Víctima no reconocida por el Ministerio Público.",
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
    comments: "Sufrió un trauma penetrante en el cuello sin salida que produjo shock y paro cardiorrespiratorio",
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
    comments: "Según información preliminar, el hecho ocurrió en horas de la tarde del miércoles 3 de mayo, cuando un grupo de personas se encontraba manifestando en la urbanización La Pradera del municipio San Joaquín, lugar en el que el funcionario resultó herido luego de recibir un disparo.",
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
    comments: "ecibió un disparo en el rostro durante una protesta, proveniente del arma de un PoliCarabobo, cuando se encontraba cerca de una turba en el sector Pinzón Herrera de Central Tacarigua, municipio Carlos Arvelo del estado Carabobo. Su muerte no ha sido reconocida por el Ministerio Público.",
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
    comments: "Fue herido el 4 de mayo durante manifestación en Carabobo",
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
    comments: "Recibió un disparo en el abdomen el pasado 3 de mayo durante una protesta en el sector Pomona, ubicado al sur de Maracaibo en el estado Zulia. Medina falleció el 5 de mayo en la Unidad de Cuidados Intensivos del Hospital General del Sur. Testigos afirman que funcionarios de la Policía Nacional se encontraban reprimiendo la manifestación cuando el joven fue atacado.",
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
    comments: "fue una de las personas heridas durante las manifestaciones del lunes 8 de mayo en Mérida, recibió una bala en el cráneo por la cual falleció el 10 de mayo en el Hospital Universitario de Los Andes.",
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
    comments: "Fue asesinado durante una manifestación en Las Mercedes, municipio Baruta del estado Miranda.",
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
    comments: "El joven tachirense de 18 años manifestaba junto a un grupo de personas en Palmira cuando recibió un impacto de bala en el tórax disparado por un funcionario de la PNB. Fue ingresado sin signos vitales a un centro asistencial de la localidad.",
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
    comments: "Recibió un impacto de bala en el pecho el pasado 15 de mayo cuando se encontraba cerca de una manifestación en Capacho, estado Táchira. El Ministerio Público imputó a un policía de Táchira, identificado como Luis Oviedo, de su muerte.",
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
    comments: "el adolescente fue asesinado producto de un disparo de arma de fuego en la cara mientras se encontraba en el “Gran Plantón” realizado el 16 de mayo en el municipio Pedraza.",
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
    comments: "De acuerdo con la información preliminar, aproximadamente a las 4:00 pm el joven de 15 años realizaba compras en un abasto ubicado en el referido sector, cerca de donde se realizaba una manifestación, cuando recibió un disparo a nivel umbilical.",
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
    comments: "Recibió un disparo en el tórax con un arma de fuego cuando se encontraba manifestando el pasado 16 de mayo en la avenida Perimetral de San Antonio de los Altos. Testigos aseguraron que un funcionario de la GNB hirió a Arellano cuando se encontraba reprimiendo la manifestación. ",
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
    comments: "El hombre falleció este 17 de mayo producto de un disparo en el cuello mientras había un enfrentamiento entre manifestantes y funcionarios de las Fuerzas Armadas en el sector Tucapé, en el municipio Cárdenas del estado Táchira. La víctima había salido para comprar pañales para su hijo. El Ministerio Público imputó a tres GNB por el asesinato.",
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
    comments: "Moreno fue arrollado cuando se encontraba auxiliando a varios manifestantes afectados por los gases lacrimógenos. El responsable aún no ha sido identificado. ",
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
    comments: "Falecio en horas luego de recibir un disparo en la cabeza por colectivos armados en Córdoba, estado Táchira.",
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
    comments: "Recibió un impacto de bala en la cabeza durante una manifestación realizada el pasado 15 de mayo en la urbanización Palma Real de municipio Naguanagua. El hombre falleció este viernes 19 de mayo.",
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
    comments: "Fue asesinado de un impacto de bala en el pecho disparado por un grupo de presuntos colectivos que abrieron fuego contra una protesta en el sector El Murachí en Valera.",
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
    comments: "Participaba en una manifestación en las adyacencias de la urbanización José Antonio Páez cuando recibió un disparo en el tórax. De inmediato, el joven fue trasladado al ambulatorio Los Pozones, donde ingresó sin signos vitales.",
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
    comments: "se encontraba en las adyacencias de la urbanización Palma de Oro, cuando fue herido con un arma de fuego en el pecho. Familiares y testigos indican que un encapuchado habría disparado al joven.",
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
    comments: " se encontraba durante una manifestación que se efectuaba frente a su domicilio en la calle Cedeño delestado Barinas, momento en el cual fue impactado  por un proyectil disparado por arma de fuego, causándole una herida en elintercostal izquierdo.",
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
    comments: "Se encontraba durante una manifestación en la Plaza Bolívar de Socopó, parroquia Ticoporo, municipio Antonio José de Sucre del estado Barinas, cuando recibió varios impactos de bala. Falleció al ser trasladado de la clínica San José al Hospital Dr. Luis Razetti.",
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
    comments: "Murió la noche del lunes 22 en El Valle durante la manifestación reprimida por efectivos de la GNB y PNB. Leiva, dueño de un abasto, murió producto de un impacto de proyectil que lo alcanzó cuando en el sector llegaron funcionarios de los cuerpos de seguridad en una tanqueta y ocurrió un tiroteo.",
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
    comments: "Falleció la mañana del 23 de mayo, luego de resultar herido por un disparo en la espalda la noche del lunes 22 durante una manifestación en el sector El Corozo, parroquia Manuel Palacio Fajardo de Barinas.",
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
    comments: "Falleció al recibir varios disparos por arma de fuego el  23 de mayo cuando protestaba en la urbanización Los Próceres, en el estado Barinas. Luego del suceso Molina fue trasladado al Hospital Doctor Luis Razetti, donde falleció.",
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
    comments: "Se encontraba en la urbanización José Antonio Páez de Barinas, donde se llevaba a cabo una manifestación, cuando recibió dos disparos de arma de fuego a nivel de la región pectoral y otro en la región intercostal. ",
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
    comments: "Duque se encontraba en una manifestación que se desarrollaba en las Torres del Saladillo, cuando recibió un impacto en la región abdominal izquierda, por lo que fue trasladado al Hospital Chiquinquirá, donde posteriormente falleció.",
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
    comments: "Murió tras resultar herido durante una manifestación en el decanato de la Universidad de Oriente en Ciudad Bolívar. Según testigos, efectivos de la Policía del Estado Bolívar",
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
    comments: "La víctima recibió un impacto de bala en la región infraclavicular del tórax durante una manifestación que era reprimida por funcionarios de la GNB realizada este 25 de mayo en Valle Hondo, estado Lara. Sosa falleció este viernes 26 de mayo en horas de la madrugada.",
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
    comments: "Murió luego de ser golpeado (linchado) por un grupo de personas en el sector Valle Hondo, en la parroquia Cabudare",
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
    comments: "La víctima recibió el impacto de una metra durante una manifestación que se realizó en el sector Peñón del Faro de Lecherías, en el estado Anzoátegui, el pasado 27 de mayo. El dirigente juvenil de Voluntad Popular murió el 28 de mayo producto de sus heridas.",
    place_death: "Estado Anzoátegui",
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
    comments: "Asesinado la noche del miércoles en El Paraíso cuando fue interceptado por sujetos que se encontraban en una barricada, quienes lo hirieron cuando intentaba huir. Se maneja una hipótesis de sicariato.",
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
    comments: "en horas de la tarde la víctima transitaba por el sector, e intentaba atravesar la protesta, cuando se formó un tiroteo y recibió un disparo en la región intercostal derecha. De inmediato, fue trasladada al Hospital Antonio María Pineda, donde ingresó sin signos vitales.",
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
    comments: "Resultó herido durante una manifestación el 17 de mayo en el municipio Tovar.",
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
    comments: "El hombre resultó herido por un arma de fuego durante una manifestación el pasado 11 de abril en la avenida Florencio Jiménez en Barquisimeto, estado Lara. Peña falleció la madrugada de este sábado 3 de junio producto de sus heridas. Se presume que el hombre fue atacado por colectivos.",
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
    comments: "la víctima falleció luego de ser incinerado y apuñalado durante una protesta en Altamira, Caracas, el pasado 20 de mayo. Figuera murió este domingo 4 de junio en horas de la madrugada producto de sus heridas. Hasta el momento se desconocen detalles del victimario.",
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
    comments: "El hombre recibió un disparo en el tórax durante una protesta en la ciudad Ejido del municipio Campo Elías en el estado Mérida. El hecho ocurrió este 6 de junio. Paredes fue trasladado al Hospital Universitario de los Andes (HULA) y falleció luego de ser operado.",
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
    comments: "Lander se encontraba en Las Mercedes protestando en compañía de su madre y el grupo de manifestantes de la “La Resistencia”. Después de las 3:00 pm, el joven se fue con varias personas a la avenida Libertador de Chacao. Allí, él y los “escuderos” hacían frente a funcionarios de PNB. Al parecer Lo mató el impacto de un objeto contundente o proyectil disparado a corta distancia por uno de los policías ",
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
    comments: "Murió a consecuencia de gases lacrimógenos durante una protesta en La Guaira, estado Vargas.",
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
    comments: "Junto con un grupo de funcionarios de la policía, se disponían a restablecer el orden público en una manifestación suscitada en la avenida Urdaneta, cuando se presentó una situación irregular tras la cual resultó herido Acevedo de un impacto de bala en la región clavicular izquierda, provocada por un arma de fuego. Otras tres personas resultaron heridas igualmente.",
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
    comments: "Falleció luego de un choque en motocicleta, al evadir una barricada en la Autopista Prados del Este",
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
    comments: "Falleció luego de un choque en motocicleta, al evadir una barricada en la Autopista Prados del Este",
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
    comments: "Murió arrollado durante una manifestación en frente de la Universidad Rafael Belloso Chacín.",
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
    comments: "La víctima se encontraba en una manifestación que se llevaba a cabo en el sector antes indicado, cuando se suscitó una situación irregular en la que Pérez Caicedo recibió un disparo en el rostro.",
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
    comments: "Es la Décima víctima en Lara caído durante manifestaciones.",
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
    comments: "Resultó herido mientras funcionarios de la GNB y PNB reprimían la movilización opositora que tenía como destino el CNE en el Distribuidor Altamira. Recibió un impacto de bala en el tórax derecho, cerca de la orquilla esternal. Murió en la Clínica Ávila.",
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
    comments: "Se encontraba manifestando en La Carlota cuando un efectivo de la Policía Aérea que resguardaba la base militar le disparó a quemarropa.",
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
    comments: "Mientras buscaba algo de comida entre los promontorios de desechos del Puente 5 de Julio, en Petare, Lendy José Guanipa recibió un tiro en un brazo que lo atravesó por un costado",
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
    comments: "El militar resultó herido en horas de la madrugada mientras intentaba controlar una situación irregular suscitada en el sector El Castaño.",
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
    comments: "Resultó herido con arma de fuego en la cabeza el lunes 26 de junio cuando caminaba por la calle principal del barrio 5 de Julio de la parroquia Petare, en el municipio Sucre del estado Miranda, donde se desarrollaba una manifestación en horas de la noche.",
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
    comments: "durante la noche del 27 de junio Toro se encontraba en una manifestación con un grupo de personas que pretendía ingresar indebidamente a locales comerciales del sector La Pica del municipio Libertador de Aragua. Oficiales de la policía regional intentaban dispersarlos con el uso de bombas lacrimógenas cuando sujetos desconocidos dispararon al grupo e hirieron al hombre.",
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
    comments: "Murió luego de recibir dos impactos de bala, uno en el brazo derecho y otro en la rodilla, mientras se llevaban a cabo protestas y saqueo.",
    place_death: "Estado Anzoátegui",
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
    comments: "Participaba en un “plantón” en la urbanización Terepaima, urbanización Sucre de Barquisimeto, estado Lara, cuando cayó malherido por un proyectil en la cabeza.",
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
    comments: "Fue arrollado por un camión cisterna durante una manifestación.",
    place_death: "Estado Zulia",
    links:"http://runrun.es/nacional/venezuela-2/315533/muere-manifestante-tras-ser-arrollado-por-un-camion-en-zulia.html",
    image: "images/photos/no-photo.jpg"
  },
  {
    id: 91,
    name: "Víctor Manuel Betancourt González",
    description: "Residía en el sector Sabater,",
    age: 18,
    date_death: {
      day: 28,
      month: 06,
      year: 2017
    },
    comments: "Falleció luego de ser arrollado por vehículo modelo Yaris mientras en los alrededores se realizaba una protesta denominada “trancazo nacional”",
    place_death: "Estado Sucre",
    links:"https://elpitazo.com/regiones/audio-murio-joven-que-fue-arrollado-durante-trancazo-en-san-miguel-de-cumana/",
    image: "images/photos/no-photo.jpg"
  },
  {
    id: 92,
    name: "Alexander Rafael Sanoja Sánchez",
    description: "Era técnico en refrigeración en la clínica Falcón.",
    age: 36,
    date_death: {
      day: 28,
      month: 06,
      year: 2017
    },
    comments: "Se trasladaba como patrullero en una moto cerca de donde se desarrollaba una manifestación en la parroquia Cristo de Aranza de Maracaibo, edo. Zulia. Un camión que intentaba evitar las barricadas dio un giro prohibido y colisionó con la moto, hiriendo al piloto y al parrillero. Sanoja sufrió quemaduras y traumatismo craneoencefálico, razón por la cual falleció",
    place_death: "Estado Zulia",
    links:"http://noticiaaldia.com/2017/06/la-triste-historia-de-alexander-sanoja-desesperado-por-llegar-a-su-casa-murio-quemado-durante-guarimba-en-sabaneta/",
    image: "images/photos/alexander-sanoja.jpg"
  },
  {
    id: 93,
    name: "Alfredo José Figuera Gutiérrez",
    description: "Egresaría de sexto año y se graduaría como técnico medio de informática",
    age: 19,
    date_death: {
      day: 29,
      month: 06,
      year: 2017
    },
    comments: "Grupos de civiles armados atacaron a tiros a los jóvenes quienes participaban en el trancazo realizado el pasado lunes 26 de junio dejando heridos a otros cuatro jóvenes.",
    place_death: "Estado Aragua",
    links:"http://runrun.es/nacional/315641/fallecio-jose-figuera-herido-de-un-tiro-en-la-cabeza-durante-protesta-en-maracay.html",
    image: "images/photos/alfredo-figuera.jpg"
  },
  {
    id: 94,
    name: "Eduardo José Márquez Albarrán",
    description: "Márquez estaba internado en tras haber sido herido el pasado 13 de junio durante una protesta en el sector Pie del Llano.",
    age: 20,
    date_death: {
      day: 30,
      month: 06,
      year: 2017
    },
    comments: "Luego de pasar 17 días internado en el Hospital Instituto Autónomo de la Universidad de Los Andes (Iaula) por un impacto de arma de fuego en el abdomen durante una manifestación en sector Pie de Llano",
    place_death: "Estado Mérida",
    links:"http://runrun.es/nacional/venezuela-2/315716/murio-manifestante-herido-con-arma-de-fuego-en-merida.html",
    image: "images/photos/eduardo-marquez.jpg"
  },
  {
    id: 94,
    name: "Rubén Alexander Morillo Pereira",
    description: "Era conocido como Bube",
    age: 33,
    date_death: {
      day: 30,
      month: 06,
      year: 2017
    },
    comments: "Es uno de los cuatro fallecidos durante los disturbios que se dieron en Barquisimeto, Desde tempranas horas de ese viernes, paramilitares se encargaron de sembrar el terror exhibiendo armas cortas y largas en varias zonas de Barquisimeto.",
    place_death: "Estado Lara",
    links:"http://runrun.es/nacional/315770/gobernador-de-lara-reporto-dos-victimas-tras-sucesos-de-este-viernes.html",
    image: "images/photos/ruben-morillo.jpg"
  },
  {
    id: 95,
    name: "Fernando Rojas Rubio",
    description: "",
    age: 49,
    date_death: {
      day: 30,
      month: 06,
      year: 2017
    },
    comments: "Es uno de los cuatro fallecidos durante los disturbios que se dieron en Barquisimeto, Desde tempranas horas de ese viernes, paramilitares se encargaron de sembrar el terror exhibiendo armas cortas y largas en varias zonas de Barquisimeto.",
    place_death: "Estado Lara",
    links:"http://runrun.es/nacional/315770/gobernador-de-lara-reporto-dos-victimas-tras-sucesos-de-este-viernes.html",
    image: "images/photos/fernando-rojas.jpg"
  },
  {
    id: 96,
    name: "José Gregorio Mendoza Durán",
    description: "Era propietario de una carnicería en Los Cerrajones",
    age: 44,
    date_death: {
      day: 30,
      month: 06,
      year: 2017
    },
    comments: "Es uno de los cuatro fallecidos durante los disturbios que se dieron en Barquisimeto, Desde tempranas horas de ese viernes, paramilitares se encargaron de sembrar el terror exhibiendo armas cortas y largas en varias zonas de Barquisimeto.",
    place_death: "Estado Lara",
    links:"http://runrun.es/nacional/315770/gobernador-de-lara-reporto-dos-victimas-tras-sucesos-de-este-viernes.html",
    image: "images/photos/jose-gregorio-mendoza.jpg"
  },
  {
    id: 97,
    name: "José Rodolfo Bouzamayor Bravo",
    description: "Motorizado",
    age: 33,
    date_death: {
      day: 30,
      month: 06,
      year: 2017
    },
    comments: "Manejaba su moto con un parrillero el 28 de junio cerca de donde se desarrollaba una manifestación en la parroquia Cristo de Aranza de Maracaibo.",
    place_death: "Estado Zulia",
    links:"http://albaciudad.org/2017/06/motorizado-carbonizado-camionero-quemaduras-graves-guarimba-maracaibo/",
    image: "images/photos/no-photo.jpg"
  },
  {
    id: 98,
    name: "Ramsés Enrique Martínez",
    description: "Fue herido el 30.06.17 y falleció el 01.07.17.",
    age: 20,
    date_death: {
      day: 01,
      month: 07,
      year: 2017
    },
    comments: "Es uno de los cuatro fallecidos durante los disturbios que se dieron en Barquisimeto el 30 de junio, dejó un total de cuatro personas muertas.",
    place_death: "Estado Lara",
    links:"http://runrun.es/nacional/315770/gobernador-de-lara-reporto-dos-victimas-tras-sucesos-de-este-viernes.html",
    image: "images/photos/ramses-martinez.jpg"
  },
  {
    id: 99,
    name: "Engelberth Alexander Duque Chacón",
    description: "Trabajaba en Palmira, en un taller de tubos de escape.",
    age: 24,
    date_death: {
      day: 04,
      month: 07,
      year: 2017
    },
    comments: "El joven participaba en el trancazo convocado para ese día, específicamente en la calle 14 de Táriba.",
    place_death: "Estado Táchira",
    links:"http://www.el-nacional.com/noticias/protestas/murio-manifestante-tachira_191244",
    image: "images/photos/engelberth-duque.jpg"
  },
  {
    id: 100,
    name: "Rubén Darío González Jiménez",
    description: "Iba a recibir su título de bachiller a finales de julio, Entre sus planes estaba irse del país con su hermana mayor en busca de nuevas oportunidades.",
    age: 16,
    date_death: {
      day: 10,
      month: 07,
      year: 2017
    },
    comments: "Asesinado presuntamente por un funcionario de la Guardia Nacional durante las protestas registradas en el sector cinco de la urbanización La Isabelica, en la parroquia Rafael Urdaneta de Carabobo.",
    place_death: "Estado Carabobo",
    links:"https://elpitazo.com/regiones/ruben-dario-gonzalez-iba-recibir-titulo-bachiller-finales-julio/",
    image: "images/photos/ruben-gonzalez.jpg"
  },
  {
    id: 101,
    name: "Oswaldo Rafael Britt",
    description: "Cursaba segundo semestre de enfermería, en la Universidad de Oriente (UDO).",
    age: 17,
    date_death: {
      day: 11,
      month: 07,
      year: 2017
    },
    comments: "Falleció la tarde de este martes luego de presuntamente haber sido arrollado por un camión de Hidrobolívar en el Paseo Meneses, Ciudad Bolívar, lugar donde se registró una protesta.",
    place_death: "Estado Bolívar",
    links:"http://www.el-nacional.com/noticias/sucesos/quien-era-oswaldo-britt-joven-arrollado-ciudad-bolivar_192616",
    image: "images/photos/oswaldo-britt.jpg"
  },
  {
    id: 102,
    name: "Yanet Angulo Parra",
    description: "Era Profesora jubilada",
    age: 56,
    date_death: {
      day: 11,
      month: 07,
      year: 2017
    },
    comments: "Falleció al recibir un impacto de proyectil en la cabeza. Vecinos señalan como culpable a la Guardia Nacional Bolivariana (GNB) que reprimía una manifestación cerca.",
    place_death: "Estado Lara",
    links:"http://runrun.es/nacional/317168/profesora-es-asesinada-en-manifestacion-tras-represion-de-la-gnb-en-lara.html",
    image: "images/photos/yanet-angulo.jpg"
  },
  {
    id: 103,
    name: "Xiomara Soledad Scott",
    description: "Era enfermera",
    age: 61,
    date_death: {
      day: 16,
      month: 07,
      year: 2017
    },
    comments: "fue asesinada de un disparo por Colectivos Paramilitares en la avenida Sucre de Catia. Caracas.",
    place_death: "Distrito Capital",
    links:"http://www.el-nacional.com/noticias/politica/imputaran-tres-hombres-por-homicidio-xiomara-scott_194228",
    image: "images/photos/xiomara-scott.jpg"
  },
  {
    id: 104,
    name: "Héctor Alejandro Anuel Blanco",
    description: "Motorizado",
    age: 35,
    date_death: {
      day: 18,
      month: 07,
      year: 2017
    },
    comments: "Murió quemado durante una protesta en Lechería. Testigos afirman que Anuel formaba parte de colectivos paramilitares que llegaron en moto para agredir a los manifestantes.",
    place_death: "Estado Anzoátegui",
    links:"http://www.panorama.com.ve/sucesos/Detenidas-dos-personas-por-muerte-de-Hector-Anuel-quemado-en-Lecheria-durante-protesta-20170719-0089.html",
    image: "images/photos/hector-anuel.jpg"
  },
  {
    id: 105,
    name: "Juan Moleiro",
    description: "Sr sufria del corazón",
    age: 76,
    date_death: {
      day: 20,
      month: 07,
      year: 2017
    },
    comments: "Murió a consecuencia de gases lacrimógenos lanzados por la GNB, que afectaron su vivienda ubicada en la Urbanización La Mora II.",
    place_death: "Estado Aragua",
    links:"https://elpitazo.com/ultimas-noticias/muerto-saldo-la-jornada-del-paro-civico-aragua/",
    image: "images/photos/juan-moleiro.jpg"
  },
  {
    id: 106,
    name: "Andrés José Uzcátegui Ávila",
    description: "",
    age: 23,
    date_death: {
      day: 20,
      month: 07,
      year: 2017
    },
    comments: "Resultó herido por bomba lacrimógena y perdigones en el tórax, mientras se encontraba en el cierre de una vía en el sector 5 de La Isabelica, en Valencia.",
    place_death: "Estado Carabobo",
    links:"http://elestimulo.com/blog/joven-en-valencia-fallecio-tras-recibir-impacto-de-bomba-lacrimogena-en-el-pecho/",
    image: "images/photos/andres-uzcategui.jpg"
  },
  {
    id: 107,
    name: "Ronney Eloy Tejera Soler",
    description: "",
    age: 24,
    date_death: {
      day: 20,
      month: 07,
      year: 2017
    },
    comments: "Un grupo de personas manifestaba en el referido sector, cuando se originó una situación irregular durante la cual el joven resultó herido por un arma de fuego, acción que le ocasionó la muerte de inmediato.",
    place_death: "Estado Miranda",
    links:"http://contrapunto.com/noticia/asesinan-a-joven-mientras-protestaba-en-los-teques-este-jueves-148915/",
    image: "images/photos/ronney-tejera.jpg"
  },
  {
    id: 108,
    name: "Eury Rafael Hurtado",
    description: "",
    age: 34,
    date_death: {
      day: 20,
      month: 07,
      year: 2017
    },
    comments: "Fue asesinado de un disparo durante una protesta en el sector Los Bambúes de Santa Eulalia.",
    place_death: "Estado Miranda",
    links:"http://www.eldiario.es/politica/Fiscalia-confirma-personas-manifestaciones-Venezuela_0_667383868.html",
    image: "images/photos/no-photo.jpg"
  },
  {
    id: 109,
    name: "Víctor Manuel Márquez",
    description: "",
    age: 34,
    date_death: {
      day: 20,
      month: 07,
      year: 2017
    },
    comments: "Se encontraba en el segundo piso y, al verse acorralado por las llamas, subió a la azotea y saltó desde el balcón hasta el vacío, caída que le resultó fatal.",
    place_death: "Estado Zulia",
    links:"http://noticiaaldia.com/2017/07/electrocutada-mujer-saqueo-super-latino-alto-jalisco-biagio-parisi/",
    image: "images/photos/no-photo.jpg"
  },
  {
    id: 110,
    name: "Carlos Alberto Paredes Carrizo",
    description: "Oficial jefe de Polimérida",
    age: 30,
    date_death: {
      day: 24,
      month: 07,
      year: 2017
    },
    comments: "Recibió un disparo en el hombro derecho durante las protestas registradas en la avenida Universidad de la ciudad de Mérida.",
    place_death: "Estado Mérida",
    links:"http://www.diariodelosandes.com/index.php?r=site/noticiasecundaria&id=50747",
    image: "images/photos/carlos-paredes.jpg"
  },
  {
    id: 111,
    name: "Rafael Antonio Vergara",
    description: "",
    age: 30,
    date_death: {
      day: 26,
      month: 07,
      year: 2017
    },
    comments: "Fue asesinado de un disparo durante una protesta en Las Residencias Los Molino.",
    place_death: "Estado Mérida",
    links:"http://www.el-nacional.com/noticias/sucesos/fiscalia-investiga-asesinato-rafael-antonio-vergara-merida_195258",
    image: "images/photos/no-photo.jpg"
  },
  {
    id: 112,
    name: "Jean Carlos Aponte",
    description: "",
    age: 16,
    date_death: {
      day: 26,
      month: 07,
      year: 2017
    },
    comments: "Fue asesinado de un disparo durante manifestación en el Barrio 5 de Julio de Petare",
    place_death: "Estado Miranda",
    links:"http://www.infobae.com/america/venezuela/2017/07/27/un-joven-de-16-anos-es-la-segunda-victima-mortal-en-la-huelga-general-en-venezuela/",
    image: "images/photos/no-photo.jpg"
  },
  {
    id: 113,
    name: "Enderson Caldera",
    description: "",
    age: 23,
    date_death: {
      day: 26,
      month: 07,
      year: 2017
    },
    comments: "El muchacho recibió el miércoles 26 de julio un disparo en la cabeza durante enfrentamientos con la Guardia Nacional (GN), en el poblado del páramo de Mérida, y Protección Civil Timotes había confirmado su fallecimiento a las 6:00 pm.",
    place_death: "Estado Mérida",
    links:"http://runrun.es/nacional/venezuela-2/319186/pc-confirma-fallecimiento-de-un-joven-en-timotes-estado-merida.html",
    image: "images/photos/enderson-caldera.jpg"
  },
  {
    id: 114,
    name: "Glimber Terán",
    description: "El menor estaba por comenzar a estudiar cuarto año en el liceo Gran Colombia ubicado en El Cementerio. Vivía en la Cota 905.",
    age: 16,
    date_death: {
      day: 27,
      month: 07,
      year: 2017
    },
    comments: "Herido de bala el 26 de julio en el puente 9 de diciembre de El Paraiso Caracas. Falleció en el Hospital MIguel Pérez Carreño el 27 de julio.",
    place_death: "Distritu Capital",
    links:"http://www.caraotadigital.net/sucesos/colectivos-asesinaron-un-menor-durante-protesta-en-el-paraiso/",
    image: "images/photos/no-photo.jpg"
  },
  {
    id: 115,
    name: "Leonardo González Barreto",
    description: "Gerente de Kromi Prebo. Colaboraba haciendo y dando comida para las sopas en los trancazos",
    age: 48,
    date_death: {
      day: 27,
      month: 07,
      year: 2017
    },
    comments: "Fue asesinado con más de 10 impactos de bala durante manifestación en El Guayabal.",
    place_death: "Estado Carabobo",
    links:"http://www.el-nacional.com/noticias/sucesos/asesinaron-vecino-naguanagua-una-protesta_195478",
    image: "images/photos/leonardo-gonzalez.jpg"
  },
  {
    id: 116,
    name: "José Miguel Pestano",
    description: "",
    age: 23,
    date_death: {
      day: 27,
      month: 07,
      year: 2017
    },
    comments: "Fue ejecutado por GNB con un disparo en el tórax durante una protesta en el Sector La Mata, Cabudare. Vecinos observaron cómo el joven se arrodilló frente a un funcionario con uniforme de la Guardia Nacional, luego éste lo empujó y le disparó por la espalda.",
    place_death: "Estado Lara",
    links:"http://runrun.es/nacional/319331/asesinan-a-jose-miguel-pestano-de-23-anos-en-la-mata-de-cabudare.html",
    image: "images/photos/jose-pestano.jpg"
  },
  {
    id: 117,
    name: "Rafael Canache",
    description: "",
    age: 29,
    date_death: {
      day: 27,
      month: 07,
      year: 2017
    },
    comments: "Fue asesinado durante una manifestación en el sector Jabillote en Piritu.",
    place_death: "Estado Anzoátegui",
    links:"http://www.el-nacional.com/noticias/sucesos/asesinaron-joven-durante-represion-anzoategui_195595",
    image: "images/photos/no-photo.jpg"
  },
  {
    id: 118,
    name: "Oneiver Quiñones Ramírez",
    description: "Funcionario de Polimerida",
    age: 30,
    date_death: {
      day: 27,
      month: 07,
      year: 2017
    },
    comments: "recibió un impacto de bala el 26 de julio durante una manifestaciones en las Res. El Molino en Ejido estado Táchira.",
    place_death: "Estado Táchira",
    links:"https://www.diariodelosandes.com/index.php?r=site/noticiasecundaria&id=50952",
    image: "images/photos/oneiver-quiñones.jpg"
  },
  {
    id: 118,
    name: "Eduardo Rodríguez Gil",
    description: "Teniente coronel de la Guardia Nacional Bolivariana retirado",
    age: 53,
    date_death: {
      day: 28,
      month: 07,
      year: 2017
    },
    comments: "Fue asesinado de un disparo de FAL que recibió la noche de este jueves durante un enfrentamiento entre manifestantes y los cuerpos de seguridad del Estado en el sector Junco.",
    place_death: "Estado Táchira",
    links:"http://noticiaaldia.com/2017/07/asesinado-teniente-coronel-retirado-protestaba-la-anc-tachira/",
    image: "images/photos/eduardo-rodriguez.jpg"
  },
  {
    id: 119,
    name: "Gustavo Villamizar",
    description: "",
    age: 18,
    date_death: {
      day: 28,
      month: 07,
      year: 2017
    },
    comments: "Aparentemente, el joven pertenecía al grupo de la “resistencia” y en un intento de ingresar al centro electoral recibió el impacto que lo dejó gravemente herido y en medio de una intervención quirúrgica en un hospital falleció.",
    place_death: "Estado Táchira",
    links:"http://www.caraotadigital.net/carrusel/dolor-e-impotencia-el-sentimiento-que-se-vive-en-el-velorio-de-gustavo-villamizar/",
    image: "images/photos/gustavo-villamizar.jpg"
  },
  {
    id: 120,
    name: "Marcel Pereira ",
    description: "",
    age: 38,
    date_death: {
      day: 29,
      month: 07,
      year: 2017
    },
    comments: "Asesinado por impactos de bala la noche de este sábado durante ataques de grupos civiles armados, denominados colectivos, a protestas en el estado Mérida.",
    place_death: "Estado Mérida",
    links:"http://noticiaaldia.com/2017/07/alcalde-merida-reporta-muerte-marcel-pereira-impacto-bala-la-cabeza/",
    image: "images/photos/no-photo.jpg"
  },
  {
    id: 121,
    name: "Iraldo José Gutiérrez",
    description: "",
    age: 38,
    date_death: {
      day: 29,
      month: 07,
      year: 2017
    },
    comments: "Asesinado por impactos de bala la noche de este sábado durante ataques de grupos civiles armados, denominados colectivos, a protestas en el estado Mérida.",
    place_death: "Estado Mérida",
    links:"http://www.el-nacional.com/noticias/sucesos/asesinaron-dos-manifestantes-merida_196014",
    image: "images/photos/no-photo.jpg"
  },
  {
    id: 122,
    name: "Eduardo Olave",
    description: "",
    age: 38,
    date_death: {
      day: 30,
      month: 07,
      year: 2017
    },
    comments: "Las víctimas que hirieron con armas de fuego fueron encontradas dentro de la U.E.E Simón Rodríguez de la parroquia Jacinto Plaza, ha indicado el Ministerio Público a través de su cuenta en Twitter.",
    place_death: "Estado Mérida",
    links:"http://www.el-nacional.com/noticias/sucesos/asesinadas-personas-centro-electoral-merida_196069",
    image: "images/photos/no-photo.jpg"
  },
  {
    id: 123,
    name: "Angelo Yordano Méndez",
    description: "",
    age: 28,
    date_death: {
      day: 30,
      month: 07,
      year: 2017
    },
    comments: "Las víctimas que hirieron con armas de fuego fueron encontradas dentro de la U.E.E Simón Rodríguez de la parroquia Jacinto Plaza, ha indicado el Ministerio Público a través de su cuenta en Twitter.",
    place_death: "Estado Mérida",
    links:"http://www.el-nacional.com/noticias/sucesos/asesinadas-personas-centro-electoral-merida_196069",
    image: "images/photos/no-photo.jpg"
  },
  {
    id: 124,
    name: "Ender Peña Sepulveda",
    description: "Era capitán del equipo sub 17 de Lotería del Táchira Futbol Club.",
    age: 19,
    date_death: {
      day: 30,
      month: 07,
      year: 2017
    },
    comments: "Murió este domingo luego de recibir un impacto de bala durante la represión de los cuerpos de seguridad del Estado en La Rotaria, municipio San Cristóbal del estado Táchira, la tarde de este sábado.",
    place_death: "Estado Táchira",
    links:"https://www.el-carabobeno.com/ender-pena-fallecido-tachira-producto-la-represion/",
    image: "images/photos/ender-pena.jpg"
  },
  {
    id: 125,
    name: "Albert Rosales",
    description: "",
    age: 53,
    date_death: {
      day: 30,
      month: 07,
      year: 2017
    },
    comments: "Fue asesinado durante una protesta en Tucapé municipio Cárdenas del estado Táchira.",
    place_death: "Estado Táchira",
    links:"http://www.ntn24america.com/noticia/dos-personas-murieron-este-domingo-en-medio-de-la-represion-en-el-estado-tachira-148257",
    image: "images/photos/albert-rosales.jpg"
  },
  {
    id: 126,
    name: "Luis Beltrán Zambrano Lucena",
    description: "Era Deportista, conocido como El Pulpo, dejó tres hijos huérfanos.",
    age: 43,
    date_death: {
      day: 30,
      month: 07,
      year: 2017
    },
    comments: "Recibió un impacto en la cabeza, al parecer de bala. No estaba participando en la manifestación.",
    place_death: "Estado Lara",
    links:"http://www.el-nacional.com/noticias/sucesos/mataron-deportista-medio-protesta-barquisimeto_196091",
    image: "images/photos/luis-zambrano.jpg"
  },
  {
    id: 127,
    name: "Ricardo Campos",
    description: "Dirigente juvenil de Acción Democrática en Cumaná",
    age: 30,
    date_death: {
      day: 30,
      month: 07,
      year: 2017
    },
    comments: "Presuntamente el dirigente juvenil habría recibido un disparo en la cabeza de parte de un agente de seguridad del Estado.",
    place_death: "Estado Sucre",
    links:"http://www.el-nacional.com/noticias/sucesos/asesinaron-secretario-juvenil-durante-protesta-cumana_196044",
    image: "images/photos/ricardo-campos.jpg"
  },
  {
    id: 128,
    name: "Juan Gómez",
    description: "",
    age: 32,
    date_death: {
      day: 30,
      month: 07,
      year: 2017
    },
    comments: "Fue asesinado durante las protestas en la entidad, específicamente en Aguada Grande Municipio Urdaneta.",
    place_death: "Estado Lara",
    links:"http://www.el-nacional.com/noticias/sucesos/asesinan-segundo-manifestante-barquisimeto_196126",
    image: "images/photos/no-photo.jpg"
  },
  {
    id: 129,
    name: "Julio Manrrique",
    description: "Era parte del partido Un Nuevo Tiempo en la entidad",
    age: 22,
    date_death: {
      day: 30,
      month: 07,
      year: 2017
    },
    comments: "Hechos violentos en la entidad tachirense este domingo 30 de julio.",
    place_death: "Estado Táchira",
    links:"http://caraboboesnoticia.com/30jul-confirman-muerte-julio-manrique-urena/",
    image: "images/photos/no-photo.jpg"
  },
  {
    id: 130,
    name: "José Fernando Sanchez",
    description: "",
    age: 25,
    date_death: {
      day: 30,
      month: 07,
      year: 2017
    },
    comments: "En la ciudad de Tovar donde este domingo se produjeron fuertes enfrentamientos entre la fuerza pública y manifestantes, murió José Fernando Sánchez Sánchez al recibir tres impactos de bala.",
    place_death: "Estado Mérida",
    links:"https://www.google.com/maps/d/viewer?mid=1DMMP3SLmOw1nwK_CyRaseG0Ayfs&ll=8.327933400000015%2C-71.75928249999998&z=18",
    image: "images/photos/no-photo.jpg"
  },
  {
    id: 131,
    name: "Miguel Urdaneta",
    description: "Era parte del partido Un Nuevo Tiempo en la entidad",
    age: 25,
    date_death: {
      day: 30,
      month: 07,
      year: 2017
    },
    comments: "Militante de UNT, fue asesinado  durante una protesta en el sector San Isidro de Maracaibo",
    place_death: "Estado Zulia",
    links:"https://noticiasvideos1.com/primer-muerto-en-el-zulia-asesinado-el-joven-miguel-urdaneta-en-la-parroquia-san-isidro-de-maracaibo/",
    image: "images/photos/no-photo.jpg"
  },
  {
    id: 132,
    name: "Willmer Smith Flores",
    description: "",
    age: 19,
    date_death: {
      day: 30,
      month: 07,
      year: 2017
    },
    comments: "El joven recibió un tiro presuntamente de manos de uniformado de la PNB el hecho de registró en el sector San Vicente de La Grita municipio Jáuregui, Táchira.",
    place_death: "Estado Táchira",
    links:"https://elpitazo.com/los-andes/asesinado-joven-de-19-anos-en-la-grita-estado-tachira/",
    image: "images/photos/willmer-flores.jpg"
  },
  {
    id: 133,
    name: "Luis Ortiz",
    description: "",
    age: 17,
    date_death: {
      day: 30,
      month: 07,
      year: 2017
    },
    comments: "Recibió un impacto de bala en el tórax cuando sujetos motorizados llegaron hasta uno de los puntos de resistencia de Tucapé en el municipio Cárdenas del estado Táchira, y descargaron sus armas. El Ministerio Público investiga la muerte de 10 personas, ocurridas en el país este domingo 30 de julio,",
    place_death: "Estado Táchira",
    links:"http://noticiasvenezuela.info/2017/07/colectivos-asesinaron-a-dos-manifestantes-en-tachira/",
    image: "images/photos/luis-ortiz.jpg"
  },
  {
    id: 134,
    name: "Adrian Rodríguez",
    description: "",
    age: 13,
    date_death: {
      day: 30,
      month: 07,
      year: 2017
    },
    comments: "Fue asesinado por disparo de arma de fuego en la cabeza.",
    place_death: "Estado Táchira",
    links:"http://www.el-nacional.com/noticias/sucesos/asesinaron-adolescente-durante-represion-capacho_196132",
    image: "images/photos/adrian-rodriguez.jpg"
  },
  {
    id: 135,
    name: "Ronald Donny Ramírez Rosales",
    description: "Sargento  2º (GNB)",
    age: 23,
    date_death: {
      day: 30,
      month: 07,
      year: 2017
    },
    comments: "Fue asesinado con un disparo en el rostro en el centro de votación ubicado en el Liceo Militar Jáuregui en La Grita, municipio Jáuregui del estado Táchira.               ",
    place_death: "Estado Táchira",
    links:"http://www.el-nacional.com/noticias/sucesos/asesinaron-funcionario-gnb-grita_196136",
    image: "images/photos/ronald-ramirez.jpg"
  },
  {
    id: 136,
    name: "Ándres (Apellido por identificar)",
    description: "Sargento  2º (GNB)",
    age: 23,
    date_death: {
      day: 30,
      month: 07,
      year: 2017
    },
    comments: "Cayó un joven de 19 años identificado como Andrés, quien vivía en las calles, testigos afirmaron que recibió un disparo a “quemarropa”, según informó Adam Contreras, periodista de la localidad.",
    place_death: "Estado Mérida",
    links:"http://www.el-nacional.com/noticias/sucesos/asesinaron-funcionario-gnb-grita_196136",
    image: "images/photos/no-photo.jpg"
  },
  {
    id: 137,
    name: "Daniela de Jesús Salomón Manchado",
    description: "",
    age: 15,
    date_death: {
      day: 31,
      month: 07,
      year: 2017
    },
    comments: "El novio de la víctima informó que ella  caminaba por la zona cuando un grupo de colectivos a bordo de motocicletas pasó disparando contra las personas que manifestaban en contra de la asamblea nacional constituyente, cuando recibio un impacto de bala en el pecho la noche del 30 de julio, fallecio el lunes 31.",
    place_death: "Estado Táchira",
    links:"http://www.el-nacional.com/noticias/sucesos/murio-adolescente-tras-ataque-colectivos-san-cristobal_196250",
    image: "images/photos/daniela-salomon.jpg"
  },
  {
    id: 138,
    name: "Jhony Colmenares",
    description: "Era agricultor, laboraba en una pequeña finca que tenía su familia.",
    age: 25,
    date_death: {
      day: 03,
      month: 08,
      year: 2017
    },
    comments: "Murió en una clínica de San Cristóbal la madrugada del jueves luego de que el pasado domingo fuera víctima de una brutal golpiza en el municipio Lobatera del estado Táchira. El joven participaba en las protestas contra la elección Constituyente en la entidad andina.",
    place_death: "Estado Táchira",
    links:"https://elpitazo.com/sucesos/murio-joven-tachirense-que-recibio-golpiza-mientras-levantaba-barricada/",
    image: "images/photos/jhonny-colmenares.jpg"
  },
  {
    id: 139,
    name: "Ramón Rivas",
    description: "Era miembro de la formación antichavista Avanzada Progresista.",
    age: 53,
    date_death: {
      day: 06,
      month: 08,
      year: 2017
    },
    comments: "Murió tras recibir un disparo en el pecho durante una manifestación en la avenida Bolívar Norte de Valencia, estado Carabobo. El occiso era dirigente de Avanzada Progresista en la entidad.",
    place_death: "Estado Carabobo",
    links:"http://www.elespanol.com/mundo/america/20170806/236976748_0.html",
    image: "images/photos/ramon-rivas.jpg"
  },
  {
    id: 140,
    name: "Martín Saturno Baudin Quero",
    description: "",
    age: 39,
    date_death: {
      day: 06,
      month: 08,
      year: 2017
    },
    comments: "Fue asesinado de un disparo durante una manifestación en la Av. Bolívar de Valencia estado Carabobo.",
    place_death: "Estado Carabobo",
    links:"http://www.elespanol.com/mundo/america/20170806/236976748_0.html",
    image: "images/photos/no-photo.jpg"
  },
  {
    id: 141,
    name: "Willmerys Ocarina Zerpa",
    description: "Estudiaba Ingeniería Geológica en la Universidad de Oriente (UDO).",
    age: 20,
    date_death: {
      day: 07,
      month: 08,
      year: 2017
    },
    comments: "Fue asesinado de un disparo durante una manifestación en la Av. Bolívar de Valencia estado Carabobo.",
    place_death: "Estado Bolívar",
    links:"http://runrun.es/nacional/320686/estudiante-de-20-anos-fallecio-en-ciudad-bolivar-tras-ataque-de-colectivos.html",
    image: "images/photos/willmerys-zerpa.jpg"
  },
  {
    id: 142,
    name: "Eduardo Orozco",
    description: "El joven estudiaba en Valencia estado Carabobo, se había graduado el año pasado en el colegio Rio Claro en Barquisimeto",
    age: 19,
    date_death: {
      day: 07,
      month: 08,
      year: 2017
    },
    comments: "murió durante actos represivos por parte del Conas en el distribuidor de Bellas Artes vía hacia la población de Cabudare. autoridades indicaron que fueron atacado con bombas Molotov y los efectivos militares dispararon. ",
    place_death: "Estado Lara",
    links:"http://www.eluniversal.com/noticias/venezuela/asesinado-joven-durante-protesta-lara_664739",
    image: "images/photos/eduardo-orozco.jpg"
  }
];
