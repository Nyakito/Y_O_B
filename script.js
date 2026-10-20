const currentYear = new Date().getFullYear();

let heading = document.getElementById('ageHeading');
let yearOfBirth = document.getElementById('yearOfBirth');

heading.innerHTML = "Let us Calculate your Age, Dear Human Being!";

document.querySelector('.submit').onclick = function () {

    let age = document.querySelector('.age').value;

    if (age === "") {
        window.alert("We mzee Jaza hiyo kitu!");
        return;
    }

    age = Number(age);

    if (Number.isNaN(age)) {
        yearOfBirth.innerHTML = "Don't be a bitch!";
        return;
    }

    let birthYear = currentYear - age;

    yearOfBirth.innerHTML =
        `You are ${age} years old and you were born in ${birthYear}`;
};