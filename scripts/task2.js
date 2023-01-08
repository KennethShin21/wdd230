
// declare and instantiate a variable to hold the current year
const currentYear = 2022;

//place the value of the current year variable into the HTML file
document.querySelector('#year').textContent = currentYear;

//declare and instantiate a variable to hold the name of your picture
const myPicture = "Kenneth's Picture"

// copy your image into the "images" folder


// place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector('#photo').src = 'images/myPic.jpg';
document.querySelector('#photo').setAttribute('width', '300px');

let text = document.lastModified;
document.getElementById("last_updated").innerHTML = text;