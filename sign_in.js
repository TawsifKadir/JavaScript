function getInfo(e){
    
    let username = document.getElementById("InputUsername").value;
    let password = document.getElementById("InputPassword").value;
    if(username=="abc123" && password=="abc123"){
        document.getElementById("Incorrect").innerText = "Successful";
    }else{
        document.getElementById("Incorrect").innerText = "Incorrect username or password";
    }
    e.preventDefault();
}