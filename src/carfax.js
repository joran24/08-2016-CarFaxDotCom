var database = database.carDataBase
var carData = database.carData;
console.log(carData);
// your code here



toolbelt.loop([1, 2, 3, 4, 3], function(element){
	// console.log(element);
 });

numArray = [1,2,3,4,5]

toolbelt.transform(numArray, function(number){
	// console.log(number * 5)

})

//build out priceParser, that will traverse the carData and return a new list containing the price of each car.

// Invoking carData on the database object
var priceParser = function(carDataObject){
    //Declaring a new Array to store make and model list from carData
    var carAndPriceArray = [];

    //Loop through car data and access the 
    toolbelt.loop(carDataObject,function(carObject){

    	carAndPriceArray.push(carObject.model + ", " + "$"+carObject.price);

    })
 
   return carAndPriceArray;    
}

console.log(priceParser(carData));

// build out our function, yearParser, that will traverse the carData and return a new list containing the year of each car.

var yearParser = function(carDataObject){
	var carYearArray = []
	toolbelt.loop(carDataObject, function(carObject){

		carYearArray.push(carObject.year)
		// carYearArray.push(carObject.year+ " "+carObject.model)
	}) 

	return carYearArray
}

console.log(yearParser(carData))


//Build averageYearCalculator which traverses through a list and returns the average age of our inventory.

//Create a function that will find the average age of the car inventory
var averageAgeCalculator = function(carDataObject){
    //We will need to transform through the database and access the year of each car
    var testVar = yearParser(carData)
    var sum = 0
        toolbelt.loop(testVar, function(carYear){
        sum += (2016 - carYear)/(testVar.length);
        // sum = sum + (2016 - carYear)/(testVar.length);
    });
    
    return sum
}
console.log(averageAgeCalculator(carData));

// Use averageAgeCalculator on our list of currentyears and save our average year to our database at the key currentAverageAge.

