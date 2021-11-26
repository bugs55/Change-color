const buttons = document.querySelectorAll('.changeColor');
const colorValue = [];
const title = document.getElementById('Title');

buttons.forEach((item, index) => {
    colorValue[index] = item.innerHTML;

    item.addEventListener('click', () => {
        document.querySelector('body').style.backgroundColor = item.getAttribute('data-color');
        title.innerHTML = colorValue[index];
    });
});

// console.log(colorValue);


const sum = (num1, num2, num3) => {
    console.log(num1+num2+num3);
};

sum(2, 5, 7);

const showCity = (city, weather) => {
    console.log(`Jesteśmy w ${city}, dzisiaj jest ${weather}.`);
};

showCity('Katowicach', 'deszczowo');