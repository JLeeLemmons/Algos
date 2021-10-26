// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalizeWords(str){
    //placing str argument into an array called words. 
    const words = []; 
    //defining each index which ends when it hits a space
    for(let word of str.split(' ')){
        words.push(word[0].toUpperCase() + word.slice(1));
    }
    //joining the array into a string and separating at the space 
    return words.join(' '); 
}
console.log(capitalizeWords('a short sentence')); 


//Another way of solving algo w/ using a string object.
function capitalize(str){
    //***Not ideal as it is making an assumption that str[0] always needs to be capitalized, lacking a dynamic approach//
    let result = str[0].toUpperCase(); 
    //iterate through string, identify in if statement
    //where there is a space to the left of the current element
    //if true, set that current element to upper case or
    //continue to 'else'. 
    for(let i = 1; i < str.length; i++){
        if(str[i-1] === ' '){
            result += str[i].toUpperCase(); 
        }else{
            result += str[i]; 
        }
    }
    return result; 
}
console.log(capitalize('a short sentence')); 