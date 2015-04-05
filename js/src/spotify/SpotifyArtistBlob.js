function SpotifyArtistBlob(){
}

SpotifyArtistBlob.prototype = new ClassCore();
SpotifyArtistBlob.prototype.constuctor = SpotifyArtistBlob;
SpotifyArtistBlob.prototype.parent = ClassCore.prototype;

SpotifyArtistBlob.prototype.init = function(ID){
	console.log("SpotifyArtistBlob.prototype.init()")
  this.artistID = ID;

  //first get country code.. what a pain in the ass!
  this._getCountryCode();
}

SpotifyArtistBlob.prototype._getCountryCode = function(){
  console.log("-------------country code-------------")
  jQuery.getJSON("http://freegeoip.net/json","",this.onGetCountryCode.bind(this));
}

SpotifyArtistBlob.prototype.onGetCountryCode = function(response){
  this.country_code = response.country_code;
  console.log("Setting music local to -->"+this.country_code);
  this._getArtist(this.artistID)
}


// ---- Get artist info
SpotifyArtistBlob.prototype._getArtist = function(id) {
  jQuery.getJSON("https://api.spotify.com/v1/artists/"+this.artistID,"",this.onGetArtist.bind(this));
}

SpotifyArtistBlob.prototype.onGetArtist = function(response) {
   console.log("-------------Getting artist info-------------")

  this.id = response.id;
  this.artistName = response.name;
  this.genres = response.genres;

  this.lowResImage = response.images[response.images.length-1].url;
  this.medResImage = response.images[response.images.length-2].url;
  this.highResImage = response.images[response.images.length-3].url;



  //---------
  console.log("SpotifyArtistBlob.artistName-->"+this.artistName);
  console.log("SpotifyArtistBlob.id-->"+this.id);
  console.log("SpotifyArtistBlob.genres-->"+this.genres);
  console.log("SpotifyArtistBlob.lowResImage-->"+this.lowResImage);
  console.log("SpotifyArtistBlob.medResImage-->"+this.medResImage);
  console.log("SpotifyArtistBlob.highResImage-->"+this.highResImage);

  //-------

  this.dispatchEvent(new CoreEvent("SPOTIFY_BLOB_BASE_INFO_READY"));
}

//-----------------------------


SpotifyArtistBlob.prototype.getRelated = function(){
  console.log("-------------Getting related artists-------------")
  jQuery.getJSON("https://api.spotify.com/v1/artists/"+this.id+"/related-artists","",this.onGetRelated.bind(this));
}


SpotifyArtistBlob.prototype.onGetRelated = function(response) {
  this.relatedArtists=[];
  for (i = 0; i < response.artists.length; i++){
     this.relatedArtists.push(response.artists[i].id);
  }

  //---------
  console.log("SpotifyArtistBlob.relatedArtists-->"+this.relatedArtists)
  //---------

  this.dispatchEvent(new CoreEvent("SPOTIFY_BLOB_RELATED_INFO_READY"));

}

//-----------------------------

SpotifyArtistBlob.prototype.loadTopTracks = function(){
  console.log("-------------getting top tracks-------------")
  jQuery.getJSON("https://api.spotify.com/v1/artists/"+this.id+"/top-tracks",{country:this.country_code},this.onLoadTopTracks.bind(this));
}


SpotifyArtistBlob.prototype.onLoadTopTracks = function(response) {
  this.preview_url = response.tracks[0].preview_url;

  console.log("SpotifyArtistBlob.preview_url-->"+this.preview_url);


  var audio = new Audio(this.preview_url);
  audio.play();


}

