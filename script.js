const user_password = document.getElementById("password");
const confirm_password = document.getElementById("confirm-password");

confirm_password.addEventListener("input", () =>
{
    if (user_password.value !== confirm_password.value)
        {
            user_password.style.border = "1px red solid";
            confirm_password.style.border = "1px red solid";
        } 
    else
    {
        user_password.style.border = "1px #E5E7EB solid";
        confirm_password.style.border = "1px #E5E7EB solid";
        
    }
})