const mymodule=require('./addmodule')


var x=100;
var y=20;
var z=mymodule.addnum(x,y);
var a=mymodule.subnum(x,y);
var b=mymodule.divnum(x,y);
var c=mymodule.multiplynum(x,y);
console.log(z);
console.log(a);
console.log(b);
console.log(c);