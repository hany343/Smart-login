
if (localStorage.getItem('logeduser') != null) {
    var user = JSON.parse(localStorage.getItem('logeduser'));
    document.getElementById('username').innerHTML=`Welcome ${user.name}`
    console.log(user,'current user')
} else {
    console.log("Local Storage empty")
}

function logout(){
    localStorage.setItem('logeduser')=null;
}