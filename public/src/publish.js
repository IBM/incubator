function createTile(publication) {

  var anchor = document.getElementById('anchor');

  var link = document.createElement('a');

  link.className = 'tile';
  link.href = publication.repo + '/' + publication.file;

  link.innerHTML = '<div class="control">' + '<div class="visual"><img class="image" src="./images/' + publication.icon + '"></div>' + '<div class="type">' + publication.type + '</div>' +
  // '<div class="description">' + publication.description + '</div>' +
  '</div>'

  anchor.appendChild(link);
}

function reqListener() {
  var publicions = JSON.parse(this.responseText)
  publicions.forEach(function(publication) {
    createTile(publication);
  })
}

function initialize() {
  var request = new XMLHttpRequest();
  request.addEventListener("load", reqListener);
  request.open("GET", "./data/publications.json");
  request.send();
}
