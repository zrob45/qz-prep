
var car = {};

//Global variable to store cardata
var data={};

//Read data from carprice json and assign to variable data and 
//retun the data in value

car.readCarData=function() {
    console.log("readCarData");
    // Write your code here 


    return data;
};
//Find the maximum priced car in the data given in carprice.json
// and return the same
car.maxCarPrice = function() {
    var maxCarPrice=0;
   //write your code here
   
    return maxCarPrice;

};

//Find the price of one car as passed as argument and return  the out put in console
car.findCarPrice = function(carname,model,color) {
    var carprice=0;
   // write your code here
   return carprice;
};


/// Calling the function in the order.
car.readCarData();
car.maxCarPrice();
car.findCarPrice("BMW","series 3","red");