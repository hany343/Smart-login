
var users = [];

document.getElementById('email').addEventListener("change", (event) => {
    document.getElementById('notify').innerHTML = '';
});

//localStorage.clear()
checkLocalStorage();

function login() {
    var email = document.getElementById('email').value;
    var pass = document.getElementById('pass').value;

    if (email.length > 0 && pass.length > 0) {

        console.log(email, pass);
        var found = false;
        for (i = 0; i < users.length; i++) {

            if (users[i].email.toLowerCase().includes(email.toLowerCase()) &&
                users[i].pass.toLowerCase().includes(pass.toLowerCase())) {
                
                found = true;
                localStorage.setItem('logeduser', JSON.stringify(users[i]))
            }
        }
        if(!found){
            document.getElementById('notify').innerHTML = `Login Failed`;
        }else{
            window.open('home.html');
        }

    }
}

function register() {
    var username = document.getElementById('name').value;
    var useremail = document.getElementById('email').value;
    var userpass = document.getElementById('pass').value;
    let regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    let result = regex.test(useremail);
    console.log(result, useremail)
    if (result) {

        for (i = 0; i < users.length; i++) {

            if (users[i].email.toLowerCase().includes(useremail.toLowerCase())) {
                document.getElementById('notify').innerHTML = 'User already exist'
                return;
            }
        }
        console.log(useremail, 'notfound')

        var user = {
            name: username,
            email: useremail,
            pass: userpass
        }
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users))
        console.log(users, 'saved')
        clearForm();
    }
}

function checkLocalStorage() {

    if (localStorage.getItem('users') != null) {
        users = JSON.parse(localStorage.getItem('users'));
        console.log(users)
    } else {
        console.log("Local Storage empty")
    }
}

function clearForm(){
    document.getElementById('name').innerHTML=''
    document.getElementById('email').innerHTML='';
    document.getElementById('pass').innerHTML=''
   
}