// =====================================
// WelcomeIn26 Admin Reset
// =====================================


const PASSWORD = "Penguin2006$";



const loginButton =
document.getElementById("loginBtn");

const resetButton =
document.getElementById("resetBtn");

const adminPanel =
document.getElementById("adminPanel");

const status =
document.getElementById("status");





// Login


loginButton.addEventListener("click", () => {



    const enteredPassword =
    document.getElementById("adminPassword").value;



    if(enteredPassword === PASSWORD){


        adminPanel.style.display = "block";


        status.textContent =
        "Admin access granted.";



    }


    else {


        status.textContent =
        "Incorrect password.";


    }



});







// Reset all appointments


resetButton.addEventListener("click", () => {



    const confirmReset =
    confirm(
        "Are you sure you want to reset all appointments?"
    );



    if(confirmReset){



        localStorage.clear();



        status.textContent =
        "Appointments reset for the new week!";



    }



});