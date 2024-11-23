{/* --------- Stack --------- */}

let myYoutubename = "mynameisdj"
let anothername = myYoutubename
anothername = "change my name"
console.log(myYoutubename);
console.log(anothername);

{/* --------- Heap --------- */}

let userOne = {
    email : "thisismtname.com",
    upi : "ybl@paytm"
}

let userTwo = userOne

userTwo.email = "djchange.com"

console.log(userOne.email);
console.log(userTwo.email);


