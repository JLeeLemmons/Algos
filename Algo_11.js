//Fisher-Yates Shuffle
function getRandom(floor, ceiling) {
    return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
    
  }
  
  function shuffle(array) {
  
    if (array.length <= 1) return;
  
    for (let indexWeAreChoosingFor = 0;
      indexWeAreChoosingFor < array.length - 1; indexWeAreChoosingFor++) {
  
    //Must be a value that continues with the shuffling of the array, cannot update/consider prior indeces. 
      const randomChoiceIndex = getRandom(indexWeAreChoosingFor, array.length - 1);
  
      // Place our random choice in the spot by swapping
      if (randomChoiceIndex !== indexWeAreChoosingFor) {
        const valueAtIndexWeChoseFor = array[indexWeAreChoosingFor];
        array[indexWeAreChoosingFor] = array[randomChoiceIndex];
        array[randomChoiceIndex] = valueAtIndexWeChoseFor;
      }
    }
    return array;
  }

  console.log(shuffle([0,1,2,3,4])); 

