function TestSceneView(){
  console.log("TestSceneView");
}

TestSceneView.prototype = new CoreSceneView();
TestSceneView.prototype.constuctor = TestSceneView;
TestSceneView.prototype.parent = CoreSceneView.prototype;

TestSceneView.prototype.init = function(){
  console.log("TEST SCENE VIEW!!")
}

TestSceneView.prototype.onSetAsCurrentScene = function(){
  console.log("onSetAsCurrentScene")


  ///TEST pixi!
  var texture = PIXI.Texture.fromImage("resources/img/img.jpg");
	// create a new Sprite using the texture
	this.murrey = new PIXI.Sprite(texture);

  // center the sprites anchor point
	this.murrey.anchor.x = 0.5;
	this.murrey.anchor.y = 0.5;

	// move the sprite t the center of the screen
	this.murrey.position.x = 200;
	this.murrey.position.y = 150;

	this.addChild(this.murrey);

  // make the button interactive..
	this.murrey.setInteractive(true);
  this.murrey.buttonMode = true;
	this.murrey.click = this.onClickMurrey.bind(this);//sorry buy js is mental

}

TestSceneView.prototype.onClickMurrey = function(data){
  this.gotoScene("TEST_SCENE2");
}


TestSceneView.prototype.updateRender = function(){
  //console.log("updateRender")
  this.murrey.rotation -= .01;

}

