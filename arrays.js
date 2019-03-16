var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]


function addElementToBeginningOfArray(arr, elem) {
    return [elem].concat(arr);
}

function destructivelyAddElementToBeginningOfArray(arr, elem) {
<<<<<<< HEAD
    arr.unshift(elem);
    return arr;
}

function addElementToEndOfArray(arr, elem) {
  return [...arr, elem]
}

function destructivelyAddElementToEndOfArray(arr, elem) {
    arr.push(elem);
    return arr;
=======
    return arr.unshift(elem);
>>>>>>> 3f9a8fc3c894a65776f9143d60953c730889af68
}


function accessElementInArray(arr,inx) {
  return arr[inx];
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.shift();
  return arr;
}

function removeElementFromBeginningOfArray(arr) {
<<<<<<< HEAD
  return arr.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop();
  return arr;
=======
  return arr.splice(0,1);
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  return arr.pop();
>>>>>>> 3f9a8fc3c894a65776f9143d60953c730889af68
}

function removeElementFromEndOfArray(arr) {
  return arr.slice(0, (arr.length-1));
}