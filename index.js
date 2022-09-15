// Your code here

class Polygon {
    constructor(sides) {
        this.sides = sides
        this.count = this.sides.length
    }
get countSides(){
    return this.sides.length;
}

get perimeter(){
    return this.sides.reduce((sum, side) => sum + side, 0);
} 
}

class Triangle extends Polygon {

    get isValid() {
    if (this.count !== 3) return;
    let side1 = this.sides[0]
    let side2 = this.sides[1]
    let side3 = this.sides[2]
    let con1=side1 + side2 > side3;
    let con2=side1 + side3 > side2;
    let con3=side3 + side2 > side1;
    return con1 && con2 && con3;
    }
}


class Square extends Polygon {

    get isValid() {
       
        if (this.count !== 4) return;
        let side1 = this.sides[0]
        let side2 = this.sides[1]
        let side3 = this.sides[2]
        let side4 = this.sides[3]
        return ((side1 === side2) && (side1 === side3) && (side1 === side4))
    }

    get area() {
        
        if (this.count !== 4) return;
        return this.sides[0] * this.sides[0]
    }
}


