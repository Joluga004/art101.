// index.js - conditionals
// Author: Jorge L. Garcia
// Date:05/22/2024
// 
// credit to ChatGPT

$(document).ready(function() {
    function fizzBuzzBoomBang(maxNum, factors) {
        let oneLongString = '';

        for (let num = 1; num <= maxNum; num++) {
            let str = '';

            factors.forEach(factor => {
                if (num % factor.value === 0) {
                    str += factor.text;
                }
            });

            if (str === '') {
                str = num;
            }
            str += '<br>';
            oneLongString += `<div class="result">${str}</div>`;
        }

        $("#output").html(oneLongString);
    }

    $('#fizzBuzzForm').submit(function(event) {
        event.preventDefault();

        const maxNum = parseInt($('#maxNum').val());
        const factors = [
            { value: parseInt($('#factor1').val()), text: $('#text1').val() },
            { value: parseInt($('#factor2').val()), text: $('#text2').val() },
            { value: parseInt($('#factor3').val()), text: $('#text3').val() }
        ];

        fizzBuzzBoomBang(maxNum, factors);
    });
});
