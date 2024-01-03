function getInfo(e){
    
    let username = document.getElementById("InputUsername").value;
    let password = document.getElementById("InputPassword").value;
    if(username=="abc123" && password=="abc123"){
        window.location.href = "main.html";
    }else{
        document.getElementById("Incorrect").innerText = "Incorrect username or password";
    }
    e.preventDefault();
}