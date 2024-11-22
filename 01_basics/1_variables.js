const accountId = 12345
let accountEmail = "titanboi@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 45678  // not allowed

accountEmail = "dj@gmail.com"
accountPassword = "abcde"
accountCity = "Mexico"

console.log(accountId);

// Prefer not to say
// beacuse of issue in block scope and functional scope



console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

