

let coin = document.getElementById("coin")
let choosen = null;
let imgCoin = document.getElementById("actual-coin")
let winLoseSlot = document.getElementById("winLoseSlot")
totalNum = 0


let total = document.getElementById("total")

const inputElement = document.getElementById("bet");

let inputValue = null


let payForEv = 0;

let payForTotal = 0;

function tosscoin() {



    inputValue = inputElement.value;

    if (inputValue == "") {

    }
    else {

        if (!(choosen == null)) {
            if (!(payForEv == 0)) {
                coin.classList.add("flip")

                const randomVal = Math.random();
                const faceCoin = randomVal < 0.5 ? 'heads' : 'tails';
                if (faceCoin === 'heads') {
                    imgCoin.src = "icons/heads-nobg.png"
                    setTimeout(() => { coin.classList.remove("flip") }, 1000);
                    winLose(faceCoin)
                }
                else if (faceCoin === 'tails') {
                    imgCoin.src = "icons/tails-nobg.png"
                    setTimeout(() => { coin.classList.remove("flip") }, 1000);
                    winLose(faceCoin)
                }
            }
        }
    }


}


function selected(option) {
    if (option == "heads") {
        choosen = 'heads';
        document.getElementById("head").style.border = "2px solid #A4FF9C"
        document.getElementById("tail").style.border = "2px solid black"
    }
    else {
        choosen = 'tails';
        document.getElementById("head").style.border = "2px solid black"
        document.getElementById("tail").style.border = "2px solid #A4FF9C"
    }
}

function winLose(result) {
    if (result === choosen) {
        inputValue = inputValue * 2
        document.getElementById("result").innerText = inputValue;
        totalNum = totalNum + inputValue
        total.innerText = totalNum

    }
    else {
        inputValue = inputValue * -2
        document.getElementById("result").innerText = inputValue;
        totalNum = totalNum + inputValue
        total.innerText = totalNum


    }
    payForEv = parseFloat(payForEv) + parseFloat(totalNum)
}



function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}



let CustomSalary = document.getElementById('CustomSalary');


CustomSalary.addEventListener('keydown', function (event) {

    if (event.key === 'Enter') {
        salary(parseFloat(CustomSalary.value))
    }
});




function salary(num) {
    let monthly = document.getElementById("monthly")
    let state = document.getElementById("state")
    let fed = document.getElementById("fed")
    let social = document.getElementById("social")
    let medicare = document.getElementById("medicare")
    let disability = document.getElementById("disability")
    let retirement = document.getElementById("retirement")
    let insurance = document.getElementById("insurance")
    let MonthlyPay = document.getElementById("MonthlyPay")
    let housePay = document.getElementById("housePay")




    let monthlyGross = 0



    let fedTax = 0
    let medicareTax = 0
    let socialTax = 0
    let disabilityTax = 0
    let retirementTax = 0
    let stateTax = 0
    let insuranceTax = 0



    monthlyGross = num / 12;

    if (!(num == 0)) {

        stateTax = monthlyGross * .12
        fedTax = monthlyGross * .07
        socialTax = monthlyGross * .062
        medicareTax = monthlyGross * .0145
        disabilityTax = monthlyGross * .01
        retirementTax = monthlyGross * .05
        insuranceTax = 180.00


        state.innerText = `$${stateTax.toFixed(2)}`
        fed.innerText = `$${fedTax.toFixed(2)}`
        social.innerText = `$${socialTax.toFixed(2)}`
        medicare.innerText = `$${medicareTax.toFixed(2)}`
        disability.innerText = `$${disabilityTax.toFixed(2)}`
        retirement.innerText = `$${retirementTax.toFixed(2)}`
        insurance.innerText = `$${insuranceTax.toFixed(2)}`
        monthly.innerText = `$${monthlyGross.toFixed(2)}`

        MonthlyPay.innerText = `$${(monthlyGross - (stateTax + fedTax + socialTax + medicareTax + disabilityTax + retirementTax + insuranceTax)).toFixed(2)}`

        payForEv = (monthlyGross - (stateTax + fedTax + socialTax + medicareTax + disabilityTax + retirementTax + insuranceTax)).toFixed(2)

        payForTotal = payForEv

        housePay.innerText = `$${(monthlyGross * .33).toFixed(2)}`



        // -------------------------------------------------------------


        let needCalc = document.getElementById("under-needs")
        let wantCalc = document.getElementById("under-gift")
        let saveCalc = document.getElementById("under-money")


        needCalc.innerText = `$${(monthlyGross * .5).toFixed(2)}`
        wantCalc.innerText = `$${(monthlyGross * .3).toFixed(2)}`
        saveCalc.innerText = `$${(monthlyGross * .2).toFixed(2)}`

        // --------------------------------------------





    }

}

let totalNeed = 0
let totalWant = 0
let totalSave = 0
let root = document.getElementById("checkbook");
let table = root.getElementsByTagName('tbody')[0];

function check() {


    let top = document.getElementById("type")
    let amount = document.getElementById("amount")
    let wod = document.getElementById("wod")
    let amountRemaining = document.getElementById("amountRemaining")

    let amountValue = parseFloat(amount.value)


    if (!(payForEv == 0)) {
        if (!isNaN(amountValue)) {
            if (top.value === "Need") {
                totalNeed = totalNeed + amountValue
                payForEv = payForEv - amountValue
                amountRemaining.innerText = payForEv.toFixed(2)
                graph()
            }
            else if (top.value === "Want") {
                totalWant = totalWant + amountValue
                payForEv = payForEv - amountValue
                amountRemaining.innerText = payForEv.toFixed(2)
                graph()
            }
            else if (top.value === "Save") {
                totalSave = totalSave + amountValue
                payForEv = payForEv - amountValue
                amountRemaining.innerText = payForEv.toFixed(2)
                graph()
            }
            else if (top.value === "Paid") {


                payForEv = parseFloat(payForEv) + parseFloat(amountValue)
                amountRemaining.innerText = payForEv.toFixed(2)
                graph()
            }
            newRow();

        }
    }
}

function newRow() {




    let row = table.insertRow();

    // Add a new cell with an input inside the row
    let cell = row.insertCell(0);
    cell.innerHTML = '<select name="Type of purchase" id="type2"> <option value="Need">Need</option><option value="Want">Want</option><option value="Save">Save</option><option value="Paid">Paid</option> </select>';

    let cell2 = row.insertCell(1);
    cell2.innerHTML = '<input type="text">'

    let cell3 = row.insertCell(2);
    cell3.innerHTML = '<input type="number" id="amount2">'

    let cell4 = row.insertCell(3);
    cell4.id = "amountRemaining2"
    cell4.innerHTML = 'Nothing Inputed'

    let cell5 = row.insertCell(4);
    cell5.innerHTML = '<button onclick="check2()">Add</button>'

    let cell6 = row.insertCell(5);
    cell6.innerHTML = '<button onclick="removeRow(this)">Remove</button>'


}

function removeRow(button) {
    let row = button.parentNode.parentNode;
    let amountValue = parseFloat(row.cells[2].querySelector('input').value);  // Get the "Amount" value from the third column
    let typeOfPurchase = row.cells[0].querySelector('select').value;  // Get the type of purchase from the first column (dropdown)

    if (!isNaN(amountValue)) {
        if (typeOfPurchase === "Need") {
            totalNeed -= amountValue;
        } else if (typeOfPurchase === "Want") {
            totalWant -= amountValue;
        } else if (typeOfPurchase === "Save") {
            totalSave -= amountValue;
        } else if (typeOfPurchase === "Paid") {
            payForEv -= amountValue;
        }
    }

    row.remove();  // Remove the row from the table
    graph();  // Update the chart or UI with the new totals
}




function check2() {
    let top = document.getElementById("type2")
    let amount2 = document.getElementById("amount2")

    let amountRemaining2 = document.getElementById("amountRemaining2")

    let amountValue = parseFloat(amount2.value)

    if (!(payForEv == 0)) {
        if (!isNaN(amountValue)) {
            if (top.value === "Need") {
                totalNeed = totalNeed + amountValue
                payForEv = payForEv - amountValue
                amountRemaining2.innerText = payForEv.toFixed(2)
                graph()
            }
            else if (top.value === "Want") {
                totalWant = totalWant + amountValue
                payForEv = payForEv - amountValue
                amountRemaining2.innerText = payForEv.toFixed(2)
                graph()
            }
            else if (top.value === "Save") {
                totalSave = totalSave + amountValue
                payForEv = payForEv - amountValue
                amountRemaining2.innerText = payForEv.toFixed(2)
                graph()
            }
            else if (top.value === "Paid") {


                payForEv = parseFloat(payForEv) + parseFloat(amountValue)
                amountRemaining2.innerText = payForEv.toFixed(2)
                graph()
            }

            amountRemaining2.id = "oldID"
            amount2.id = "oldId"
            top.id = "oldID"
            newRow();

        }
    }
}



function graph() {





    let needs = document.getElementById("needs")
    let wants = document.getElementById("wants")
    let savings = document.getElementById("savings")
    let spent = document.getElementById("totalSpent")
    let totalPercent = document.getElementById("total-percent")
    let savePercent = document.getElementById("save-percent")
    let wantPercent = document.getElementById("Want")
    let needPercent = document.getElementById("need-percent")
    let totalSpent = 0;

    needs.innerText = `$${totalNeed}`
    wants.innerText = `$${totalWant}`
    savings.innerText = `$${totalSave}`

    totalSpent = totalNeed + totalWant + totalSave


    spent.innerText = `$${totalSpent}`
    totalPercent.innerText = `${((totalSpent / payForTotal) * 100).toFixed(2)}%`
    savePercent.innerText = `${((totalSave / payForTotal) * 100).toFixed(2)}%`
    wantPercent.innerText = `${((totalWant / payForTotal) * 100).toFixed(2)}%`
    needPercent.innerText = `${((totalNeed / payForTotal) * 100).toFixed(2)}%`


    let newValues = [totalNeed, totalWant, totalSave, payForEv];
    updateChart(newValues);


}

const ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Needs', 'Wants', 'Savings', 'Total Left'],
        datasets: [{
            label: 'Spent',
            data: [totalNeed, totalWant, totalSave, payForEv],
            backgroundColor: [
                'white',
                '#FFC49C',
                '#A4FF9C',
                'black'
            ],
            borderWidth: 1
        }]
    },
    options: {}
});

// Function to update the chart
function updateChart(newData) {
    myChart.data.datasets[0].data = newData;
    myChart.update();
}



let lastSelectedMarquee = null;


document.querySelector('#scrollable').addEventListener('click', function (event) {

    if (event.target.closest('.marquee')) {
        const marqueeDiv = event.target.closest('.marquee');


        if (lastSelectedMarquee && !(lastSelectedMarquee == marqueeDiv)) {
            const lastMarqueeChildren = lastSelectedMarquee.querySelectorAll('.marqueeone, .marqueetwo, .marqueethree, .marqueefour');
            lastMarqueeChildren.forEach(div => {
                div.style.color = 'white';
            });
        }


        const allMarqueeChildren = marqueeDiv.querySelectorAll('.marqueeone, .marqueetwo, .marqueethree, .marqueefour');
        allMarqueeChildren.forEach(div => {
            div.style.color = '#FFC49C';
        });


        lastSelectedMarquee = marqueeDiv;

        resetCheck()

    }
});



function resetCheck() {
    amountRemaining = payForEv
    amountRemaining2 = payForEv
}




function checkSlot(text) {

    if (text == "win") {
        setTimeout(() => {winLoseSlot.innerText = "You Won:"}, 2000);
        


        let moneyWon = document.getElementById("moneyWon")
        setTimeout(() => {moneyWon.innerText = money}, 2000);
        

        let totalLeft = document.getElementById("totalLeft")

        payForEv = parseFloat(payForEv) + parseFloat(money)


        setTimeout(() => {totalLeft.innerText = payForEv.toFixed(2)}, 2000);
        

    }
    else {
        let lose = "You Lost:"
        setTimeout(() => { winLoseSlot.innerText = lose }, 2000);



        let moneyWon = document.getElementById("moneyWon")
        setTimeout(() => { moneyWon.innerText = `$${money}` }, 2000);


        let totalLeft = document.getElementById("totalLeft")

        payForEv = payForEv - parseFloat(betSlot.value)

        
        setTimeout(() => { totalLeft.innerText = payForEv.toFixed(2)}, 2000);


    }







}



// ----------------------------------------





























const ICONS = [
    'apple', 'apricot', 'banana', 'big_win', 'cherry', 'grapes', 'lemon', 'lucky_seven', 'orange', 'pear', 'strawberry', 'watermelon',
];
let betSlot = document.getElementById("betSlot")


/**
 * @type {number} The minimum spin time in seconds
 */
const BASE_SPINNING_DURATION = 2.7;

/**
 * @type {number} The additional duration to the base duration for each row (in seconds).
 * It makes the typical effect that the first reel ends, then the second, and so on...
 */
const COLUMN_SPINNING_DURATION = 0.3;


var cols;


window.addEventListener('DOMContentLoaded', function (event) {
    cols = document.querySelectorAll('.col');

    setInitialItems();
});

function setInitialItems() {
    let baseItemAmount = 40;

    for (let i = 0; i < cols.length; ++i) {
        let col = cols[i];
        let amountOfItems = baseItemAmount + (i * 3); // Increment the amount for each column
        let elms = '';
        let firstThreeElms = '';

        for (let x = 0; x < amountOfItems; x++) {
            let icon = getRandomIcon();
            let item = '<div class="icon" data-item="' + icon + '"><img src="items/' + icon + '.png"></div>';
            elms += item;

            if (x < 3) firstThreeElms += item; // Backup the first three items because the last three must be the same
        }
        col.innerHTML = elms + firstThreeElms;
    }
}
/**
 * Called when the start-button is pressed.
 *
 * @param elem The button itself
 */


let money = betSlot.value

function spin(elem) {



    if (!(payForEv == 0)) {
        if (betSlot.value != "") {
            money = betSlot.value
            money = parseFloat(money)



            let duration = BASE_SPINNING_DURATION + randomDuration();

            for (let col of cols) { // set the animation duration for each column
                duration += COLUMN_SPINNING_DURATION + randomDuration();
                col.style.animationDuration = duration + "s";
            }

            // disable the start-button
            elem.setAttribute('disabled', true);

            // set the spinning class so the css animation starts to play
            document.getElementById('container').classList.add('spinning');

            // set the result delayed
            // this would be the right place to request the combination from the server


            window.setTimeout(setResult, BASE_SPINNING_DURATION * 1000 / 2);

            window.setTimeout(function () {
                // after the spinning is done, remove the class and enable the button again
                document.getElementById('container').classList.remove('spinning');
                elem.removeAttribute('disabled');
            }.bind(elem), duration * 1000);
        }
    }






}

/**
 * Sets the result items at the beginning and the end of the columns
 */
let finalResult = []
function setResult() {
    for (let col of cols) {

        // generate 3 random items
        let results = [
            getRandomIcon(),
            getRandomIcon(),
            getRandomIcon()
        ];

        let pushcontainer = results[1]

        finalResult.push(pushcontainer)




        let icons = col.querySelectorAll('.icon img');
        // replace the first and last three items of each column with the generated items
        for (let x = 0; x < 3; x++) {
            icons[x].setAttribute('src', 'items/' + results[x] + '.png');
            icons[(icons.length - 3) + x].setAttribute('src', 'items/' + results[x] + '.png');
        }
    }

    hasfiveOccurrences(finalResult)

}

function getRandomIcon() {
    return ICONS[Math.floor(Math.random() * 2)];
}
//ICONS.length

/**
 * @returns {number} 0.00 to 0.09 inclusive
 */
function randomDuration() {
    return Math.floor(Math.random() * 10) / 100;
}




function hasThreeOccurrences(list) {

    for (let i = 0; i <= list.length - 3; i++) {
        if (list[i] === list[i + 1] && list[i + 1] === list[i + 2]) {

            finalResult = []
            win("small")
            return;
        }

    }

    finalResult = []
    lose()
}


function hasfourOccurrences(list) {

    for (let i = 0; i <= list.length - 4; i++) {
        if (list[i] === list[i + 1] && list[i + 1] === list[i + 2] && list[i] === list[i + 3]) {

            finalResult = []
            win("mid")
            return;
        }

    }
    hasThreeOccurrences(list)

}

function hasfiveOccurrences(list) {


    for (let i = 0; i <= list.length - 5; i++) {

        if (list[i] === list[i + 1] && list[i] === list[i + 2] && list[i] === list[i + 3] && list[i] === list[i + 4]) {

            finalResult = [];
            win("huge");
            return;
        }
    }


    hasfourOccurrences(list);
}


function win(text) {
    if (text == "huge") {
        money = money * 4


        checkSlot("win")
    }
    else if (text == "mid") {
        money = money * 3


        checkSlot("win")
    }
    else if (text == "small") {
        money = money * 2


        checkSlot("win")
    }
}

function lose() {
    money = money * -1
    checkSlot("lost")
}