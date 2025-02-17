const colorInput = document.getElementById("colorInput");
const studentId = document.getElementById("studentId");
const changeColorBtn = document.getElementById("changeColorBtn");
const randColorBtn = document.getElementById("randColorBtn");
const imgSelect = document.getElementById("imageSelect");
const disImg = document.getElementById("disImg");

const images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];

// function to change bg color from user input and add student id
function changeCustColor() {
    let val = parseInt(colorInput.value);
    studentId.textContent = "Student ID: 12345678";
    changeBackgroundColor(val);
}

// function to change bg color from random no.
function changeRandColor() {
    let randomValue = Math.floor(Math.random() * 101);
    changeBackgroundColor(randomValue);
}

// function to change background color based on conditions
function changeBackgroundColor(value) {
    if (value < 0 || value > 100) document.body.style.backgroundColor = "red";
    else if (value <= 20) document.body.style.backgroundColor = "green";
    else if (value <= 40) document.body.style.backgroundColor = "blue";
    else if (value <= 60) document.body.style.backgroundColor = "orange";
    else if (value <= 80) document.body.style.backgroundColor = "purple";
    else document.body.style.backgroundColor = "yellow";
}

// function to generate options for select list
function addList() {
    if (imgSelect.options.length > 1) return; // Prevent duplicate options
    images.forEach(img => {
        let option = document.createElement("option");
        option.value = `img/${img}`;
        option.textContent = img.name;
        imgSelect.appendChild(option);
    });
}

// function to change image
function changeImage() {
    disImg.src = imgSelect.value;
}

// event listeners for on click event of buttons
changeColorBtn.addEventListener("click", changeCustColor);
randColorBtn.addEventListener("click", changeRandColor);

// event listeners for on change event of select
imgSelect.addEventListener("click", addList);
imgSelect.addEventListener("change", changeImage);