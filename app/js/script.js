//cards
const HTMLGenerator = (person) => {
  let content = ''
  let cardContent = '<li class="card">' + '<button class="card-btn" onClick="showDetails(' + person.id + ')">' + '</button>';
  cardContent = cardContent + '<div class="card-pic">' +
                '<img src="' + person.image  + '"' + 'alt="">' +
                '</div>' + '<div class="card-content">' +
                '<h2 class="card-name">' + person.name + '</h2>' + '<div class="card-date-death">' +
                '<svg class="icon icon-date-death"><use xlink:href="#icon-death"></use>' +
                '</svg>' + '<p class="date-death">' + person.date_death.day + ' . ' +
                person.date_death.month + ' . ' + person.date_death.year +'</p>' + '</div>' + '</div>';
  content = content + cardContent + '</li>'
  return content
  }
  let cardsPeople = ''
  people.map(x => {
    cardsPeople = cardsPeople + HTMLGenerator(x)
  })

  const innerHtml = document.getElementById('cards-people')
  innerHtml.innerHTML = cardsPeople

// filter by age
function filterByAge(isOldMan) {
  let peopleByAge
  peopleByAge = people.filter( x => {
    if ( isOldMan ) {
      if (18 <= x.age) return x
    } else {
      if (18 >= x.age) return x
    }
  })

  let cardsPeople = ''
  peopleByAge.map(x => {
    cardsPeople = cardsPeople + HTMLGenerator(x)
  })
  document.getElementById('cards-people').innerHTML = cardsPeople
  return peopleByAge
}

//filter by place_death
const getValue = () => {
  const state = document.getElementById('states').value
  const peopleByState = people.filter( x => {
    if (state === x.place_death) return x
  })
  let cardsPeople = ''
  peopleByState.map(x => {
    cardsPeople = cardsPeople + HTMLGenerator(x)
  })
  document.getElementById('cards-people').innerHTML = cardsPeople
  return peopleByState
}

//modal
const modalDetail = document.getElementById('modal');
function showDetails(id) {
  const filterPeople =  people.filter( x => {
    if (id == x.id) return x
  })
  const detailPeople = document.getElementById('modal-inside');
  let modalContent = ''

  filterPeople.map( x => {
    let peopleContent = '<div class="details-modal-header">' +
                        '<div class="modal-header-description">' +
                        '<h1>' + x.name + '</h1>' +
                        '<p>' + x.description + '</p>' + '</div>';
    modalContent = modalContent + peopleContent  + '<div class="details-modal-header-photo">' +
                  '<img src="' + x.image + '" alt="">' + '</div>' + '</div>' +
                  '<div class="details-modal-content">' + '<ul class="content-info">' +
                  '<li class="content-info-data">' + '<span class="content-info-title">Edad</span>' +
                  '<p class="content-info-result">' + x.age + ' Años' + '</p>' + '</li>' +
                  '<li class="content-info-data">' + '<span class="content-info-title">' +
                  'fecha del asesinato</span>' + '<p class="content-info-result">' +
                   x.date_death.day + ' . ' + x.date_death.month + ' . ' + x.date_death.year + '</p>' + '</li>' +
                   '<li class="content-info-data">' + '<span class="content-info-title">Lugar del asesinato</span>' +
                   '<p class="content-info-result">' + x.place_death + '</p>' + '</li>' + '</ul>' +
                   '<div class="content-comments">' + '<h4>comentarios adicionales</h4>' +
                   '<p>' + x.comments + '</p>' + '</div>' + '<div class="content-comments-links">' +
                   '<h4>enlaces de informacion</h4>' + '<a target="_blank" href="' + x.links + '">Enlace a la noticia</a>' + '</div>' +
                   '<button onClick="goBack()" class="botton-back">' + '<svg class="icon icon-back">' +
                   '<use xlink:href="#icon-back"></use>' + '</svg>' + 'Volver' + '<button>' +
                   '</div>';
  })

  detailPeople.innerHTML = modalContent;
  modalDetail.style.transform = 'scale(1)';
  detailPeople.style.transform = 'translateX(0px)';
  console.log(modalDetail)
  return showDetails
};

function goBack() {
  modalDetail.style.transform = 'scale(0)';
  detailPeople.style.transform = 'translateX(2000px)';
  return goBack
};

//open filtered
const filtered = document.getElementById('filtered');
const closeFilter = document.getElementById('close-filter');

function openFilter() {
  filtered.style.display = 'block';
  closeFilter.style.display = 'block';

  return openFilter
}
function closeFiltered() {
  filtered.style.display = 'none';
  closeFilter.style.display = 'none';

  return closeFiltered
};

//
//nouislider
// var range = document.getElementById('range');
//
// noUiSlider.create(range, {
// 	start: [ 4, 5, 6, 7, 8 ], // 4 handles, starting at...
// 	margin: 300, // Handles must be at least 300 apart
// 	limit: 600, // ... but no more than 600
// 	connect: true, // Display a colored bar between the handles
// 	direction: 'rtl', // Put '0' at the bottom of the slider
// 	orientation: 'horizontal', // Orient the slider vertically
// 	behaviour: 'tap-drag', // Move handle on tap, bar is draggable
// 	step: 150,
// 	tooltips: true,
// 	format: wNumb({
// 		decimals: 0
// 	}),
// 	range: {
// 		'min': 4,
// 		'max': 8
// 	},
// 	pips: { // Show a scale with the slider
// 		mode: 'steps',
// 		stepped: true,
// 		density: 4
// 	}
// });
