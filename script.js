//FUNCTION SELECTS IMAGE TO DISPLAY BASED ON USER'S LOCAL TIME
function updateImage() {
    const imageElement = document.getElementById("timeImage"); //GET IMG ELEMENT BY ITS ID
    const currentHour = new Date().getHours();

    let imagePath = ""; //HOLD PATH TO SELECTED IMAGE
    let altText = "";   //HOLD DESCRIPTIVE ALT TEXT

    //DISPLAY MORNING IMAGE AND "GOOD MORNING" MESSAGE BETWEEN 6AM - 12PM
    if (currentHour >= 6 && currentHour < 12) {
        imagePath = "images/morning.jpg";
        altText = "Good morning!";
    }

    //DISPLAY AFTERNOON IMAGE AND "GOOD AFTERNOON" MESSAGE BETWEEN 12PM - 6PM
    else if (currentHour >= 12 && currentHour < 18) {
        imagePath = "images/afternoon.jpg";
        altText = "Good Afternoon!";
    }

    //DISPLAY EVENING IMAGE AND "GOOD EVENING" MESSAGE BETWEEN 6PM - 6AM
    else {
        imagePath = "images/night.jpg"
        altText = "Good Evening and Good Night!";
    }

    imageElement.src = imagePath; //UPDATE IMAGE SOURCE
    imageElement.alt = altText; //UPDATE IMAGE TEXT

    //RUN FUNCTION ONCE WEBPAGE LOADS
    window.onload = updateImage;
}