
var car = {};
//Find the price of one car as passed as argument and return  the out put and print in console
car.findCarPrice = function(carname,model,color) {
    console.log("findCarPrice");
    var carprice=0;
   // write your code here


   // printing the return value in console
   console.log("carprice.........."+carprice);
   return carprice;
};

//Find the maximum priced car name , its model, number of doors, its price
// in the data given in carprice.json
// and return all the details in a object
//carname:....
//model:...
//
car.maxPricedCar = function() {
    console.log("maxPricedCar");
    var maxPricedCar={name:null,model:null,price:null};
   //write your code here
  

    // printing the return value in console
    console.log("maxPricedCar.........."+maxPricedCar);
    return maxPricedCar;

};
//Update the carDATA data variable given below
//Add a new car "Honda" with following details in the same format
//model:Civic
//doors:4
//price:18840
car.updateCarData= function(){
   
//Write your code here

}

/// Calling the function
//Find the price of BMW , series 3,  red color car
car.findCarPrice("BMW","series 3","red");
//Find and return an object with the max priced 
//car name, model and price
car.maxPricedCar();

//Data is given below for 3 car company Nissan, Ford and BMW

var carDATA= {
    "cars": {
        "Nissan": [
            {"model":"Sentra", "doors":4, "price": 17000},
            {"model":"Maxima", "doors":4,  "price": 18000},
            {"model":"GTR", "doors":2,  "price": 210000},
            {"model":"Altima", "doors":2,  "price": 23300},
            {"model":"LEAF", "doors":2,  "price": 29900},
            {"model":"Maxima", "doors":2,  "price": 33270},
            {"model":"Versa", "doors":2,  "price": 12110},
            {"model":"Juke", "doors":2,  "price": 20900}
        ],
        "Ford": [
            {"model":"Taurus", "doors":4, "price": 21000},
            {"model":"Escort", "doors":4,  "price": 22000},
            {"model":"Expedition", "doors":4,  "price": 64447},
            {"model":"Fusion", "doors":4,  "price": 24000},
            {"model":"Fiesta ", "doors":4,  "price": 13995},
            {"model":"EcoSport ", "doors":4,  "price": 20995},
            {"model":"Edge ", "doors":4,  "price": 30215},
            {"model":"Explorer ", "doors":4,  "price": 32985}
        ],

        "BMW": [
            {"model":"series 3", "doors":4, 
                "color":[ 
                {"id":"red", "price": 35000 },
                {"id":"silver", "price": 40000 }]
            },
            {"model":"series 6", "doors":[
                {"door":"2", "price": 86700 },
                {"door":"4", "price": 70200 }]
            }
        ]
    }
}