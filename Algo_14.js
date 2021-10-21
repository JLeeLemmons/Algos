//Find the max number of char's within a string utilizng an object and iterating through this string with a 'for/of' loop. 
//iterating through the object utizlizing a 'for/in' loop. 

function maxNumOfChars(string){
    let objChars = {}; 
    let max = 0; 
    let maxChar = ''; 

    for(let char of string){
        if(!objChars[char]){
            objChars[char] = 1; 
        }else{
            objChars[char]++; 
        }
    }
    for(let char in objChars){
        if(objChars[char] > max){
            max = objChars[char]; 
            maxChar = char; 
        }
    }
    return maxChar; 
}

console.log(maxNumOfChars('aaaaabbbccdd')); 


