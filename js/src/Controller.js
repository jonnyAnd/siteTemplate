function Controller(){
  console.log("extended Controller")

}

Controller.prototype = new CoreController();
Controller.prototype.constuctor = Controller;
Controller.prototype.parent = CoreController.prototype;

Controller.prototype.setupScenes = function(){

  console.log("moo"+this._view)


  //This is a test!!, move to game
  this.addScene("TEST_SCENE", new TestScene(), new TestSceneModel(), new TestSceneView());
  this.showScene("TEST_SCENE");
}
