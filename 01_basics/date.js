let myDate = new Date()
console.log(myDate.toString())
//console.log(myDate.toDateString())
//console.log(myDate.toISOString())
//console.log(myDate.toLocaleDateString())
console.log(myDate.toJSON())

//let myCreatedDate = new Date(2023, 0, 23)   
let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString());


let newDate = new Date()
console.log(newDate.getMonth())
console.log(newDate.getDay());
console.log(newDate.getDate());