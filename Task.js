var form = document.getElementById('addForm');
var list=document.getElementById('items');

list.addEventListener('click', removeItem);
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
           list.remove('li');
        }
    }
}