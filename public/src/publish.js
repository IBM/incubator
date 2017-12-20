var url = "https://github.com/IBM/incubator/issues/new?title=<proposed title goes here>"

var checkbox = '%0A%0A- [ ] ';

var space = '%0A';

function createTile(publication) {

  var anchor = document.getElementById('anchor');

  var link = document.createElement('a');

  link.className = 'tile';

  link.href = publication.repo + '/' + publication.file;
  
  /* add label */
  url = url + '&labels=' + publication.type + '&body=';

  publication.sections.forEach(function(section){
    url = url + space + space + '**' + section.title + '**'  + space + space + '_' + section.instruction + '_';
    if ( section.checklist.length > 0 ){
       /* add checkboxes */

       section.checklist.forEach(function(item){
        url = url + checkbox + item.comment;
      })

      link.href = url;
    }
  })

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
