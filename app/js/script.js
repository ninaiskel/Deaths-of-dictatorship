const modalDetail = document.getElementById('modal');
const close = document.getElementsByClassName('botton-back');

function showDetails() {
  modalDetail.style.display = 'block';
}

// function goBack() {
//   modalDetail.style.display = 'none';
// }

// close.onClick = function() {
//     showModal.style.display = "none";
// }
//cards
const cardsPeople = document.getElementById('cards-people');
let content
people.map( x => {
  let cardContent = '<li class="card">';
  cardContent = cardContent + '<button class="card-btn" onClick="showDetails()">' + '</button>';
  cardContent = cardContent + '<div class="card-pic">' +
                '<img src="' + x.image  + '"' + 'alt="">' +
                '</div>';
  cardContent = cardContent + '<div class="card-content">' +
                '<h2 class="card-name">' + x.name + '</h2>';
  cardContent = cardContent + '<div class="card-date-death">' +
                '<svg class="icon icon-date-death"><use xlink:href="#icon-death"></use>' + '</svg>';
  cardContent = cardContent + '<p class="date-death">' +
                               x.date_death.day + ' . ' + x.date_death.month + ' . ' + x.date_death.year +
                              '</p>' + '</div>' + '</div>';

  content = content + cardContent + '</li>'
})

cardsPeople.innerHTML = content;

//modals
//
// const detailsModal = document.ElementById('modal-inside');
// let modalContent
// people.map( x => {
//
// }
