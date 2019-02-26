function timer() {

    let hours = $('#hours');
    let minutes = $('#m`inutes');
    let secondss = $('#seconds');

    let interval = 0;
    let step = 1;

    $(#start-timer).on("click", function () {

        let interval = SetInterval(step, 1000);

    });


    $(#stop-timer).on("click", function () {
       clearInterval(interval);

            function step() {
            seconds++;

            if(seconds >= 60) {
                minutes ++
                seconds = 0;
            }
            if(minutes) {

            }
            }

    }


<button id="start-timer">Start</button>
    <button id="stop-timer">Stop</button>