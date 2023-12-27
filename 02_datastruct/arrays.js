//array 

const myArr = [0,1,2,3,4,6]
const myHeroes = ["iron man", "black widow", "hulk"]
console.log(myArr[3]);


myArr.push(6)
console.log(myArr)

//console.log(myArr.includes(9));
//console.log(myArr.indexOf(4))




const popped = myArr.pop()
console.log(myArr)
console.log(`Popped element is ${popped} `)

myArr.shift()
console.log(myArr)