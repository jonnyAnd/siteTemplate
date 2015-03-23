function TestSceneModel(){
  console.log("TestSceneModel")

}

TestSceneModel.prototype = new TestSceneModel();
TestSceneModel.prototype.constuctor = TestSceneModel;
TestSceneModel.prototype.parent = TestSceneModel.prototype;
