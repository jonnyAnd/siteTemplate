function SplashScene(){
}

SplashScene.prototype = new CoreScene();
SplashScene.prototype.constuctor = SplashScene;
SplashScene.prototype.parent = CoreScene.prototype;

