function TestSceneModel2(){
  console.log("TestSceneModel")

}

TestSceneModel2.prototype = new TestSceneModel2();
TestSceneModel2.prototype.constuctor = TestSceneModel2;
TestSceneModel2.prototype.parent = TestSceneModel2.prototype;
