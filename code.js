var obj1 = {
    name: "Roshan",
    sayName: function (){
        console.log(this.name)
    }
}

var sayName = obj1.sayName;
 var obj2 = {
    name: "Alice",
    sayName
 }
 
 obj2.sayName()