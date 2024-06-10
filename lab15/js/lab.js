// index.js - conditionals
// Author: Jorge L. Garcia
// Date:05/22/2024
// 
// credit to ChatGPT
// This code executes when the document is fully loaded and ready
$(document).ready(function() {
    $('#fetchButton').click(function() {
        $.ajax({
            url: "https://api.chucknorris.io/jokes/random",
            type: "GET",
            dataType: "json",
            success: function(data) {
                // Display the joke in the output div
                $('#output').text(data.value);
            },
            error: function(xhr, status, error) {
                console.error("Error fetching data:", error);
                $('#output').text("An error occurred while fetching data.");
            }
        });
    });
});
