class Shape{
    constructor(name, totalSides, totalCorners){
        this.name = name;
        this.totalSides = totalSides;
        this.totalCorners = totalCorners;
    }

    displayShapeDetails(){
        console.log('This shape is called a - ' + this.name + '. It has - ' + this.totalSides + ' sides and ' + this.totalCorners + ' corners.');
    }
}

class Rectangle extends Shape{
    constructor(name, totalSides, totalCorners, length, width){
        super(name, totalSides, totalCorners);

        this.length = length;
        this.width = width;
    }

   displayRectangleDetails(){
       this.displayShapeDetails();

       console.log('It has a length of - ' + this.length + ' and a width of - ' + this.width + ' cms.');
   }
}

let rect = new Rectangle('rectangle', 4, 4, 16, 8);

rect.displayRectangleDetails();