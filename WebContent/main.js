var app = angular.module('myApp', []);

//app.directive('cityPizza',function() {
//			return {
//				restrict : 'A',
//				scope : {
//					pizza : '='
//				},
//				replace : true,
//				controller : function ($scope) {
//					$scope.getPizza = function(allPizza){
//						var pizzalist = [];
//						angular.forEach(allPizza,function(value){
//							pizzalist.push(value);
//						});
//							for(var i =1;i<pizzalist.length-1;i++){
//								$('#pizzalist').append('<div>'+pizzalist[i]+'</div>');
//							}
//						
//					}
//				},
//				link : function(scope, elem, attr) {
//					elem.on('click',function() {
//						scope.getPizza(scope.pizza);
//					});
//					
//				}
//			}
//});



app.controller('myController', function($scope) {

	
//	$scope.cities =  [{
//		cityname : 'new york',
//		
//			
//		
//			cheese : 'new york style mozarella cheese pizza'
//		,
//		
//			veggie : 'new york style mashroom and tomatoes'
//		,
//		
//			meat : 'new york style peparoni cheese pizza'
//		
//				
//		
//	}
//	, {
//		cityname : 'los angeles',
//		
//     			cheese : 'LA style mozarella cheese pizza'
//     		,
//     		
//     			veggie : 'LA style mashroom and tomatoes'
//     		,
//     		
//     			meat : 'LA style peparoni cheese pizza'
//     		
//     		 
//     		
//	}] ;


	
 $scope.choose = false;
 $scope.city = false;
 $scope.pContent = true;
 $scope.newyorkShow = false;
 $scope.chicagoShow = false;
 $scope.laShow = false;

 // City List - locations
 $scope.locations = function() {
 $scope.choose = true;
 $scope.city = true;
 $scope.pContent = false;
 $scope.cityName = 'Choose a City';
 $scope.newyorkShow = false;
 $scope.nyCheesePizza = false;
 $scope.nyVeggiePizza = false;
 $scope.nyMeatPizza = false;
 $scope.nyPizzaGoback = false;
 $scope.gotoCity = false;
 $scope.laShow = false;
 $scope.laCheesePizza = false;
 $scope.laVeggiePizza = false;
 $scope.laMeatPizza = false;
 $scope.laPizzaGoback = false;
 }

 $scope.gotoCity = false;
 
 // New York pizza list
 $scope.newyork = function() {
 $scope.newyorkShow = true;
 $scope.city = false;
 $scope.gotoCity = true;
 
 $scope.cityName = 'Which one you like';

 }
 $scope.gotoCity = false;
 // Button Go back to city list
 $scope.gotoCityList = function() {
 $scope.newyorkShow = false;
 $scope.gotoCity = false;
 $scope.locations();
 }

 $scope.nyCheesePizza = false;
 // NY Cheese Pizza
 $scope.newyorkCheese = function() {
$scope.gotoCity = false;
 $scope.newyorkCheesePizza = 'NY Mozarella Cheese Pizza  will arrive in 15 mins';
 $scope.cityName ='Your pizza is in the oven';
 $scope.newyorkShow = false;
 $scope.city = false;
 $scope.nyCheesePizza = true;
 $scope.nyPizzaGoback = true;
 $scope.nyVeggiePizza = false;
 $scope.nyMeatPizza = false;
 }

 $scope.nyVeggiePizza = false;
 // NY Veggie Pizza
 $scope.newyorkVeggie = function() {
 $scope.newyorkVeggiePizza = 'NY Mozarella Cheese, Mashroom, Olive Pizza  will arrive in 15 mins';
 $scope.cityName ='Your pizza is in the oven';
 $scope.newyorkShow = false;
 $scope.city = false;
 $scope.nyVeggiePizza = true;
 $scope.nyMeatPizza = false;
 $scope.nyPizzaGoback = true;
 $scope.gotoCity = false;
 }

 $scope.nyMeatPizza = false;
 // NY Meat Pizza
 $scope.newyorkMeat = function() {
 $scope.newyorkMeatPizza = 'NY Mozarella Cheese, Peparroni, Onion Pizza  will arrive in 15 mins' ;
 $scope.cityName ='Your pizza is in the oven';
 $scope.newyorkShow = false;
 $scope.city = false;
 $scope.nyCheesePizza = false;
 $scope.nyVeggiePizza = false;
 $scope.nyMeatPizza = true;
 $scope.nyPizzaGoback = true;
 $scope.gotoCity = false;
 }

 $scope.nyPizzaGoback = false;
 // go back to NY Pizza Menu
 $scope.nyPizzaGobackButton = function() {
 $scope.newyorkShow = true;
 $scope.city = false;
 $scope.nyPizzaGoback = false;
 $scope.nyCheesePizza = false;
 $scope.nyVeggiePizza = false;
 $scope.nyMeatPizza = false;
 $scope.gotoCity = true;
 $scope.newyork();
 }

 $scope.laShow = false;
 // LA
 $scope.losangeles = function(){
	 $scope.laShow = true;
	 $scope.city = false;
	 $scope.gotoCity = true;
	 $scope.cityName = 'Which one you like';
 }
 // la cheese
 $scope.laCheese = function() {
	 $scope.laCheesePizza = 'LA style cheese Pizza will arrive in 15 mins';
	 $scope.cityName ='Your pizza is in the oven';
	 $scope.laShow = false;
	 $scope.gotoCity = false;
	 $scope.laPizzaGoback = true;
	 
 }
 // la veggie
 $scope.laVeggie = function() {
	 $scope.laVeggiePizza = 'LA style veggie pizza will arrive in 15 mins';
	 $scope.cityName ='Your pizza is in the oven';
	 $scope.laShow = false;
	 $scope.gotoCity = false;
	 $scope.laPizzaGoback = true;
 }
 // la meat
 $scope.laMeat = function() {
	$scope.laMeatPizza = 'LA style meat pizza will arrive in 15 mins';
	
	$scope.cityName ='Your pizza is in the oven';
	 $scope.laShow = false;
	 $scope.gotoCity = false;
	 $scope.laPizzaGoback = true;
}
 

 
 $scope.laPizzaGoback = false;
 
 $scope.laPizzaGobackButton = function(){
	 $scope.laShow = true;
	 $scope.laPizzaGoback = false;
	 
	 $scope.city = false;
	 $scope.laCheesePizza = false;
	 $scope.laVeggiePizza = false;
	 $scope.laMeatPizza = false;
	 $scope.gotoCity = true;
	 $scope.losangeles();
 }

 
});