/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let costPerDay = 35;

let numberOfDays = 0;

const daysOfWeek = document.querySelectorAll('.day-selector li');

const fullDay = document.getElementById('full');

const halfDay = document.getElementById('half');

const calculatedCost = document.getElementById('calculated-cost');

const clearButton = document.getElementById('clear-button');

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

daysOfWeek.forEach(day => {
    day.addEventListener('click', () => {
        const whenClicked = day.classList.contains('clicked');
        if (whenClicked) {
            day.classList.remove('clicked');
            numberOfDays = numberOfDays - 1;
        } else {
            day.classList.add('clicked');
            numberOfDays = numberOfDays + 1;
        }
        updateCost();
    });
});


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clearButton.addEventListener('click', () => {
    daysOfWeek.forEach(day => {
        day.classList.remove('clicked');
        halfDay.classList.remove('clicked');
        fullDay.classList.add('clicked');
    });
    numberOfDays = 0;
    calculatedCost.textContent = '0';
});


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

halfDay.addEventListener('click', () => {
    costPerDay = 20;
    halfDay.classList.add('clicked');
    fullDay.classList.remove('clicked');
    updateCost();
});

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.


fullDay.addEventListener('click', () => {
    costPerDay = 35;
    fullDay.classList.add('clicked');
    halfDay.classList.remove('clicked');
    updateCost();
});


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function updateCost() {
    let selectedType = 'half';
    if (fullDay.classList.contains('clicked')) {
        selectedType = 'full';
    }
    
    let totalCost = 0;
    if (selectedType === 'full') {
        totalCost = numberOfDays * costPerDay;
    } else {
        totalCost = numberOfDays * costPerDay;
    }

    calculatedCost.textContent = totalCost;
}