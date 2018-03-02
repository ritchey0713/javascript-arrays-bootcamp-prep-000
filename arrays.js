/*
var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"
*/

var grilledCheeseIngredients = [
  "bread", "mild cheese", "sharp cheese", "butter", "tomato", "garlic" ]
  
var tomatoSauceIngredients = [
  "tomato", "garlic","olive oil", "basil", "oregano"]
  
var chocolateBars = [ "snickers", "hundred grand", "kitkat", "skittles"]
var candyString = "foo"

function addElementToBeginningOfArray(chocolateBars, candyString){
  return [candyString, ...chocolateBars]
  }

function destructivelyAddElementToBeginningOfArray(chocolateBars, candyString){
  chocolateBars.unshift(candyString);
  return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, candyString){
  [...chocolateBars,candyString]
  return chocolateBars;
}

function destructivelyAddElementToEndOfArray(){}