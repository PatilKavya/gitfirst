
//TraversingTheCode

//parentNode
 var list=document.querySelector('#items');
// console.log(list.parentNode.parentNode.parentNode.parentNode);
// list.parentNode.style.color='blue'

// //parentElement
// console.log(list.parentElement.parentElement);
// list.parentElement.style.backgroundColor='yellow';

//childNode
// console.log(list.childNodes);

// //childElements

// console.log(list.children);
// list.children[2].style.color='green';

//firstChild

//console.log(list.firstChild);

//firstElementChild
// console.log(list.firstElementChild);
// list.firstElementChild.style.backgroundColor='yellow'

//lastChild
// console.log(list.lastChild);


//lastElementChild
// console.log(list.lastElementChild);
// list.lastElementChild.style.backgroundColor='yellow'

//nextSibling
//console.log(list.nextSibling);

//nextElementSibling
// console.log(list.nextElementSibling);

//previousSibling
// console.log(list.previousSibling);

//previousElementSibling
console.log(list.previousElementSibling);
list.previousElementSibling.style.backgroundColor='yellow'

var mydiv=document.createElement('div');
mydiv.setAttribute('title', 'Hello');

var newText=document.createTextNode('Hello! Hello!')
mydiv.appendChild(newText);
console.log(mydiv);
mydiv.style.fontSize='30px'
var container=document.querySelector("header .container")
var h1=document.querySelector("header h1");

container.insertBefore(mydiv, h1);

var parentNode=document.getElementById("items");


parentNode.innerHTML= '<li>Hello!</li>' + parentNode.innerHTML;














