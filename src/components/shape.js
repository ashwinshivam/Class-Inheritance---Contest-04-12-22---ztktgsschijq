// declare class

// export class using module.exports
class Shape{
  constructor(name){
    this.name;
  }
  drawShape(){
    return `${this.name}is drawn`;
    }
    calculateArea(length,width){
    return 2*(length*width);
    }
    colour(colour){
    return `${colour} is Applied on ${this.name}`;
    }
    }
    module.exports = Shape;
