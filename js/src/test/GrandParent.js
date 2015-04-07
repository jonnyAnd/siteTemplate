function GrandParent(){
}

GrandParent.prototype = new ClassCore();
GrandParent.prototype.constuctor = GrandParent;
GrandParent.prototype.parent = ClassCore.prototype;

GrandParent.prototype.init = function(){
	console.log("GrandParent.prototype.init()")



  var p = new Parent();


  p.addEventListener("SET_SCENE_EVENT", this.testfunc.bind(this));





  p.init()


}



GrandParent.prototype.testfunc = function(){
  console.log("GrandParent.prototype.testfunc()- HERE HERE HERE");



}
