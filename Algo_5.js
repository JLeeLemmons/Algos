//Find the kth largest element in an unsorted array. 
//Note that it is the kth largest element in the sorted order, not the kth distinct element. 

function kthLargestElement(arr, k){
    let arrSorted = arr.sort((a,b) => a - b); 
    return arrSorted[arrSorted.length - k]; 
}
console.log(kthLargestElement([3,2,1,5,6,4], 2)); 
console.log(kthLargestElement([3,2,3,1,2,4,5,5,6], 4)); 


//Keeping the array un-sorted and placing each value in a min-heap to find the kth largest value. 

function findKthLargest(array, k){
    const minHeap = createMinHeap(array.slice(0,k)); 
    // console.log(minHeap); 

    for(let i = k; i < array.length; i++){
        if(array[i] > minHeap[0]){
            performHeap(minHeap, 0, array[i]); 
        }
    }
    return minHeap[0]; 
}

//bit-wise operator ">> 2  ==> equivalent to dividing by 2"

function createMinHeap(array){
    for(let i = (array.length -1) >> 1; i >= 0; i--){
        performHeap(array, i);

    }
    return array; 
}

function performHeap(array, i = 0, value = array[i]){
    while(true){
        let x = i * 2 + 1; 
        console.log(x); 
        if( x + 1 < array.length && array[x] > array[x+1]){
            x++;
        }
        if(x >= array.length || value <= array[x]){
            break; 
        }
        array[i] = array[x]; 

        i = x; 
    }
    array[i] = value; 
}
const array1 = [3,2,1,5,6,4]; 
const array2 = [3,2,3,1,2,4,5,5,6]; 

console.log(findKthLargest(array1, 2)); 
console.log(findKthLargest(array2, 4)); 