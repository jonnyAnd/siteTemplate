function StartSceneModel(){
  console.log("TestSceneModel")

}

StartSceneModel.prototype = new CoreSceneModel();
StartSceneModel.prototype.constuctor = StartSceneModel;
StartSceneModel.prototype.parent = CoreSceneModel.prototype;
