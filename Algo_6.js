//If an element is 0, set its row and column to 0 and complete this process 'In-Place'. 
 
function setZeros(matrix){
    for(var row = 0; row < matrix.length; row++){
        for(var column = 0; column < matrix[0].length; column++){
            if(matrix[row][column] === 0 && 1/matrix[row][column] === Infinity){
                for(var x = 0; x < matrix.length; x++){
                    matrix[x][column] = matrix[x][column]&& -0;   
                    console.log(matrix[x][column]); 
                }
                for(var y = 0; y < matrix[0].length; y++){
                    matrix[row][y] = matrix[row][y] && -0; 
                }
            }
        }
    }
    return matrix;
}

//Another way of printing the results of the above function when filtered through. 

// function printMatrix(matrix){
//     for(var row = 0; row < matrix.lenght; row++){
//         var x = " "; 
//         for(var column = 0; column < matrix[0].length; column++){
//             x += matrix[row][column]; 
//         }
//         console.log(x); 
//     }
// }


//multiple test cases

var matrix = [[1, 1, 1, 1], [1, 0, 1, 1], [1, 1, 1, 1]]; 
// var matrix = [[1, 1, 0, 1], [1, 1, 1, 0], [1, 1, 0, 1]];

console.log(setZeros(matrix));



