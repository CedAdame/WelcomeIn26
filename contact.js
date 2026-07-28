document.addEventListener("DOMContentLoaded", () => {

    const contactForm = document.getElementById("contactForm");


    contactForm.addEventListener("submit", async (e) => {

        e.preventDefault();


        const data = {

            type: "quick_help",

            name: document.getElementById("name").value.trim(),

            email: document.getElementById("email").value.trim(),

            message: document.getElementById("message").value.trim()

        };


        console.log(data);


        try {

            const response = await fetch(
                "https://script.google.com/macros/s/AKfycbywlAhDLjJ3IbRo9LYdrPOLHy0aUbNW7fnhG8GqC_hVXg7Ml2t5Igjv8zx50twqP3qr/exec",
                {
                    method: "POST",
                    body: JSON.stringify(data)
                }
            );


            const result = await response.json();


            if (result.result === "success") {

                alert("Message sent successfully!");

                contactForm.reset();

            }

            else {

                alert("Unable to send message.");

            }


        }

        catch(error) {

            console.error(error);

            alert("Connection error.");

        }

    });

});