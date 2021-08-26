//Rotate an array of n elements to the left by k steps. 

let leftRotate = function(arr,k){
    if(k < arr.length){
        arr.unshift(...arr.splice(k))
    }else{
        let i = 0; 
        while(i < k){
            arr.unshift(arr.splice(-1)); 
            i++;
        }
    }
    return arr; 
}

var array = [1,2,3,4,5,6,7]
var k_value = 2; 
console.log(leftRotate(array, k_value)); 


//Right rotating the array by k steps below
let rightRotate = function(arr,k){
    if(k < arr.length){
        //unshift() tells the arr input that whatever values are generated from within the method(spread operator and splicing arr.length -k) it will put those values to the front of the array which is shifting to the right in this case. 
        arr.unshift(...arr.splice(arr.length - k))
    }else{
        let i = 0; 
        while(i < k){
            arr.shift(arr.splice(1)); 
            i++;
        }
    }
    return arr; 
}

var array1 = [1,2,3,4,5,6,7]
var k_value1 = 2; 
console.log(rightRotate(array1, k_value1)); 






