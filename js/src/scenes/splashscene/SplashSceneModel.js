function SplashSceneModel(){
}

SplashSceneModel.prototype = new CoreSceneModel();
SplashSceneModel.prototype.constuctor = SplashSceneModel;
SplashSceneModel.prototype.parent = CoreSceneModel.prototype;
