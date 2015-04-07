function TestScene2(){
  console.log("TestScene")

}

TestScene2.prototype = new CoreScene();
TestScene2.prototype.constuctor = TestScene2;
TestScene2.prototype.parent = CoreScene.prototype;
