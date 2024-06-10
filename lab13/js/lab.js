// index.js - conditionals
// Author: Jorge L. Garcia
// Date:05/22/2024
// 
// credit to ChatGPT
// This code executes when the document is fully loaded and ready
$(document).ready(function() {
    // Define a function that generates the FizzBuzzBoomBang sequence based on given parameters
    function fizzBuzzBoomBang(maxNum, factors) {
        // Initialize an empty string to store the generated sequence
        let oneLongString = '';

        // Loop through numbers from 1 to the specified maximum number
        for (let num = 1; num <= maxNum; num++) {
            let str = '';

            // Check each factor and append corresponding text if the number is divisible by the factor
            factors.forEach(factor => {
                if (num % factor.value === 0) {
                    str += factor.text;
                }
            });

            // If the string is still empty, append the number itself
            if (str === '') {
                str = num;
            }
            // Add a line break after each result
            str += '<br>';
            // Add the formatted result to the overall sequence string
            oneLongString += `<div class="result">${str}</div>`;
        }

        // Set the HTML content of the output element to the generated sequence
        $("#output").html(oneLongString);
    }

    // Add a submit event listener to the form with id "fizzBuzzForm"
    $('#fizzBuzzForm').submit(function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get the maximum number and factors from the form inputs
        const maxNum = parseInt($('#maxNum').val());
        const factors = [
            { value: parseInt($('#factor1').val()), text: $('#text1').val() },
            { value: parseInt($('#factor2').val()), text: $('#text2').val() },
            { value: parseInt($('#factor3').val()), text: $('#text3').val() }
        ];

        // Call the fizzBuzzBoomBang function with the obtained parameters
        fizzBuzzBoomBang(maxNum, factors);
    });
});
