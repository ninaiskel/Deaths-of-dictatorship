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
//end cardsPeople

//open filtered
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

function closeFiltered() {
  filter.style.display = 'none';
  closeFilter.style.display = 'none';

  return closeFiltered
};

// filter by age
const btnOld = document.getElementById('btn-old')
const btnSmaller = document.getElementById('btn-smaller')
const btnBoth = document.getElementById('btn-both')

function filterByAge(isOldMan) {
  let peopleByAge = []

  console.log(isOldMan)

  if (isOldMan === 'both') {
    btnBoth.classList.add('btn-option-on')
    btnOld.classList.remove('btn-option-on')
    btnSmaller.classList.remove('btn-option-on')
    peopleByAge = people
  } else {
    peopleByAge = people.filter( x => {
      btnBoth.classList.remove('btn-option-on')
      if ( isOldMan ) {
        btnOld.classList.add('btn-option-on')
        btnSmaller.classList.remove('btn-option-on')
        if (18 <= x.age) return x
      } if ( !isOldMan ) {
        btnSmaller.classList.add('btn-option-on')
        btnOld.classList.remove('btn-option-on')
        if (18 >= x.age) return x
      }
    })
  }

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
  let peopleByState = []
  if (state === 'Todos') {
    peopleByState = people
  } else {
    peopleByState = people.filter( x => {
      if (state === x.place_death) return x
    })
  }

  let cardsPeople = ''
  peopleByState.map(x => {
    cardsPeople = cardsPeople + HTMLGenerator(x)
  })
  document.getElementById('cards-people').innerHTML = cardsPeople
  return peopleByState
}

//filterbymonth
const getMonth = () => {
  const month = document.getElementById('months').value
  let peopleByMonth = []
  if (month === 'Todos') {
    peopleByMonth = people
    // show all cards of people
  } else {
    peopleByMonth = people.filter( x => {
      if (Number(month) === x.date_death.month) return x
      // show only by month
    })
  }

  let cardsPeople = ''
  peopleByMonth.map(x => {
    cardsPeople = cardsPeople + HTMLGenerator(x)
  })
  document.getElementById('cards-people').innerHTML = cardsPeople
  return peopleByMonth
}

// Open and close modal cards
//modal
const modalDetail = document.getElementById('modal');
const detailPeople = document.getElementById('modal-inside');

function showDetails(id) {
  const filterPeople =  people.filter( x => {
    if (id == x.id) return x
  })
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
  modalDetail.classList.add('details-modal-active')
  detailPeople.classList.add('details-modal-wrap-active')
  return showDetails
};

function goBack() {
  modalDetail.classList.remove('details-modal-active')
  detailPeople.classList.remove('details-modal-wrap-active')
  return goBack
};

//function counter
const counter = document.getElementById('counter-num');
counter.innerHTML = people.length;
