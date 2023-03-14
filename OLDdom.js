// EXAMINE THE DOCUMENT OBJECT

//console.dir(document);
//console.log(document.domain);
//console.log(document.URL);
// console.log(document.title); 
//document.title = 123; // change the title
// console.log(document.title);
// var titleChange = document.getElementById('header-title');
// titleChange.style.marker = 'blur(5 px)';
// titleChange.style.backgroundColor = 'red';
// var x = document.getElementById('main');

// var items = document.getElementsByClassName('title');
// console.log(items[0]);
// items[0].style.color = 'green';
// items[0].style.fontWeight = 'bold';

//items[0].style.borderBottom = 'solid black';

// var tag = document.getElementsByTagName('h2');
// console.log(tag);
// tag[0].style.color = 'pink';

// var items = document.querySelector('h2');
// items.style.color = 'pink';

 //var list = document.getElementsByClassName('list-group-item');
// list[2].style.backgroundColor = 'green';
// var list = document.getElementsByTagName('li');
// list[2].style.backgroundColor = 'orange';
//var list = document.querySelectorAll('li');
// for(var i=0; i<list.length; i++)
// {
//     list[i].style.fontWeight = 'bold';
// }

// var list = document.querySelectorAll('li:nth-child(odd)');
// for(var i=0; i<list.length; i++)
// {
//     list[i].style.backgroundColor = 'green';
// }

// var create = document.createElement('div');
// create.className = 'hello';
// create.id = 'hell1';
// create.setAttribute('title','helloo');
// var data = document.createTextNode('Hello world');
// create.appendChild(data);
// console.log(create);
// var container = document.querySelector('h2 .items');
// var h1 = document.querySelector('h2 li');
// container.insertBefore(create,li);

var parent = document.getElementById('items');
//console.log(parent);
parent.innerHTML = '<li>Hello world</li>'+ parent.innerHTML;















