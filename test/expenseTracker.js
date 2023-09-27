// var submit = document.getElementById('form');
// submit.addEventListener('submit',add)

// function add(e)
// {
//     e.preventDefault();
//     console.log("reached till here");
//     var a = document.getElementById('a').value;
//     var b = document.getElementById('b').value;
//     var c = document.getElementById('c').value;
//     var li = document.createElement("li");
//     li.textContent = a +' - '+b+' - '+c;
//     var del = document.createElement('button');
//     del.textContent = 'Delete Expense';
    
//     del.onclick = () =>
//     {
        
//         ul.removeChild(li);
//     };
//     li.appendChild(del);
//     ul.appendChild(li);
//     let myObj = {
//         a :document.getElementById('a').value,
//         b :document.getElementById('b').value,
//         c :document.getElementById('c').value,
        
//     }
//     localStorage.setItem(JSON.stringify(myObj.a),JSON.stringify(myObj));
//     //console.log(localStorage);
// }
    

    
//     document.onload = (e) =>{
//         e.preventDefault();
//         add();
        

//     }
// *******************************************************

var form = document.getElementById('myForm');
var ul = document.getElementById('ul');

form.addEventListener('submit',add);

function add(e)
{
    e.preventDefault();
    console.log('hi')
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var c = document.getElementById('c').value;

    var obj = {a,b,c};
    var x = JSON.stringify(obj)
    localStorage.setItem(obj.c,x);

    var li = document.createElement('li');
    li.textContent = a+' - '+b+' - '+c;
    var del = document.createElement('button')
    del.textContent = 'delete expense'
    del.onclick = () =>{
        localStorage.removeItem(obj.c)
        ul.removeChild(li)
    }
    var edit = document.createElement('button')
    edit.textContent = 'edit expense'
    edit.onclick = () =>{
        localStorage.removeItem(obj.c)
        ul.removeChild(li)
        document.getElementById('a').value= obj.a;
    }
    li.appendChild(del)
    li.appendChild(edit)
    ul.appendChild(li)

}

    

    
