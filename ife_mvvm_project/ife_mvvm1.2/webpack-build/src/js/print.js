export default function printMe(){
    // console.log('Chile me show!');
    // console.error('ERROR!');
    // console.info(a);
    // console.info('Updating print.js...');
    
    let [a, b, c] = [4, 5, 6];

    console.info('Updating new print.js...');
    console.info(a, b, c);
}

class Point{
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y);
        this.color = color; // 正确
    }
    toString(){
        return `${this.x} + ${this.y} + ${this.color}`;
    }
}

let colorPoint = new ColorPoint('1','2','#fff');
console.info(colorPoint.toString());
