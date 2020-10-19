function palindrome(data) {

    let dataString = data;
    let revereString= data.split("").reverse().join("");
    if(dataString === revereString) {
        return 1
    }

    return 0;
}


let response = palindrome("1212121");
console.log(response);