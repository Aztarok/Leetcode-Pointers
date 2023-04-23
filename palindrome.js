let isPalindrome = function (s) {
    let reverse;
    let value = "";
    s = s.toLowerCase().replace(/\W|_/g, "");
  
    reverse = s.split("").reverse().join("");
    s === reverse ? (value = "true") : (value = "false");
    return value;
};

let str = "race a car";

console.log(isPalindrome(str));