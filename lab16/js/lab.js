// index.js - conditionals
// Author: Jorge L. Garcia
// Date:05/22/2024
// 
//shout out to Chat GBT
let currentComicNum;

$(document).ready(function() {
    function getAndPutData(comicNum) {
        const url = `https://xkcd.com/${comicNum}/info.0.json`;
        
        $.ajax({
            url: url,
            type: "GET",
            dataType: "json",
            success: function(comicObj) {
                currentComicNum = comicObj.num; // Update the current comic number

                // Update the title
                $('#comicTitle').text(comicObj.title);
                
                // Update the image
                $('#comicImage')
                    .attr('src', comicObj.img)
                    .attr('alt', comicObj.alt)
                    .attr('title', comicObj.alt);
            },
            error: function(xhr, status, error) {
                console.error("Error fetching data:", error);
            }
        });
    }

    // Initial fetch of the latest comic (hardcoded example using provided JSON data)
    const initialComic = {
        "month": "6",
        "num": 2943,
        "link": "",
        "year": "2024",
        "news": "",
        "safe_title": "Unsolved Chemistry Problems",
        "transcript": "",
        "alt": "I'm an H⁺ denier, in that I refuse to consider loose protons to be real hydrogen, so I personally believe it stands for 'pretend'.",
        "img": "https://imgs.xkcd.com/comics/unsolved_chemistry_problems.png",
        "title": "Unsolved Chemistry Problems",
        "day": "7"
    };

    // Set the initial comic data
    function setInitialComic(comic) {
        currentComicNum = comic.num; // Update the current comic number

        // Update the title
        $('#comicTitle').text(comic.title);
        
        // Update the image
        $('#comicImage')
            .attr('src', comic.img)
            .attr('alt', comic.alt)
            .attr('title', comic.alt);
    }

    setInitialComic(initialComic);

    // Set up button click handlers
    $('#prevButton').click(function() {
        if (currentComicNum > 1) {
            getAndPutData(currentComicNum - 1);
        }
    });

    $('#nextButton').click(function() {
        getAndPutData(currentComicNum + 1);
    });
});
