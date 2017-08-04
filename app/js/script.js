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
  let filterPeople
  filterPeople = people.filter( x => {
    if ( isOldMan ) {
      if (18 <= x.age) return x
    } else {
      if (18 >= x.age) return x
    }
  })
  return filterByAge
}
//filter by place_death
const getValue = () => {
  const state = document.getElementById('states').value
  const newPeople = people.filter( x => {
    if (state === x.place_death) return x
  })
  let cardsPeople = ''
  newPeople.map(x => {
    cardsPeople = cardsPeople + HTMLGenerator(x)
  })
  document.getElementById('cards-people').innerHTML = cardsPeople
  return newPeople
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
                   '<div class="content-coments">' + '<h4>comentarios adicionales</h4>' +
                   '<p>' + x.coments + '</p>' + '</div>' + '<div class="content-coments-links">' +
                   '<h4>enlaces de informacion</h4>' + '<a target="_blank" href="' + x.links + '">Enlace</a>' + '</div>' +
                   '<button onClick="goBack()" class="botton-back">' + '<svg class="icon icon-back">' +
                   '<use xlink:href="#icon-back"></use>' + '</svg>' + 'Volver' + '<button>' +
                   '</div>';
  })

  detailPeople.innerHTML = modalContent;
  modalDetail.style.display = 'block';
  return showDetails
};

function goBack() {
  modalDetail.style.display = 'none';
  return goBack
};

// cards
// const cardsPeople = document.getElementById('cards-people');
// let content = ''
// people.map( x => {
//   let cardContent = '<li class="card">';
//   cardContent = cardContent + '<button class="card-btn" onClick="showDetails(' + x.id + ')">' + '</button>';
//   cardContent = cardContent + '<div class="card-pic">' +
//                 '<img src="' + x.image  + '"' + 'alt="">' +
//                 '</div>' + '<div class="card-content">' +
//                 '<h2 class="card-name">' + x.name + '</h2>' + '<div class="card-date-death">' +
//                 '<svg class="icon icon-date-death"><use xlink:href="#icon-death"></use>' +
//                 '</svg>' + '<p class="date-death">' + x.date_death.day + ' . ' +
//                 x.date_death.month + ' . ' + x.date_death.year +'</p>' + '</div>' + '</div>';
//   content = content + cardContent + '</li>'
// })
//
// cardsPeople.innerHTML = content;

//connect data
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
  closeFilter.style.display = 'block';

  return closeFiltered
};
