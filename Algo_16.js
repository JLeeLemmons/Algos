// Anagram Algo 
// Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    //utilizing a helper function to only focus on lower case and alphameric values 
    let aCharMap = buildCharMap(stringA); 
    let bCharMap = buildCharMap(stringB); 

    //calling the Object class to pull all keys to address edge case. 
    if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
        return false; 
    }

    //iterating through aCharMap object to compare value amounts to bCharMap object. 
    for(let char in aCharMap){
        if(aCharMap[char] === bCharMap[char]){
            continue; 
        }else{
            return false; 
        }
    }
    return true; 
}

//helper function
function buildCharMap(str){
    const charMap = {}; 
    //iterating through parameter and converting into a global regex expression of only lower case, alphabetic characters. 
    for(let char of str.replace(/[^\w]/g, '').toLowerCase()){
        charMap[char] = charMap[char] + 1 || 1;
    }

    return charMap; 

}

console.log(anagrams('rail safety', 'fairy tales')); 