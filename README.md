# Birth Year Calculator

## Project Description

This project is a simple **Birth Year Calculator** built with HTML, CSS, and JavaScript.

The user enters their age, and the program calculates their approximate year of birth using the current year. The project was created as JavaScript practice, focusing on user input, DOM manipulation, events, type conversion, and basic validation.

## Features

- Displays a welcoming heading using JavaScript.
- Accepts the user's age through an input field.
- Validates that the input is not empty.
- Converts the input from a string to a number.
- Checks for invalid numerical input.
- Calculates the user's birth year.
- Displays the result dynamically on the page.
- Uses an alert to notify the user when the input is empty.

## Technologies Used

- HTML5
- CSS3
- JavaScript

## How It Works

The program first gets the current year:

```javascript
const currentYear = new Date().getFullYear();
```

When the user clicks the submit button, JavaScript retrieves the value entered into the input field.

The value is initially received as a string, so it is converted into a number:

```javascript
age = Number(age);
```

The program then checks whether the converted value is a valid number:

```javascript
if (Number.isNaN(age)) {
    // Invalid input
}
```

Finally, the birth year is calculated:

```javascript
let birthYear = currentYear - age;
```

The result is then displayed dynamically on the page.

## Project Structure

```text
Birth-Year/
│
├── index.html
├── styles.css
├── script.js
└── README.md
```

## Purpose

This project is part of my ongoing JavaScript learning journey. The goal is not just to build the calculator, but to understand how JavaScript interacts with HTML, handles user input, performs calculations, and responds to user actions.

## Author

- **Name:** Noah Nyakito
- **GitHub:** [@Nyakito](https://github.com/Nyakito)

## Status

Completed as a JavaScript practice project.