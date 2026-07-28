// =====================================
// WelcomeIn26 Appointment System
// =====================================


document.addEventListener("DOMContentLoaded", () => {


    const appointmentForm = document.getElementById("appointmentForm");

    const dayButtons = document.querySelectorAll(".day-btn");

    const timeContainer = document.getElementById("timeButtons");

    const submitButton = document.getElementById("submitBtn");



    const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbywlAhDLjJ3IbRo9LYdrPOLHy0aUbNW7fnhG8GqC_hVXg7Ml2t5Igjv8zx50twqP3qr/exec";





    // -------------------------------
    // Create Time Buttons
    // -------------------------------


    dayButtons.forEach(button => {



        button.addEventListener("click", () => {



            // Remove previous selected day

            dayButtons.forEach(btn => {

                btn.classList.remove("selected");

            });



            button.classList.add("selected");



            const selectedDay = button.dataset.day;



            document.getElementById("day").value = selectedDay;



            document.getElementById("time").value = "";



            timeContainer.innerHTML = "";





            // Create time buttons


            availability[selectedDay].forEach(time => {



                const timeButton = document.createElement("button");



                timeButton.type = "button";

                timeButton.className = "time-btn";

                timeButton.textContent = time;





                // Check if already booked

                const booked =
                localStorage.getItem(
                    selectedDay + "_" + time
                );





                if(booked){



                    timeButton.classList.add("booked");


                    timeButton.disabled = true;



                }





                else {



                    timeButton.addEventListener("click", () => {



                        document

                        .querySelectorAll(".time-btn")

                        .forEach(btn => {


                            btn.classList.remove("selected");


                        });




                        timeButton.classList.add("selected");



                        document.getElementById("time").value = time;



                    });



                }





                timeContainer.appendChild(timeButton);



            });





        });



    });









    // -------------------------------
    // Submit Appointment
    // -------------------------------



    appointmentForm.addEventListener("submit", async (e) => {



        e.preventDefault();




        const data = {



            name:
            document.getElementById("name").value.trim(),



            email:
            document.getElementById("email").value.trim(),



            day:
            document.getElementById("day").value,



            time:
            document.getElementById("time").value,



            reason:
            document.getElementById("reason").value.trim()



        };







        if(!data.day){


            alert("Please select a day.");

            return;


        }



        if(!data.time){


            alert("Please select a time.");

            return;


        }







        submitButton.disabled = true;


        submitButton.textContent = "Submitting...";







        try {



            const response = await fetch(

                GOOGLE_SCRIPT_URL,

                {

                    method:"POST",

                    body:JSON.stringify(data)

                }

            );





            const result = await response.json();







            if(result.result === "success"){





                // Save booked slot locally

                localStorage.setItem(

                    data.day + "_" + data.time,

                    "booked"

                );






                alert(
                    "Appointment submitted successfully!"
                );






                appointmentForm.reset();






                timeContainer.innerHTML =

                "<p>Select a day to see available times.</p>";






                dayButtons.forEach(btn => {


                    btn.classList.remove("selected");


                });





            }





            else {



                alert(

                    result.message ||

                    "Unable to book appointment."

                );


            }







        }




        catch(error){



            console.error(error);



            alert(
                "Unable to connect to appointment system."
            );



        }







        finally {



            submitButton.disabled = false;


            submitButton.textContent =
            "Request Appointment";



        }







    });





});