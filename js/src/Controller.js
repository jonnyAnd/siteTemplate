function Controller(){
  console.log("extended Controller")

}

Controller.prototype = new CoreController();
Controller.prototype.constuctor = Controller;
Controller.prototype.parent = CoreController.prototype;

Controller.prototype.setupScenes = function(){

  //This is a test!!, move to game
  this.addScene("TEST_SCENE2", new TestScene2(), new TestSceneModel2(), new TestSceneView2());


    this.addScene("TEST_SCENE", new TestScene(), new TestSceneModel(), new TestSceneView());
  this.addScene("SPLASH_SCENE", new SplashScene(), new SplashSceneModel(), new SplashSceneView());


  //this.addScene("START_SCENE", new StartScene(), new StartSceneModel(), new StartSceneView());


  //this.showScene("TEST_SCENE");





  this.showScene("SPLASH_SCENE");
}
