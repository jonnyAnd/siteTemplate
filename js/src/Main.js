/**
 * @class Game
 * @constructor
 */

var view;


function Main() {

	console.log("MAIN")


  view = new View();
	this.model = new Model();
	this.controller = new Controller();

  this.controller.init(view, this.model);

	requestAnimFrame(updateRender);

}

function updateRender(){
	view.updateRender();
}



/*////SpotStuff

function getArtistImage(artist){

}

//function getRelatedArtist


function searchAlbums(query) {
	console.log('searchAlbums')
    $.ajax({
        url: 'https://api.spotify.com/v1/search',
        data: {
            q: query,
            type: 'album'
        },
        success: function (response) {
        	console.log(response)
            //resultsPlaceholder.innerHTML = template(response);
        }
    });
}
*/
