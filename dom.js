var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filterItem = document.getElementById('filter');
form.addEventListener('submit', additem);
itemList.addEventListener('click', deleteItem);
filterItem.addEventListener('keyup', filterFunc);

function additem(e)
{
    e.preventDefault();
    var data = document.getElementById('item').value;
    var desc = document.getElementById('desc').value;
    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(data));
    li.appendChild(document.createTextNode(' '+desc));

    var btn = document.createElement('button');
    btn.className = 'btn btn-danger btn-sm float-right delete';
    btn.appendChild(document.createTextNode('X'));
    li.appendChild(btn);

    itemList.appendChild(li);
}

function deleteItem(e)
{
    if(e.target.classList.contains('delete'))
    {
        //if(confirm('are you sure you want to delete the item?'))
       // {
            var it = e.target.parentElement;
            itemList.removeChild(it);
       // }
    }
}

function filterFunc(e)
{
    var text = e.target.value.toLowerCase();
    var items = document.getElementsByTagName('li');
    var desc = document.getElementsByTagName('desc');
    Array.from(items).forEach(
        function(item)
        {
            var itemName = item.firstChild.textContent;
            var desc = item.childNodes[1].textContent;
            if(itemName.toLowerCase().indexOf(text) != -1 || 
                desc.toLowerCase().indexOf(text) != -1)
                item.style.display = 'block';
            else
                item.style.display = 'none';

        });
    
    }
        
var a = document.querySelector('h2')
a.style.color = "brown"
a.style.fontWeight   = 'bold'

var last = document.querySelector('.list-group : last-child')
last.style.color = 'brown'

