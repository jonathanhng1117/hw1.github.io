const myImage = document.querySelector("img");

// changes the image when clicked
myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/cheese.jpg") {
        myImage.setAttribute("src", "images/cheese2.jpg");
    } else {
        myImage.setAttribute("src", "images/cheese.jpg");
    }
};

// references to the new button and heading
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

// function to set username 
function setUserName() {
    const myName = prompt("Please enter your name.");
    
    // check for blank names
    if (!myName) {
        setUserName();
    } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Cheese is good, ${myName}`;
  }
}

// structures webpage when it first loads
if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Cheese is good, ${storedName}`;
}

// add a set username button
myButton.onclick = () => {
    setUserName();
};
  