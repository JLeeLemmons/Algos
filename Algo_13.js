//Reversing an integer including negatives using built in functions. 

function reverseInt(n) {
    const reversed = n
      .toString()
      .split('')
      .reverse()
      .join(''); 
  
    // if(n < 0){
    //   return parseInt(reversed) * -1; 
    // }
  
    //Another way of putting this...

    return parseInt(reversed)*Math.sign(n); 
  }

  console.log(reverseInt(90)); 