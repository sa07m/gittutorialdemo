var form = document.getElementById('my-form');
form.addEventListener('submit', store);
function store(e)
{
    e.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    localStorage.setItem('userName', name);
    localStorage.setItem('userEmail', email);
    console.log('done');
}