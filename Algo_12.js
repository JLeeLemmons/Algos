//isPalindrome
function palindrome(str) {
    let reverseString = reverse(str); 
    for(let i = 0; i < str.length; i++){
        if(str[i] === reverseString[i]){
            continue; 
        }else{
            return false; 
        }
    }
    return true; 
}


//helper function
function reverse(str) {
    let newString = ''; 
    for(let i = str.length-1; i >= 0; i--){
        newString += str[i];
    }
    return newString; 
}

console.log(palindrome(' abba ')); 



//Another Way is utilizing JS Built In Functions

function isPalindrome(string){
    let reverseString = string.split('').reverse().join(''); 
    return string === reverseString; 
}
console.log(isPalindrome('qwew')); 
