function TestScene(){
  console.log("TestScene")

}

TestScene.prototype = new CoreScene();
TestScene.prototype.constuctor = TestScene;
TestScene.prototype.parent = CoreScene.prototype;
