function TestSceneView2(){
  console.log("TestSceneView2");
}

TestSceneView2.prototype = new CoreSceneView();
TestSceneView2.prototype.constuctor = TestSceneView2;
TestSceneView2.prototype.parent = CoreSceneView.prototype;

TestSceneView2.prototype.init = function(){
  console.log("TEST SCENE VIEW--2!!")
}

TestSceneView2.prototype.onSetAsCurrentScene = function(){
  console.log("onSetAsCurrentScene")


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

	this.addChild(this.murrey);

  // make the button interactive..
	this.murrey.setInteractive(true);
  this.murrey.buttonMode = true;
	this.murrey.click = this.onClickMurrey.bind(this);//sorry buy js is mental

}

TestSceneView2.prototype.onClickMurrey = function(data){
  this.gotoScene("TEST_SCENE");
}


TestSceneView2.prototype.updateRender = function(){
  //console.log("updateRender")
  this.murrey.rotation -= .01;

}

