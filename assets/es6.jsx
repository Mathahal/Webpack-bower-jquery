import { Test1, testtest } from "./test.jsx"

console.log(testtest)

var $ = require("jquery"),
    _ = require("underscore")


function Person() {
  this.age = 0;
  setInterval(()=> {
    $(".test").each(( a, b )=>{
      console.log($(b).text())
      console.log(this.age)
    })
  }, 1000);
}

new Person()