var url = "https://github.com/IBM/incubator/issues/new?title=<proposed pattern title goes here>&body=Please include details:"

function createTile(publication) {

  var anchor = document.getElementById('anchor');

  var link = document.createElement('a');

  link.className = 'tile';

  var string ='';

  if( publication.checklist.length > 0 ){

    publication.checklist.forEach(function(item){
      string =  string + '%0A%0A- [ ] ' + item.comment;
    })

    if( publication.type == "pattern"){
      string =  string + '&labels=Pattern';
    }

    url = url + string;

    link.href = url;

  }else{
    link.href = publication.repo + '/' + publication.file;
  }

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
