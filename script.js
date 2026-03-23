'use strict';

// Store selected multiplication factor
let multiplicationFactor = null;

// Get elements from the DOM
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.multiplier-button');
    const generateButton = document.getElementById('generate-button');
    const inputField = document.getElementById('input-field');
    const outputDiv = document.getElementById('output');
    const errorDiv = document.getElementById('error');

    // Add event listeners to multiplication buttons
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Highlight clicked button and remove active class from others
            buttons.forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');

            // Set multiplication factor
            multiplicationFactor = parseInt(event.target.dataset.factor);
        });
    });

    // Add event listener to generate button
    generateButton.addEventListener('click', () => {
        const inputText = inputField.value.trim();
        let outputText = '';
        errorDiv.textContent = '';

        // Validation
        if (!inputText) {
            errorDiv.textContent = 'Input cannot be empty.';
            return;
        }
        if (inputText.length > 20) {
            errorDiv.textContent = 'Input cannot exceed 20 characters.';
            return;
        }
        if (!multiplicationFactor) {
            errorDiv.textContent = 'Please select a multiplication factor.';
            return;
        }

        // Generate output based on multiplication factor
        for (let i = 0; i < multiplicationFactor; i++) {
            outputText += inputText;
            if (i < multiplicationFactor - 1) outputText += ' '; // Add space between repetitions
        }

        // Display output
        outputDiv.textContent = outputText;
    });
});
