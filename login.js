function validate()
{ 
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="admin"&& password=="user")
    {
        window.open("index.html");
        return false;
    }
    else{
        alert("wrong username or password");
        return false;
    }
}