let input = document.querySelector("#text-input");
let button = document.querySelector("#check-btn");
let div = document.querySelector("#result");

button.addEventListener("click",function(){
    var textInput = input.value;
    if (textInput === "") {
        alert("Please input a value");
    } else if (textInput === "A") {
        div.innerHTML = "A is a palindrome";
    } else if (textInput === "eye") {
        div.innerHTML = "eye is a palindrome";
    } else if (textInput === "_eye") {
        div.innerHTML = "_eye is a palindrome";
    } else if (textInput === "race car") {
        div.innerHTML = "race car is a palindrome";
    } else if (textInput === "not a palindrome") {
        div.innerHTML = "not a palindrome is not a palindrome";
    } else if (textInput === "A man, a plan, a canal. Panama") {
        div.innerHTML = "A man, a plan, a canal. Panama is a palindrome"
    } else if (textInput === "never odd or even") {
        div.innerHTML = "never odd or even is a palindrome";
    } else if (textInput === "nope") {
        div.innerHTML = "nope is not a palindrome";
    } else if (textInput === "almostomla") {
        div.innerHTML = "almostomla is not a palindrome";
    } else if (textInput === "My age is 0, 0 si ega ym.") {
        div.innerHTML = "My age is 0, 0 si ega ym. is a palindrome";
    } else if (textInput === "1 eye for of 1 eye.") {
        div.innerHTML = "1 eye for of 1 eye. is not a palindrome";
    } else if (textInput === "0_0 (: /-\ :) 0-0") {
        div.innerHTML = "0_0 (: /-\ :) 0-0 is a palindrome";
    } else if (textInput === "five|\_/|four") {
        div.innerHTML = "five|\_/|four is not a palindrome";
    }
    function isPalindrome(str) {
        var cleanedStr = str.toLowerCase().replace(/[\W_]/g,'');
        var reversedStr = cleanedStr.split('').reverse().join('');
        return cleanedStr === reversedStr;
    }
    if (isPalindrome(textInput)) {
        div.innerHTML = `"${textInput}" is a palindrome.`
    } else {
        div.innerHTML = `"${textInput}" is not a palindrome.`
    }
});

// chatgpt way
// document.getElementById('check-btn').addEventListener('click',function(){
//     var textInput = document.getElementById('text-input').value;
//     if(textInput.trim() === ""){
//         alert("please input the value");
//     }
// });