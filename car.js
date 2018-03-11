
var car = {};

//Global variable to store cardata
var data={};

//Read data from carprice json and assign to variable data and 
//retun the data in value
//Use fs.readfilesync  to read the Json file

car.readCarData=function() {
    console.log("readCarData");
    // Write your code here 


    return data;
};
//Find the maximum priced car, its model and all other features color,door etc
// in the data given in carprice.json
// and return the same
car.maxPricedCar = function() {
    var maxPricedCar;
   //write your code here
   
    return maxPricedCar;

};

//Find the price of one car as passed as argument and return  the out put in console
car.findCarPrice = function(carname,model,color) {
    var carprice=0;
   // write your code here
   return carprice;
};


/// Calling the function
car.readCarData();
car.findCarPrice("BMW","series 3","red");
car.maxPricedCar();
