// student id and name
const name = "Nicholas Fairweather";
const id = "1273132";

//add my info dynamically
document.getElementById("studentInfo").textContent = `Student: ${name} | ID: ${id}`;

const apiKey = "AIzaSyCQ5PWGS_EI2qfPCSF0yobgnz3XqrWQ47M";
const baseUrl = "https://www.googleapis.com/youtube/v3/search";

//import elements from the html page
const form = document.getElementById("form"); 
const input = document.getElementById("input"); 
const resultSec = document.getElementById("results");

//form submission
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const query = input.value.trim();

    if (query) {
        fetchVideos(query);
    }
});

// get eh videos based from the user input
function fetchVideos(query) {
    // build the request url
    const url = `${baseUrl}?part=snippet&type=video&maxResults=5&q=${encodeURIComponent(query)}&key=${apiKey}`;

    fetch(url)
        .then(function(resp) {
            return resp.json();
        })
        .then(function(data) {
            displayResults(data);
        })
        .catch(function(error) {
            console.error("error fetching videos:", error);
            resultSec.innerHTML = `<p>error loading videos. Check the console.</p>`;
        });
}


//display the results
function displayResults(data) {
    resultSec.innerHTML = ""; // clear previous results

    // if null show this message
    if (!data.items || data.items.length === 0) {
        resultSec.innerHTML = "<p>no results found.</p>";
        return;
    }

    // create html for each vid
    for (let i = 0; i < data.items.length; i++) {
        const item = data.items[i];
        const vidId = item.id.videoId;
        const title = item.snippet.title;
    
        // create container
        const vidWrap = document.createElement("div");
        vidWrap.className = "video";
    
        const titleEl = document.createElement("h3");
        titleEl.textContent = title;
    
        // create iframe
        const iframe = document.createElement("iframe");
        iframe.width = "300";
        iframe.height = "200";
        iframe.setAttribute("src", "https://www.youtube.com/embed/" + vidId);
        iframe.setAttribute("allowfullscreen", "");
    
        vidWrap.appendChild(titleEl);
        vidWrap.appendChild(iframe);
    
        // add to results setion
        resultSec.appendChild(vidWrap);
    }    
}
