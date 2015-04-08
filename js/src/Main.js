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



////SpotStuff
/*
function testSpotBlob(){

  this.spot = new SpotifyArtistBlob();
  //spot.init("0OdUWJ0sBjDrqHygGUXeCF");

  spot.init("6A43Djmhbe9100UwnI7epV ");

  spot.addEventListener("SPOTIFY_BLOB_BASE_INFO_READY", this.spotBlobBaseInfoReady.bind(this));
  spot.addEventListener("SPOTIFY_BLOB_RELATED_INFO_READY", this.spotBlobRelatedInfoReady.bind(this));

  spot.init("6A43Djmhbe9100UwnI7epV ");
}
function spotBlobBaseInfoReady(){

  console.log("spotBlobReady")

  spot.removeEventListener("SPOTIFY_BLOB_BASE_INFO_READY");
  spot.getRelated();
}

function spotBlobRelatedInfoReady(){
  console.log("spotBlobRelatedInfoReady");
  spot.loadTopTracks();

}
*/