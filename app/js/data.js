let people = [
  {
    name: "Jairo Ortiz",
    description: "Era estudiante de derecho en el núcleo San Antonio de la Universidad Bicentenaria de Aragua.",
    age: 19,
    date_death: {
      day: 06,
      month: 04,
      year: 2017
    },
    place_death: "estado miranda",
    coments: "Jairo cayó herido aproximadamente a las 9:30 pm. Estaba cercano a la entrada del centro comercial de la zona, justo al lado de la panadería, ahí lo alcanzó la bala. Sus compañeros de protesta lo trasladaron de inmediato al Centro Médico Docente Los Altos, contiguo al lugar de la protesta y a pocos metros donde se desplomó el joven universitario.",
    links: "http://www.eluniversal.com/noticias/sucesos/padre-jairo-ortiz-hijo-era-totalmente-pacifico_647851",
    image: "images/photos/01-jairo-ortiz.png"
  },
  {
    name: "Daniel queliz Araca",
    description: "estudiante de derecho de la Universidad Arturo Michelena ",
    age: 20,
    date_death: {
      day: 10,
      month: 04,
      year: 2017
    },
    place-death: "estado carabobo",
    coments: "Durante la situación, el joven resultó herido en el cuello por un impacto de bala. Posteriormente, la víctima fue trasladada a la Ciudad Hospitalaria Dr. Enrique Tejera, donde ingresó sin signos vitales.",
    links: "http://www.eluniversal.com/noticias/sucesos/murio-joven-daniel-queliz-mientras-protestaba-valencia_647914",
    image: "images/photos/daniel-queliz.png"
  },
  {
    name: "Miguel colmenares",
    description: " ",
    age: 36,
    date_death: {
      day: 11,
      month: 04,
      year: 2017
    },
    place-death: "estado lara",
    coments: "quien recibió 11 disparos por colectivos, señalaron medios de comunicación. Los hechos ocurrieron en la calle 59 del oeste de Barquisimeto, donde se realizaban manifestaciones violentas y trancas de calles.",
    links:"http://www.el-nacional.com/noticias/sucesos/mataron-disparos-joven-durante-manifestacion-barquisimeto_159875" ,
    image: "images/photos/miguel-colmenares.png"
  },
  {
    name: "Brayan David Principal Giménez",
    description: "Adolescente, tercer año de bachillerato.",
    age: 14,
    date_death: {
      day: 11,
      month: 04,
      year: 2017
    },
    place-death: "estado lara",
    coments: "Murió luego de ser herido de bala por colectivos en la urbanización Yucatán en el norte de Barquisimeto. Según informaron sus familiares a la web El Pitazo, el joven salió a comprar café y en ese instante se presume que llegaron los colectivos a disparar. Su asesinato ocurrió la misma noche en que falleció Colmenares.",
    links:"http://www.caraotadigital.net/sucesos/versiones-encontradas-sobre-muerte-de-brayan-principal-en-barquisimeto/" ,
    image: "images/photos/brayan-principal.png"
  },
  {
    name: "Gruseny Antonio Canelón Scirpatempo",
    description: "deportista  y se dedicaba a la venta de repuestos de vehículos. Era conocido como Tony por sus amigos y allegados.",
    age: 32,
    date_death: {
      day: 14,
      month: 04,
      year: 2017
    },
    place-death: "estado lara",
    coments: "Fue herido con perdigones a quemarropa en el pecho, el pasado 11 de abril, durante una manifestación en el distribuidor Bellas Artes de Cabudare, estado Lara. Se presume que Canelón fue atacado por funcionarios de la Guardia Nacional Bolivariana (GNB). El hombre falleció el 14 de abril.",
    links:"http://www.el-nacional.com/noticias/politica/marquina-gruseny-antonio-canelon-otra-victima-mas-dictadura_177166" ,
    image: "images/photos/gruseny-canelon.png"
  },
  {
    name: "Carlos José Moreno Barón",
    description: " estudiante de primer semestre de economía en la Universidad Central de Venezuela. Vivía con su madre y hermana. Jugaba futbol en sus tiempos libres.",
    age: 17,
    date_death: {
      day: 19,
      month: 04,
      year: 2017
    },
    place-death: "distrito capital",
    coments: "Falleció por herida de arma de fuego en la región cefálica durante una manifestación en la plaza La Estrella, San Bernardino, Distrito Capital; cuando un grupo de motorizados arrojó bombas lacrimógenas a los presentes y accionaron armas de fuego, resultando herido el citado adolescente, así como un adulto, fue trasladado hasta el Hospital de Clínicas Caracas donde falleció.",
    links:"http://www.caraotadigital.net/sucesos/carlos-jose-moreno/" ,
    image: "images/photos/carlos-moreno.png"
  },
  {
    name: "Paola Andreína Ramírez Gómez",
    description: "Era estudiante de la Universidad Católica de San Cristóbal.",
    age: 32,
    date_death: {
      day: 19,
      month: 04,
      year: 2017
    },
    place-death: "estado tachira",
    coments: "La joven recibió un disparo que le perforó los pulmones cuando se encontraba en las inmediaciones de la plaza Las Palomas del barrio San Carlos en el estado Táchira.",
    links:"https://eldiariony.com/2017/04/20/los-3-videos-que-muestran-como-presuntos-chavistas-mataron-a-joven-en-protesta-opositora/" ,
    image: "images/photos/paola-ramirez.png"
  },
  {
    name: "Niumar José Sanclemente Barrios",
    description: "sargento segundo de la GNB",
    age: 28,
    date_death: {
      day: 19,
      month: 04,
      year: 2017
    },
    place-death: "estado miranda",
    coments: "cuando se encontraba controlando una manifestación en San Antonio de los Altos, estado Miranda. San Clemente resultó herido de un disparo en el tórax cuando un hombre, que aún no ha sido identificado, disparó contra los efectivos de la Fuerza Armada.",
    links:"http://runrun.es/nacional/305695/un-gnb-muerto-y-otro-herido-en-san-antonio-de-los-altos.html" ,
    image: "images/photos/niumar-sanclemente.png"
  },
  {
    name: "Mervins Fernando Guitian Díaz",
    description: "Supervisor de mantenimiento de obras públicas en la Alcaldía del municipio Sucre del estado Miranda. Sufría de epilepsia",
    age: 26,
    date_death: {
      day: 20,
      month: 04,
      year: 2017
    },
    place-death: "estado miranda",
    coments: "murió el jueves en la noche en el Hospital de El Llanito, pasadas las 9:00 pm, debido a una herida por un tiro de fusil en el abdomen cuando atravesaba el puente del barrio 5 de Julio de Petare, media hora en una protesta de vecinos.",
    links:"http://www.el-nacional.com/noticias/sucesos/tiro-fusil-murio-joven-discapacitado-petare_178468" ,
    image: "images/photos/mervis-guitian.png"
  },


];
