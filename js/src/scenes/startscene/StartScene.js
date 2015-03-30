function StartScene(){
  console.log("StartScene")

}

StartScene.prototype = new CoreScene();
StartScene.prototype.constuctor = StartScene;
StartScene.prototype.parent = CoreScene.prototype;
