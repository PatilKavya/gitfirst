//getElementsByClassName
//console.log(document.getElementsByClassName("list-group-item"));
var lists=document.getElementsByClassName("list-group-item");
console.log(lists);
lists[2].style.backgroundColor='green';
for(let c of lists){
    c.style.fontWeight='bold';
}