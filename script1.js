var c = prompt("choose from red,green or blue");

var n = prompt("enter your name");
var isName = /^[a-zA-Z]+$/.test(n);

while (!isName) {
    n = prompt("enter your name");
    isName = /^[a-zA-Z]+$/.test(n);
    if (isName) {
        console.log('%cWelcome dear guest ' + n, 'color:' + c);
    }
}

var mobile = prompt("enter your mobile number");
var isMobile = /^(010|011|012)[0-9]{8}$/.test(mobile);

while (!isMobile) {
    mobile = prompt("enter your mobile number");
    isMobile = /^(010|011|012)[0-9]{8}$/.test(mobile);
    if (isMobile) { console.log('%cYour mobile number is ' + mobile, 'color:' + c); }
}

var telephone = prompt("enter your telephone number");
var isTel = /^[0-9]{8}$/.test(telephone);

while (!isTel) {
    telephone = prompt("enter your telephone number");
    isTel = /^[0-9]{8}$/.test(telephone);
    if (isTel) {
        console.log('%cYour telephone number is ' + telephone, 'color:' + c);
    }
}
var email = prompt("enter yoyr email");
var isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

while (!isEmail) {
    email = prompt("enter yoyr email");
    isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (isEmail) {
        console.log('%cYour email is ' + email, 'color:' + c);
    }
}
var age = prompt("enter your age");
var isAge = /^[1-9]{2}$/;

while (!isAge) {
    age = prompt("enter your age");
    isAge = /^[1-9]{2}$/;
    if (isAge) {
        console.log('%cYour age is ' + age, 'color:' + c);
    }
}









