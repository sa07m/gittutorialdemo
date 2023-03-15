var form = document.getElementById('myForm');
//var del = document.getElementById('deletes');
form.addEventListener('submit',display)
//ul.addEventListener('click',deleted);
function display(event)
{
    event.preventDefault();
    
    var name = event.target.name.value;
    var email = event.target.email.value;
    var phone = event.target.phone.value;
   var obj={name,email,phone};
    localStorage.setItem(obj.email,JSON.stringify(obj));
    //var ul = document.createElement('ul');
    var parent = document.getElementById('ul');
    var child = document.createElement('li');
    child.textContent = obj.name+' - '+obj.email+' - '+obj.phone;
    var btn = document.createElement('button');
   // btn.id = 'deletes';
   // btn.className = 'delete';
    btn.textContent = 'cancel';
    btn.onclick = () =>
    {
        localStorage.removeItem(obj.email);
        ul.removeChild(child);
    }
    var edit = document.createElement('button');
    edit.textContent = 'edit';
    edit.onclick = () =>
    {
        localStorage.removeItem(obj.email);
        ul.removeChild(child);
        name.value = obj.name;
    }
    child.appendChild(btn);
    child.appendChild(edit);
    //console.log(child);
    parent.appendChild(child);

}

