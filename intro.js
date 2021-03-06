// TwoSies: Samantha Ngo and Taylor Wong
// SoftDev1 pd7
// HW16 -- Sequential Progression II: Electric Boogaloo
// 2017-12-10

// Notes-to-Self: Javascript reads from top to bottom, so you cannot call a
// function that is defined after its function call

// --------------------------------------------------------------- HELPERS(below)
// Changes the heading html to THIS item (when mouse is over an item)
var itemHover = function(){
    //get current heading html
    var heading = document.getElementById('h');
    console.log("Heading: ", heading);
    //change heading html to this html (one of list items)
    heading.innerHTML = this.innerHTML;
    console.log("THIS: ", this.innerHTML);
    console.log("NEW HEADING: ", heading);
}

// Changes the heading html to "Hello World!" (when mouse is no longer over
// the item)
var itemNotHover = function() {
    //get current heading html(mouseOver html)
    var heading = document.getElementById('h');
    console.log(heading);
    //change back to Hello World!
    heading.innerHTML = 'Hello World!';
}

// Removes an item from the list
var removeItem = function() {
    this.remove();
}

// Goes through list of items and activates its responses via addEventListener
var activate = function(){
    var listItems = document.getElementsByTagName('li');
    console.log("LIST ITEMS: ", listItems);
    //make each item in the list active/responsive to the events
    for (var i = 0; i < listItems.length; i += 1) {
	listItems[i].addEventListener('mouseover', itemHover);
	listItems[i].addEventListener('mouseout', itemNotHover);
	listItems[i].addEventListener('click', removeItem);
    }
}

// --------------------------------------------------------------- ACTIONS(below)
// Response when button is clicked: add new element, activate whole list again to
// include new item
var buttonCallBack = function(e){
    //get current length of list
    var currLength = document.getElementById('thelist').getElementsByTagName('li').length;
    console.log("Current Length of List: ", currLength);
    //get current list
    var list = document.getElementById('thelist');
    //create new list element
    var newElement = document.createElement('li');
    //make list element say item nextnumber (next number being as long as list length)
    newElement.innerHTML = 'item ' + currLength;
    console.log("New Element: ", newElement);
    //append the new element to the list
    list.appendChild(newElement);
    console.log(list);
    activate();
}

// Initial Setup
// 1. Activate event listener for the button
var b = document.getElementById("b");
console.log("b:", b);
b.addEventListener('click', buttonCallBack);
// 2. Activate responses for each of the initial items in the list
activate();

// ------------------------------------------------------------ FIBONACCI LIST
var fibCallBack = function(){
    //get current list
    var fiblist = document.getElementById('fiblist');
    // Get list of li elements
    var numbers = fiblist.getElementsByTagName("li");
    // Get number of elements
    var length = fiblist.getElementsByTagName("li").length + 1;
    //create new list element
    var newElement = document.createElement('li');
    if (length <= 3) {
	var num = 1;
    } else {
	var num =  parseInt(numbers[numbers.length - 1].innerHTML) + parseInt(numbers[numbers.length -2].innerHTML);
	console.log(num);
    }
    newElement.innerHTML = num;
    fiblist.appendChild(newElement);
    console.log("NEW ELEMENT ADDED ", length);
}


var f = document.getElementById("f"); // Accessing Button tag
console.log("f: ", f);
f.addEventListener('click', fibCallBack);
