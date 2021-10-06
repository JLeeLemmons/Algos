//Given an array of integers, find the highest product you can get from three of the integers. 

function findHighestProductForThreeInts(arrayOfInts){
    let highestTwoValues; 
    let highesProduct; 
    arrayOfInts = arrayOfInts.sort((a,b) => a-b); 
    //considering negatives, which two values are greater after sorting array. 
    if((arrayOfInts[0] * arrayOfInts[1]) > (arrayOfInts[arrayOfInts.length -1] * arrayOfInts[arrayOfInts.length - 2])){
        highestTwoValues = (arrayOfInts[0] * arrayOfInts[1]); 
    }else{
        highestTwoValues = (arrayOfInts[arrayOfInts.length -1] * arrayOfInts[arrayOfInts.length - 2]); 
    }

    highesProduct = (highestTwoValues * arrayOfInts[arrayOfInts.length - 3]); 
    
    return highesProduct; 
}
console.log(findHighestProductForThreeInts([-6, -6, 4, 3, 2, 1])); 




//Not utilizing a sorting alorithm in approach below: 

function highestProductOf3(arrayOfInts) {
    if (arrayOfInts.length < 3) {
      return 'Less than 3 items, need 3 items to find product of 3 largest values!';
    }
  
    //Finding highest and lowest values from the first two indeces. 
    let highest = Math.max(arrayOfInts[0], arrayOfInts[1]);
    let lowest  = Math.min(arrayOfInts[0], arrayOfInts[1]);
  
    //Finding highest and lowest products of the first two indeces. 
    let highestProductOf2 = arrayOfInts[0] * arrayOfInts[1];
    let lowestProductOf2  = arrayOfInts[0] * arrayOfInts[1];
  
    // Set highest product from the first three indeces. 
    let highestProductOf3 = arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[2];
  
    //run a for-loop to identify at index 2 to compare if the value at index 2 is smaller or larger then the current highest/lowest values.
    for (let i = 2; i < arrayOfInts.length; i++) {
      const current = arrayOfInts[i];
  
      // It's either the current highest
      // or the current times the highest product of two
      // or the current times the lowest product of two
      highestProductOf3 = Math.max(
        highestProductOf3,
        current * highestProductOf2,
        current * lowestProductOf2
      );
  
      // Identify new highestProductOf2
      highestProductOf2 = Math.max(
        highestProductOf2,
        current * highest,
        current * lowest
      );
  
      // Identifying new lowestProductOf2
      lowestProductOf2 = Math.min(
        lowestProductOf2,
        current * highest,
        current * lowest
      );
  
      // Do we have a new highest?
      highest = Math.max(highest, current);
  
      // Do we have a new lowest?
      lowest = Math.min(lowest, current);
    }
  
    return highestProductOf3;
  }

  console.log(highestProductOf3([-6, -6, 4, 3, 2, 1])); 