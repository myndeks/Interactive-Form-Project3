// Focus on first Input Field
const name = document.getElementById('name').focus();

// Hide other Field in job role
const otherTitle = document.getElementById('other-title').style.display = 'none';

// Hide selected theme option
const tShirtDesign = document.getElementById('design');
tShirtDesign.remove(0);

// Set default Color option
const tShirtColor = document.getElementById('color');
const tShirtNewValue = document.createElement('option');
tShirtNewValue.textContent = 'Please select a T-shirt theme';
tShirtNewValue.selected = 'select';
tShirtColor.add(tShirtNewValue, tShirtColor[0]);



// Hide the colors in the “Color” drop down menu.

tShirtColor[1].style.display = 'none';
tShirtColor[2].style.display = 'none';
tShirtColor[3].style.display = 'none';
tShirtColor[4].style.display = 'none';
tShirtColor[5].style.display = 'none';
tShirtColor[6].style.display = 'none';

tShirtDesign.addEventListener("change", (e) => {
    const selectedValue = e.target.value;

    const color = document.getElementById('color');

        if (selectedValue === 'js puns') {
            tShirtColor[1].style.display = 'block';
            tShirtColor[1].selected = 'select';
            tShirtColor[2].style.display = 'block';
            tShirtColor[3].style.display = 'block';
            tShirtColor[4].style.display = 'none';
            tShirtColor[5].style.display = 'none';
            tShirtColor[0].style.display = 'none';
        } else if (selectedValue === 'heart js') {
            tShirtColor[0].style.display = 'none';
            tShirtColor[1].style.display = 'none';
            tShirtColor[2].style.display = 'none';
            tShirtColor[3].style.display = 'none';
            tShirtColor[4].selected = 'select';
            tShirtColor[4].style.display = 'block';
            tShirtColor[5].style.display = 'block';
            tShirtColor[6].style.display = 'block'; 
        }

});


// Activities

// Creating new diw where we will display total cost of selected activities
const activities = document.querySelector('.activities');
const legend = document.getElementsByName('legend');
const newDiv = document.createElement('div');
activities.appendChild(newDiv);

let totalCost  = 0;


// Calculate totalcost of selected activities
activities.addEventListener('change', (e) => {
    let cost = parseInt(e.target.dataset.cost);
    if (e.target.checked) {

        totalCost+=cost;

    } else {
        totalCost-=cost;
    }
    newDiv.textContent = `Total  $${totalCost}`;

    if (totalCost === 0) {
        newDiv.style.display = 'none';
    } else {
        newDiv.style.display = 'block';
    }

    // Hide activities which contains same date and time

    let inputElemenets = e.target.dataset.dayAndTime;
    console.log(inputElemenets);
    const dateAndTime = document.querySelectorAll('input[type="checkbox"]');
    console.log(dateAndTime.length);

    for (let i = 0; i < dateAndTime.length; i++) {
        if (e.target.dataset.dayAndTime == dateAndTime[i]) {
            console.log('true');
        } else {
            console.log('false');
        }
        
    }
});

