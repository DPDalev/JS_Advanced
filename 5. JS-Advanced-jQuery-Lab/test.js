document.body.innerHTML = `
    <section>
        <h2>Given bus route</h2>
        <ol id="bus-stops" type="1">
        </ol>
    </section>

    <div class="wrapper">
        <section id="enter-stops">
            <h2>Enter bus stops:</h2>
            <label>First bus stop's number:
                <input name="first-stop" type="number">
            </label>
            <label>Last bus stop's number:
                <input name="last-stop" type="number">
            </label>
            <button onclick="busRoute()">Enter</button>
        </section>
    </div>

    <section>
        <h2>Selected route</h2>
        <h3 id="selected-route">Bus stops: <span>none</span></h3>
        <ul id="selected-bus-stops">
        </ul>
    </section>`;

let busStops = [
    "Gen. Gurko St.",
    "Sofia University",
    "Eagles' Bridge Sq.",
    "Bulgarian News Agency",
    "Peyo Yavorov Blvd.",
    "Aleksandar Zhendov Bvld."
]

let listBusStops = $('#bus-stops')
for (let i = 0; i < busStops.length; i++) {
    const busStopLi = $('<li>').text(busStops[i]);

    listBusStops.append(busStopLi)
}

let cIV = (f, l) => !(!f || !l ||
    f < 0 || l > busStops.length ||
    f >= l)

let checkInput = (currVal, realVal, type) => {
    if (!currVal && realVal !== 0) {
        expect(currVal).to.be.empty
    } else {
        expect(currVal).to.contains(realVal,
            type + " bus stops's input should not be empty.")
    }
}

function testCode(FIRST_STOP_NUM, LAST_STOP_NUM) {
    let firstStopInput = $("input[name='first-stop']");
    let lastStopInput = $("input[name='last-stop']");

    firstStopInput.val(FIRST_STOP_NUM)
    lastStopInput.val(LAST_STOP_NUM)

    result()

    let currentFirstStopVal = firstStopInput.val()
    let currentLastStopVal = lastStopInput.val()

    if (cIV(FIRST_STOP_NUM, LAST_STOP_NUM)) {
        let selectedRoute = $('#selected-route span').text()
        expect(selectedRoute).to.equal(FIRST_STOP_NUM + '-' + LAST_STOP_NUM,
            "Selected bus route is not correct.");

        let selectedBusStops = $('#selected-bus-stops li')
        expect(selectedBusStops.length).to.equal(Math.abs(FIRST_STOP_NUM - LAST_STOP_NUM) + 1,
            "Number of selected bus stops is not correct.");

        for (let i = 0; i < selectedBusStops.length; i++) {
            let realBusStop = selectedBusStops[i].outerHTML
            let busStopTemplate = '<li>' + busStops[FIRST_STOP_NUM + i - 1] + '</li>'

            expect(realBusStop).to.equal(busStopTemplate, "The selected bus stop is wrong.");
        }

        expect(firstStopInput.val()).to.be.empty
        expect(lastStopInput.val()).to.be.empty
    } else {
        checkInput(currentFirstStopVal, FIRST_STOP_NUM, 'First')
        checkInput(currentLastStopVal, LAST_STOP_NUM, 'Last')
    }
}

let inputsDataArr = [
    ['2', '5'],
    ['1', '3'],
    ['4', '7'],
    ['-1', '3'],
    ['0', '7'],
    ['4', '2'],
    ['4', '-7'],
    ['7', '9'],
    ['-4', '-2'],
    ['', '3'],
    ['5', ''],
    ['', '']
]

for (let [first, second] of inputsDataArr) {
    if (first && second) {
        first = Number(first)
        second = Number(second)
    }

    testCode(first, second)
}