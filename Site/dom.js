// 1 Examining the document //

//console.dir(document);
//console.log(document.domain); 
//console.log(document.URL); 
//console.log(document.title); 
//document.title = 123; 
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.all);
//console.log(document.all[10]); 
//document.all[23].textContent = 'Hello'; 
//console.log(document.links);
//console.log(document.links[5]); 

// 2 GETELEMENTBYID METHOD//
console.log(document.getElementById('list'));
var headerTitle = console.log(document.getElementById('list')); //putting into a variable
console.log(headerTitle);

var header = document.getElementById('order-list');
header.textContent = 'further order list'; //changing the text of the element
header.innerText = 'this will change the text'; //does the same thing.
header.style.borderBottom = 'solid 3px black';
//this is how we can use getelementbyid method and then apply methods on it.

// 3 GETELEMENTBYCLASSNAME //
var items = document.getElementsByClassName('sections');
console.log(items);
var stuffs = document.getElementsByClassName('stuff');
console.log(stuffs);
//we can apply methods on these elements and manipulate them.

// 4 GETELEMENTBYTAGNAME //
var lists = document.getElementsByTagName('p');
console.log(lists); //it has four elements in it.
lists[2].style.backgroundColor = 'yellow'; //this is how we select and manipulate elements
lists[3].style.backgroundColor = 'grey';

// 5 QUERYSELECTOR important method //
// you use it only for one item, only grabs the first one, if we have more than one p element, it will select first one.
//we can grab any element by tag name, class name or id name.
var query = document.querySelector('article'); //selected by tag name
console.log(query);
var clas = document.querySelector('.milks');
console.log(clas);
clas.style.borderBottom = '4px solid blue';
clas.value = 'Bread';


