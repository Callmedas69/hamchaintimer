document.addEventListener("DOMContentLoaded", function() {
    // Set the countdown date (YYYY-MM-DD format)
    const countdownDate = new Date("2024-06-03").getTime();

    // Update the countdown every second
    const countdownElement = document.getElementById("countdown");
    const countdownInterval = setInterval(function() {
        // Get the current date and time
        const now = new Date().getTime();

        // Calculate the time remaining
        const timeRemaining = countdownDate - now;

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // Display the countdown
        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        // If the countdown is over, display a message
        if (timeRemaining < 0) {
            clearInterval(countdownInterval);
            countdownElement.innerHTML = "READY ???";
        }
    }, 1000);

    // Change background dynamically
    const backgrounds = [
        "url('background1.jpg')",
        "url('background2.jpg')",
        "url('background3.jpg')"
    ];
    let currentIndex = 0;

    setInterval(() => {
        document.body.style.backgroundImage = backgrounds[currentIndex];
        currentIndex = (currentIndex + 1) % backgrounds.length;
    }, 5000); // Change background every 5 seconds
});
