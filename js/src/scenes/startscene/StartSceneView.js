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


  ///TEST pixi!
  var texture = PIXI.Texture.fromImage("resources/img/img2.jpg");
	// create a new Sprite using the texture
	this.murrey = new PIXI.Sprite(texture);

  // center the sprites anchor point
	this.murrey.anchor.x = 0.5;
	this.murrey.anchor.y = 0.5;

	// move the sprite t the center of the screen
	this.murrey.position.x = 200;
	this.murrey.position.y = 150;

	stage.addChild(this.murrey);

  // make the button interactive..
	this.murrey.setInteractive(true);
  this.murrey.buttonMode = true;
	this.murrey.click = this.onClickMurrey.bind(this);//sorry buy js is mental

}

StartSceneView.prototype.onClickMurrey = function(data){
  this.gotoScene("TEST_SCENE");
}


StartSceneView.prototype.updateRender = function(){
  //console.log("updateRender")
   this.murrey.rotation -= .01;

}

