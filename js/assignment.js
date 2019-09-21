
console.log("Without using new keyword");
console.log('========================================');
var pen={
    name:'cello',
    color:'blue',
    getName:function(){
      return this.name;
    }
}
var person={
    name:'mohanlal',
    color:'white',
    getColor:function(){
        return this.color;
    }
}
var car={
    brand:'audi',
    color:'tornado grey',
    getBrand:function(){
        return this.brand;
    }
}
var book={
    name:'xyz',
    pages:200,
    getPages:function(){
       return this.pages;
    }
}
var pencil={
    name:'camel',
    color:'yello',
    getName:function(){
        return this.name;
    }
}
console.log("Displaying person object");
console.log("***************************");
console.log("Name\t\t\tColor");
console.log(person.name+"\t\t"+person.getColor());

console.log("Displaying Pen object");
console.log("***************************");
console.log("Name\t\t\tColor");
console.log(pen.getName()+"\t\t"+pen.color);

console.log("Displaying Car object");
console.log("***************************");
console.log("Brand\t\t\tColor");
console.log(car.getBrand()+"\t\t"+car.color);

console.log("Displaying Pencil object");
console.log("***************************");
console.log("Name\t\t\tColor");
console.log(pencil.getName()+"\t\t"+pencil.color);
