//getElementsByClassName
//console.log(document.getElementsByClassName("list-group-item"));


// var lists=document.getElementsByClassName("list-group-item");
// console.log(lists);


// lists[2].style.backgroundColor='green';
// for(let c of lists){
//     c.style.fontWeight='bold';
// }

// console.log(document.getElementsByClassName("list-group-item"));

//getElementsByTagName
// console.log(document.getElementsByTagName('form'));
// console.log(document.getElementsByTagName('body'));
// console.log(document.getElementsByTagName('input[0]'));
// console.log(document.getElementsByTagName('html'));

var items=document.getElementsByTagName('li');
console.log('items');
items[0].textContent='123';

for(let i=0;i<items.length;i=i+2){
    items[i].style.backgroundColor='grey';
}

items[4].innerText='852';










