//Print the #'s from 1 to 100 and for multiples of 3 print Fizz instead of the # and for multiples of 5 print Buzz --- FIZZ BUZZ

//Time Complexity: O(n)

function fizzBuzz(){
    for(let i = 1; i <= 100; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log('Fizz Buzz'); 
        }else if( i % 3 === 0 ){
            console.log('Fizz'); 
        }else if( i % 5 === 0){
            console.log('Buzz'); 
        }else{
            console.log(i); 
        }
    }
}
//nothing is returned, I am putting this into a function to stay in the habit of writing algos in function form. 
fizzBuzz(); 

