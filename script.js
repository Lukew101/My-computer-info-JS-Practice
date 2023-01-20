const computer = {
    brand: "Micro-star International Co",
    model: "MAG H410 Infinite S",
    version: "Microsoft Windows 10",
    functioning: true,
    issues: false,
    age: 1.5,
    warrantyChecker: function(age){
        if(age < 2){
            return "This computer is still under warranty";
        } else{
            return "This computer is no longer under warranty";
        };
    },
    applications: ["Discord", "Microsoft edge", "Spotify", "Teams", "Visual Studio Code", "Steam", "Google chrome", "Firefox", "Battlenet", "Github Desktop"],
    applicationChecker: function(application){
        let appFound = false;
        for(let i = 0;i<this.applications.length;i++){
            if(this.applications[i].toLowerCase() === application.toLowerCase()){
                appFound= true;
                break;
            } 
        }
        if(appFound){
            return "This app is on the computer"
        } else{
            return "This app is not installed on the computer";
        };
    },
    features: [{
        RAM: 8,
        HDMI: true,
        USBC: true,
        USB: true,
    }],
    equipment: [{
        mouse: "Logitech G502 Hero",
        headset: "Logitech Pro Wireless",
        keyboard: "Logitech K120",
        monitor: "ASUS VG255H"
    }],
};
/*
console.log(computer.warrantyChecker(computer.age));
console.log(computer.applicationChecker("discord"));
*/

if(window.location.pathname === "index.html"){
    // Log in page
let hintArrow = document.querySelector(".hint-arrow");
let hintText = document.querySelector(".hint-text");

let hintArrowClicked = hintArrow.addEventListener("click", function(){
    hintText.classList.toggle("show-text");
});


function checkPassword(){
    let passwordResult = document.querySelector(".password-result");
    let passwordInput = document.getElementById("password-textbox");
    let submitButton = document.querySelector(".enter");
    let password = "qwerty";

    submitButton.addEventListener("click", function(event){
        event.preventDefault();
        if(passwordInput.value == password){
            window.location.href = "computer-info.html";
        } else{
            passwordResult.innerHTML = "Incorrect! Please try again.";
            setTimeout(function(){
                passwordResult.innerHTML = "";
            }, 2000);
        }
    });
};
checkPassword();
};


// Computer info page

const applicationCheckerGame = () => {
    let checkButton = document.querySelector(".check-button");
    let score = 0;
    let usedNames = [];

    checkButton.addEventListener("click", function(event){
        event.preventDefault();

        let userWord = document.getElementById("game-textbox").value;
        let myApps = computer.applications;
        let gameResult = document.querySelector(".game-result");
        let appFound = false;

        for(let i = 0;i<myApps.length;i++){
            if(myApps[i].toLowerCase() === userWord.toLowerCase()){
                appFound= true;
                break;
            } 
        }
        
        if(appFound){
            if(usedNames.includes(userWord.toLowerCase())){
                gameResult.innerHTML = "Sneaky! You have already used this app. Try again."
            } else{
                score++;
                usedNames.push(userWord.toLowerCase());
                gameResult.innerHTML = `We have ${score} the same`;
                if(score >= 2){
                    gameResult.innerHTML = `We now have ${score} the same. Are you copying me?`;
                } else if (score >= 3){
                    gameResult.innerHTML = `We now have ${score} the same. Are you me?`;
                } else if(score >= 4){
                    gameResult.innerHTML = `We now have ${score} the same. Now this is weird.`;
                }
            }
        } else{
            gameResult.innerHTML = `Incorrect. We still have ${score} the same`;
        }
    });
};
applicationCheckerGame();