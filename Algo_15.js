// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    const newArray = []; 
    for(let element of array){
        const last = newArray[newArray.length -1]; 

        //Demonstrating how I am able to generate subarrays within the newArray object. 
        if(!last || last.length === size){
            newArray.push([element]); 
        }else{
            last.push(element); 
        }
    }
    return newArray; 

}

//Another approach using the built-in 'slice' tool, making copies of at each size and pushing subarrays within the newArray object. 

function sliceChunk(array, size){
    let newArray = []; 
    let index = 0; 

    while(index < array.length){
        newArray.push(array.slice(index,  index + size)); 
        index += size; 
    }
    return newArray; 
}
console.log(sliceChunk([1, 2, 3, 4], 2)); 