const name = "suraj"
const repCount = 97

console.log(`My name is ${name} and my repition count is ${repCount}`)

const gameName = new String(`surajj-kp-512`)

console.log(name.toUpperCase()) // upper case for specified string does not alter original 
console.log(gameName.length)
console.log(`${name}`.toUpperCase())
console.log(gameName)
console.log(name)

const newString = gameName.substring(0, 3) // does not take initial negative value 
console.log(newString)

const anotherString = gameName.slice(-3, 4)
console.log(anotherString);

const anotherStringwithSpaces = "     suraj-kp    "
console.log(anotherStringwithSpaces);
console.log(anotherStringwithSpaces.trim());


const url = "https://surajkp.com/suraj%20kp"

console.log(url.replace(`%20`,`-`))
console.log(url)
console.log(url.includes(`suraj`));

console.log(gameName.split(`-` ));

