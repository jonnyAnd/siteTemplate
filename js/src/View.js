

var bunny;


function View(){
  console.log("extended view");
}

View.prototype = new CoreView();
View.prototype.constuctor = View;
View.prototype.parent = CoreView.prototype;

/*

//I dont think this is needed here.. if anything it should be a static helper class thingie
View.prototype.createSpriteFromImage = function(pathToImage){
	// create a texture from an image path
	var texture = PIXI.Texture.fromImage(pathToImage);

  // create a new Sprite using the texture
	return new PIXI.Sprite(texture);

}
*/
