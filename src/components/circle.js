// import using require

// declare class
var Shape= require('./shape);
 class Circle extends Shape{
                   constructor(name){
  super(name);
}
calculateArea(radius){
  return Math.PI*Math.pow(radius,2);
}
}
module.exports=Circle;

// export class using module.exports
