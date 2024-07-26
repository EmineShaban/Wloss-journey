 let hoursContainer = document.querySelectorAll("[id='hours']");
let minutesContainer = document.querySelectorAll("[id='minutes']");
let secondsContainer = document.querySelectorAll("[id='seconds']");
let piecesContainer = document.querySelectorAll("[id='pieces']");

// function
function countDownFunc() {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;
    let currentDate = new Date();
    console.log(currentDate)
    let saved_countdown = localStorage.getItem('saved_countdown');
    console.log(saved_countdown)

    let futureDate = new Date(currentDate.getTime() + hour * 24);
    console.log(futureDate)

    if (saved_countdown == null) {
        console.log("saved_countdown")

        localStorage.setItem('saved_countdown', futureDate);
    } else {
        futureDate = saved_countdown;
        console.log("saved_countdown2")
        console.log(futureDate)
        console.log(saved_countdown)

    }

    // timer
    (countDown = new Date(futureDate).getTime()),
        (x = setInterval(function () {
            let now = new Date().getTime(),
                distance = countDown - now;
            for (let i = 0; i < hoursContainer.length; i++) {
                let hours = (hoursContainer[i].innerText = Math.floor(
                    (distance % day) / hour
                ));
            }

            for (let i = 0; i < minutesContainer.length; i++) {
                let minutes = (minutesContainer[i].innerText = Math.floor(
                    (distance % hour) / minute
                ));
            }

            for (let i = 0; i < secondsContainer.length; i++) {
                let seconds = (secondsContainer[i].innerText = Math.floor(
                    (distance % minute) / second
                ));
            }

            if (distance <= 0) {
                localStorage.removeItem('saved_countdown');
                countDownFunc();
            }
        }, 0));
}

countDownFunc();
 