function StartSceneView(){
  console.log("StartSceneView");
}

StartSceneView.prototype = new CoreSceneView();
StartSceneView.prototype.constuctor = StartSceneView;
StartSceneView.prototype.parent = CoreSceneView.prototype;

StartSceneView.prototype.init = function(){
  console.log("TEST SCENE VIEW!!")
}

StartSceneView.prototype.onSetAsCurrentScene = function(){
  console.log("StartSceneView.prototype.onSetAsCurrentScene")

  // new artist
  //this.spotBlob = new SpotifyArtistBlob();
 // this.spotBlob.init("0OdUWJ0sBjDrqHygGUXeCF");
  //this.spotBlob.init("6A43Djmhbe9100UwnI7epV");

  //this.spotBlob.addEventListener("SPOTIFY_BLOB_BASE_INFO_READY", this.spotBlobBaseInfoReady.bind(this));
  //this.spotBlob.addEventListener("SPOTIFY_BLOB_RELATED_INFO_READY", this.spotBlobRelatedInfoReady.bind(this));


  //revert scene keep spot
}

StartSceneView.prototype.spotBlobBaseInfoReady = function(){

  console.log("spotBlobReady")

  this.showBlob();






  //get tracks
  this.spotBlob.removeEventListener("SPOTIFY_BLOB_BASE_INFO_READY");
  //spot.getRelated();
}


StartSceneView.prototype.showBlob = function(){
  // create a new Sprite using the texture
	this.spotSprite = new PIXI.Sprite(PIXI.Texture.fromImage(spotBlob.medResImage));

  // center the sprites anchor point
	this.spotSprite.anchor.x = 0.5;
	this.spotSprite.anchor.y = 0.5;

	// move the sprite t the center of the screen
	this.spotSprite.position.x = 200;
	this.spotSprite.position.y = 150;

	this.addChild(this.spot);



}



/*
StartSceneView.prototype.spotBlobRelatedInfoReady = function(){
  console.log("spotBlobRelatedInfoReady");
  this.spot.loadTopTracks();

}

*/






StartSceneView.prototype.onClickMurrey = function(data){
  //this.gotoScene("TEST_SCENE");
  this.gotoScene("START_SCENE");

}


StartSceneView.prototype.updateRender = function(){
  //console.log("updateRender")
  // this.spot.rotation -= .01;
}

