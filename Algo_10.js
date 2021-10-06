//Given all three arrays, write a function to check that my service is first-come, first-served. 
//All food should come out in the same order customers requested it. 

//Utilized a recursive function for the below algorithm 
function inOrderByIndex(takeOut, dineIn, servedOrders){
    if(takeOut.length === 0) return "Needs to have a value"; 
    if(dineIn.length === 0) return "Needs to have a value"; 
    for(let i = 0; i < servedOrders.length; i++){
        if(takeOut[0] === servedOrders[0]){
            return inOrderByIndex(takeOut[i+1], dineIn, servedOrders[i+1]); 
        }else if(dineIn[0] === servedOrders[0]){
            return inOrderByIndex(takeOut, dineIn[i+1], servedOrders[i+1]); 
        }else{
            return false; 
        }
    }
    return true; 
}

console.log(inOrderByIndex([17,8,24], [12,19,2], [17,8,12,19,24,2])); 



//Iterative approach, more efficient as it doesn't consumer O(n)space compared to a recursive call. 

function isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders) {
    var takeOutOrdersIndex = 0;
    var dineInOrdersIndex = 0;
    var takeOutOrdersMaxIndex = takeOutOrders.length - 1;
    var dineInOrdersMaxIndex = dineInOrders.length - 1;

    for (var i = 0; i < servedOrders.length; i++) {
        var order = servedOrders[i];

        if (takeOutOrdersIndex <= takeOutOrdersMaxIndex &&
                order === takeOutOrders[takeOutOrdersIndex]) {
            takeOutOrdersIndex++;

        } else if (dineInOrdersIndex <= dineInOrdersMaxIndex &&
                order === dineInOrders[dineInOrdersIndex]) {
            dineInOrdersIndex++;

        } else {
            return false;
        }
    }

    // check for any extra orders at the end of takeOutOrders or dineInOrders
    if (dineInOrdersIndex != dineInOrders.length ||
           takeOutOrdersIndex != takeOutOrders.length) {
        return false;
    }

    // all orders in servedOrders have been "accounted for"
    return true;
}

console.log(isFirstComeFirstServed([17,8,24], [12,19,2], [17,8,12,19,24,2])); 




