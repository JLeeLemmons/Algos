//Given two strings a and b, determine if they are isomorphic. 

function areIsomorphic (string1, string2){
    let hashMap = {}; 

    if (string1.length !== string2.length){
        return false; 
    }
    for(let i =0; i < string1.length; i++){
        let character1 = string1[i]; 
        let character2 = string2[i]; 

        if (!hashMap[character1]){
            hashMap[character1] = character2;
        }
        else if (hashMap[character1] !== character2){
            return false; 
        }
    }
    return true; 
}
console.log(areIsomorphic('abc', 'def')); 
console.log(areIsomorphic('aa', 'ab')); 
console.log(areIsomorphic('aa', 'bb')); 