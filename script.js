function checkpassword(){
    let password = document.getElementById("psd").value;
    let confirm = document.getElementById("conpsd").value;
    console.log(password,confirm);
    let message = document.getElementById("message");

    if(password.length !=0)
    {
        if(password == confirm){
            message.textContent="password match";
        }
        else{
            message.textContent="password not match";
        }
    }
}
