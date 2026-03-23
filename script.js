'use strict';

// Store selected multiplication factor
let multiplicationFactor = null;

// Get elements from the DOM
document.addEventListener('DOMContentLoaded', () => {
    const buttons = [
        document.getElementById("btn1x"),
        document.getElementById("btn2x"),
        document.getElementById("btn3x")
    ];
    const generateButton = document.getElementById('generateBtn');
    const inputField = document.getElementById('textInput');
    const outputDiv = document.getElementById('output');

    // Add event listeners to multiplication buttons
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            // Highlight clicked button and remove active class from others
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Set multiplication factor
            multiplicationFactor = index + 1;
            generateButton.disabled = false; // Enable generate button
        });
    });

    // Add event listener to generate button
    generateButton.addEventListener('click', () => {
        const inputText = inputField.value.trim();

        // Validation
        if (!inputText) {
            alert('Bitte einen Text eingeben!');
            return;
        }

        // Generate output based on multiplication factor
        const outputText = Array(multiplicationFactor).fill(inputText).join(' ');

        // Display output
        outputDiv.textContent = outputText;
    });
});