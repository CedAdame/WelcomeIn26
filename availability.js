// =====================================
// WelcomeIn26 Appointment Availability
// =====================================


const availability = {

    Monday: [
        "8:00 AM",
        "8:30 AM",
        "9:00 AM",
        "11:00 AM",
        "11:30 AM",
        "12:00 PM",
        "12:30 PM",
        "1:00 PM",
        "1:30 PM",
        "2:00 PM",
        "2:30 PM",
        "3:00 PM",
        "5:00 PM",
        "5:30 PM",
        "6:00 PM",
        "6:30 PM",
        "7:00 PM",
        "7:30 PM"
    ],


    Tuesday: [
        "8:00 AM",
        "8:30 AM",
        "9:00 AM",
        "11:00 AM",
        "11:30 AM",
        "12:00 PM",
        "12:30 PM",
        "1:00 PM",
        "1:30 PM",
        "3:30 PM",
        "4:00 PM",
        "4:30 PM",
        "5:00 PM",
        "5:30 PM",
        "6:00 PM",
        "6:30 PM",
        "7:00 PM",
        "7:30 PM"
    ],


    Wednesday: [
        "8:00 AM",
        "8:30 AM",
        "9:00 AM",
        "12:00 PM",
        "2:00 PM",
        "2:30 PM",
        "3:00 PM",
        "5:00 PM",
        "5:30 PM",
        "6:00 PM",
        "6:30 PM",
        "7:00 PM",
        "7:30 PM"
    ],


    Thursday: [
        "8:00 AM",
        "8:30 AM",
        "9:00 AM",
        "11:00 AM",
        "11:30 AM",
        "12:00 PM",
        "12:30 PM",
        "1:00 PM",
        "1:30 PM",
        "3:30 PM",
        "4:00 PM",
        "4:30 PM",
        "5:00 PM",
        "5:30 PM",
        "6:00 PM",
        "6:30 PM",
        "7:00 PM",
        "7:30 PM"
    ]

};



// =====================================
// Get Available Times
// Removes already booked slots
// =====================================


async function getAvailableTimes(day) {


    try {


        const response = await fetch(

            "YOUR_GOOGLE_SCRIPT_URL?action=getBooked"

        );


        const booked = await response.json();



        const bookedTimes = booked[day] || [];



        return availability[day].filter(time =>

            !bookedTimes.includes(time)

        );



    }


    catch(error) {


        console.error(
            "Could not load booked times:",
            error
        );


        // If connection fails,
        // show normal availability

        return availability[day];


    }


}