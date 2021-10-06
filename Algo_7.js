//Complete a function where each array within an array is another depth and I want to find the total of all values multiplied by the depth of any arrays within an array. 

function findDepth(list, depth){
    //Initializing count variable
    let count = 0; 
    //Iterating through list parameter to identify if there is an array in an array and if so, recursive call adding 1 to depth. 
    list.forEach(element => {
        if(Array.isArray(element)){
            count += findDepth(element, depth + 1)
        }else{
            count += element; 
        }
    });
    return count * depth; 
}
//In this context, 1st index is called one time, 2nd depth in the call frame shows: [1,2] && [1], and the 3rd call frame is one time with [1]
//Amounts to: (3x1) + ((1+2)x2) + (1x2) + (1x3) = 15
let totalValue = findDepth([3,[1,2,[1]]], 1); 

console.log(totalValue); 


