const countdownDate = new Date().getTime() + (7 * 24 * 60 * 60 * 1000); // 7 days from now
let flipcards = document.getElementsByClassName('top-case');

const countdown = () => {
    let now = new Date().getTime();
    let interval = countdownDate - now;
    let days = Math.floor(interval / (1000 * 60 * 60 * 24));
    let hours = Math.floor((interval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((interval % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((interval % (1000 * 60)) / 1000);

     // Display the results
    document.getElementById("counting-days").innerHTML = days;
    document.getElementById("counting-hours").innerHTML = hours;
    document.getElementById("counting-minutes").innerHTML = minutes;
    document.getElementById("counting-seconds").innerHTML = seconds;

    // Flip
    flipcards[3].classList.add('flip');

    if (interval < 0) {
        clearInterval(countdown);
        document.getElementById("finito-div").innerHTML = "FINITO!";
      }
}

const flip = (div) => {

}

// Execute countdown function every 1sec
window.setInterval(countdown, 1000);

