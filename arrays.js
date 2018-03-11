// 2) - Arrays
var q2Numbers = [0,1,2,3,4,5,6,7,8,9];
    // a) - Reading from an array 
        // Your function should take two arguments, the array and the desired index
        //  and RETURN a single value (the element of the array)
        // Ensure all of the following constraints are met by your function.
        //   i) - Change the function arguments to something sensible
        //  ii) - Check the index values that they are less than the array length. 
        // iii) - If the value is not a valid value, return an error message.
        //  iv) - If the value is valid, return the array element of that index.
        var readFromArray = function(foo,bar){
        // Your code here
        }

// ---- Solution ---- //
        var readFromArray = function(arrayName,index){
            if(index <arrayName.length){
                return arrayName[index];
            }
            else{
                return 'Index exceeds array length'
            }
            
        };
// ----------------//
    // b) - Writing to an array
        // Write a function to take an array as an arugment, then create a new array and 
        // inside this new array, push the string version of the elements in the input array.
        // i)  - Create an empty array
        // ii) - Iterate over the q2Numbers array and push the string version of the numbers to a new array
        // **  - You can use an array function or a for loop to complete this task,
        //       but the original array must remain untouched.
        // iii) - Return the newly made array.
        // iv)  - Again make sure to rename the function argument to more a sensible variable name
    var writeNewArray = function(foo)
    {
        // Your code here
    };

 // ---- Solution ---- //
    var writeNewArray = function(arrayName){
        var q1stringyNumbers = [];

        for(var i = 0; i < arrayName.length; i++)
        {
            q1stringyNumbers.push(arrayName[i].toString());
        }
        return q1stringyNumbers;
    };
// ----------------//