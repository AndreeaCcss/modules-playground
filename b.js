module.exports.myName = 'Andrew'
module.exports.dateOfBirth = '01-09-1980'
module.exports.sayHello = function(name) {
    console.log(`Hello ${name}! My name is ${module.exports.myName}`)
}

// console.log(module.exports)