const accountId = 14453
let accountEmail = "avtarrsinghu419@gmail.com"
var accountPass = "12345"
accountCity = "jaipur"
let accountState;



// accountId = 2 // not allowed bcz const cannot be changed 

accountEmail = "hc@m.com"
accountPass = "123"
accountCity = "Amritsar"

console.log(accountId);
console.table([accountId, accountEmail, accountPass, accountCity, accountState])
/*
Prefer not to use var
because of the issue in block scope and functional scope
*/