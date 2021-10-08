//Give an input string, reverse the string word by word. -- Reverse String Order

function reverseString(string){
    let newString = ''; 
    let inputString = string.split(' '); 
    for(let i = inputString.length -1; i >=0; i--){
        newString += inputString[i] + ' '; 
    }
    return newString; 
}
console.log(reverseString('elf is my favorite Christmas character')); 


//reverse a single string by each char. 

function reverse(str) {
    let newString = ''; 
    for(let i = str.length-1; i >= 0; i--){
        newString += str[i]; 
    }
    return newString; 
}
console.log(reverse('hello')); 