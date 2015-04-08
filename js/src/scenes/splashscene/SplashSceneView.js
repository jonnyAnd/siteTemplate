function SplashSceneView(){
}

SplashSceneView.prototype = new CoreSceneView();
SplashSceneView.prototype.constuctor = SplashSceneView;
SplashSceneView.prototype.parent = CoreSceneView.prototype;

SplashSceneView.prototype.init = function(){
	console.log("SplashSceneView.prototype.init()")
}


SplashSceneView.prototype.onSetAsCurrentScene = function(){
  console.log("SplashSceneView.prototype.onSetAsCurrentScene()")

    ///TEST pixi!
    var texture = PIXI.Texture.fromImage("resources/img/button.jpg");
    // create a new Sprite using the texture
    this.button = new PIXI.Sprite(texture);

    // center the sprites anchor point
    this.button.anchor.x = 0.5;
    this.button.anchor.y = 0.5;

    // move the sprite t the center of the screen
    this.button.position.x = 200;
    this.button.position.y = 150;

    this.addChild(this.button);

    // make the button interactive..
    this.button.setInteractive(true);
    this.button.buttonMode = true;
    this.button.click = this.onButtonClick.bind(this);

}

SplashSceneView.prototype.onButtonClick = function(data){



    this.gotoScene("TEST_SCENE");
}

SplashSceneView.prototype.updateRender = function(){

}
