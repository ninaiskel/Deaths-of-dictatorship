//cards
function HTMLGenerator(person) {
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
people.map(function(x) {
  cardsPeople = cardsPeople + HTMLGenerator(x)
  return cardsPeople
})

let innerHtml = document.getElementById('cards-people')
innerHtml.innerHTML = cardsPeople
//end cardsPeople

//open filter
const filter = document.getElementById('filtered');
const closeFilter = document.getElementById('close-filter');

function openFilter() {
  console.log(filter.style.display)
  if (!filter.style.display || filter.style.display === 'none') {
    filter.style.display = 'block';
    closeFilter.style.display = 'block';
  } else {
    filter.style.display = 'none';
    closeFilter.style.display = 'none';
  }

  return openFilter
}
// close filter
function closeFiltered() {
  filter.style.display = 'none';
  closeFilter.style.display = 'none';

  return closeFiltered
};


//filter by age
const ageOld = document.getElementById('age-old')
const ageSmaller = document.getElementById('age-smaller')
const ageBoth = document.getElementById('age-both')

function filterByAge (people) {
  peopleByAge = []
  const peopleByAgeCheck = document.querySelector('input[name="age"]:checked').value
  if (peopleByAgeCheck == '0') {
    ageBoth.classList.add('btn-option-on')
    ageOld.classList.remove('btn-option-on')
    ageSmaller.classList.remove('btn-option-on')
    peopleByAge = people
  } else {
    ageBoth.classList.remove('btn-option-on')
    peopleByAge = people.filter(function(x) {
      if (peopleByAgeCheck == '1') {
        ageSmaller.classList.add('btn-option-on')
        ageOld.classList.remove('btn-option-on')
        if (18 >= x.age) return x
      }

      if ( peopleByAgeCheck == '2' ) {
        ageOld.classList.add('btn-option-on')
        ageSmaller.classList.remove('btn-option-on')
        if (18 <= x.age) return x
      }
    })
  }
    return peopleByAge
}


//filter by place_death
function getValue (people) {
  const state = document.getElementById('states').value
  let peopleByState = []
  if (state === 'Todos') {
    peopleByState = people
  } else {
    peopleByState = people.filter( function(x) {
      if (state === x.place_death) return x
    })
  }
  return peopleByState
}

//filterbymonth
function getMonth() {
  const month = document.getElementById('months').value
  let peopleByMonth = []
  if (month === 'Todos') {
    peopleByMonth = people
    // show all cards of people
  } else {
    peopleByMonth = people.filter( function(x) {
      if (Number(month) === x.date_death.month) return x
      // show only by month
    })
  }
  return peopleByMonth
}

//filter all together
function filterBy(){

  const state = document.getElementById('states').value
  const month = document.getElementById('months').value
  const peopleByAgeCheck = document.querySelector('input[name="age"]:checked').value
  let peopleResult = getMonth()
  // getMonth();
  let peopleValue = getValue(peopleResult);
  let peopleAge = filterByAge(peopleValue);

  let cardsPeople = ''

  peopleAge.length >= 1 ? peopleAge.map(function(x) {
    cardsPeople = cardsPeople + HTMLGenerator(x)
  }) : cardsPeople = '<div class="message-no-cards"><h2>No hay resultados en esta búsqueda</h2>' + '<p>Filtra nuevamente con otras opciones</p>' + '</div>'
  document.getElementById('cards-people').innerHTML = cardsPeople
}


// Open and close modal cards
//modal with the content
const modalDetail = document.getElementById('modal');
const detailPeople = document.getElementById('modal-inside');

function showDetails(id) {
  const filterPeople =  people.filter(function(x) {
    if (id == x.id) return x
  })
  let modalContent = ''

  filterPeople.map(function(x) {
    let peopleContent = '<div class="details-modal-header">' +
    '<div class="details-modal-header-description">' + '<div class="button-close-modal"><button id="close-top" class="" onClick="goBack()">' +
    '<svg class="icon icon-close"><use xlink:href="#icon-close"></use></svg></button></div>' + '<div><h1>' + x.name + '</h1>' +
    '<p>' + x.description + '</p>' + '</div></div>';
    modalContent = modalContent + peopleContent  + '<div class="details-modal-header-photo">' +
    '<img src="' + x.image + '" alt="">' + '</div>' + '</div>' +
    '<div class="details-modal-content">' + '<div><button onClick="goBack()" class="button-back">' + '<svg class="icon icon-back">' +
    '<use xlink:href="#icon-back"></use>' + '</svg>' + 'Volver' + '<button></div>' +
    '<ul class="content-info">' + '<li class="content-info-data">' + '<span class="content-info-title">Edad</span>' +
    '<p class="content-info-result">' + x.age + ' Años' + '</p>' + '</li>' +
    '<li class="content-info-data">' + '<span class="content-info-title">' +
    'fecha del asesinato</span>' + '<p class="content-info-result">' +
    x.date_death.day + ' . ' + x.date_death.month + ' . ' + x.date_death.year + '</p>' + '</li>' +
    '<li class="content-info-data">' + '<span class="content-info-title">Lugar del asesinato</span>' +
    '<p class="content-info-result">' + x.place_death + '</p>' + '</li>' + '</ul>' +
    '<div class="content-comments">' + '<h4>comentarios adicionales</h4>' +
    '<p>' + x.comments + '</p>' + '</div>' + '<div class="content-comments-links">' +
    '<h4>enlaces de informacion</h4>' + '<a target="_blank" href="' + x.links + '">Enlace a la noticia</a>' + '</div>'  + '</div>';
  })

  detailPeople.innerHTML = modalContent;
  modalDetail.classList.add('details-modal-active')
  detailPeople.classList.add('details-modal-wrap-active')
  return showDetails
};
// close modal
function goBack() {
  modalDetail.classList.remove('details-modal-active')
  detailPeople.classList.remove('details-modal-wrap-active')
  return goBack
};

//counter people (banner)
const counter = document.getElementById('counter-num');
counter.innerHTML = people.length;

//button to top (scroll up)
const buttonScroll = document.getElementById('scroll-to-top');
function scrollToTop(scrollDuration) {
    let scrollStep = -window.scrollY / (scrollDuration / 10),
        scrollInterval = setInterval(function(){
        if ( window.scrollY != 0 ) {
            window.scrollBy( 0, scrollStep );
        }
        else clearInterval(scrollInterval);
    },10);
}
