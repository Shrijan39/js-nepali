const accountID = 144553
let accountEmail = "shrijanpandey369@gmail.com"
var accountPassword = "369"
accountCity = "Butwal"
let accountState;
// accountID = 2 //not allowed

console.log(accountID);

/*
prefer not to use var because of issue in block scope and functional scope
*/

accountEmail = "ram@gmial.com"
accountPassword ="123"
accountCity = "ktm"

console.table([accountID,accountEmail,accountPassword,accountCity,accountState])