var form = document.getElementById('my-form');
form.addEventListener('submit', store);
function store(e)
{
    e.preventDefault();
    var name = e.target.name.value;
    var email = e.target.email.value;
    localStorage.setItem('userName', name);
    localStorage.setItem('userEmail', email);
    console.log('done');
}