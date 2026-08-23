// =====================================
// WelcomeIn26 Appointment Availability
// =====================================


// =====================================
// YOUR AVAILABLE APPOINTMENT TIMES
// =====================================

const availability = {

    // ---------------------------------
    // MONDAY
    // Class: 9:30 AM - 11:00 AM
    // Class: 3:30 PM - 5:00 PM
    // ---------------------------------

    Monday: [

        "11:30 AM",
        "12:00 PM",
        "12:30 PM",
        "1:00 PM",
        "1:30 PM",
        "2:00 PM",
        "2:30 PM"

    ],


    // ---------------------------------
    // TUESDAY
    // Class: 9:30 AM - 11:00 AM
    // Class: 2:00 PM - 3:30 PM
    // ---------------------------------

    Tuesday: [

        "11:30 AM",
        "12:00 PM",
        "12:30 PM",
        "1:00 PM",
        "1:30 PM",

        "4:00 PM",
        "4:30 PM",
        "5:00 PM",
        "5:30 PM",
        "6:00 PM",
        "6:30 PM"

    ],


    // ---------------------------------
    // WEDNESDAY
    // Classes:
    // 9:30 AM - 11:00 AM
    // 11:00 AM - 12:00 PM
    // 12:30 PM - 2:00 PM
    // 3:30 PM - 5:00 PM
    // ---------------------------------

    Wednesday: [

        "5:30 PM",
        "6:00 PM",
        "6:30 PM",
        "7:00 PM"

    ],


    // ---------------------------------
    // THURSDAY
    // Class: 9:30 AM - 11:00 AM
    // Class: 2:00 PM - 3:30 PM
    // ---------------------------------

    Thursday: [

        "11:30 AM",
        "12:00 PM",
        "12:30 PM",
        "1:00 PM",
        "1:30 PM",

        "4:00 PM",
        "4:30 PM",
        "5:00 PM",
        "5:30 PM",
        "6:00 PM",
        "6:30 PM"

    ],


    // ---------------------------------
    // FRIDAY
    // No classes shown on your schedule
    // ---------------------------------

    Friday: [

        "10:00 AM",
        "10:30 AM",
        "11:00 AM",
        "11:30 AM",
        "12:00 PM",
        "12:30 PM",
        "1:00 PM",
        "1:30 PM",
        "2:00 PM",
        "2:30 PM",
        "3:00 PM"

    ]

};


// =====================================
// GET AVAILABLE TIMES
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
