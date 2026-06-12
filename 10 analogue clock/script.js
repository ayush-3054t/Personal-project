let numberHours = document.querySelector(".number_hours");
let secondsBar = document.querySelector(".seconds_bar")

let numberElement = []
let secondsElement = []
 

for(let i=1 ; i<=12 ;i++){
    numberElement.push(
        `<span style="--index:${i}"><p>${i}</p></span>`
    )
}


numberHours.insertAdjacentHTML("afterbegin" , numberElement.join(" "))

for(let i=1 ; i<=60 ; i++){
    secondsElement.push(
        `<span style="--index:${i}"><p></p></span>`
    )
}

secondsBar.insertAdjacentHTML("afterbegin" , secondsElement.join("")) 
console.log(secondsBar)


let handHours = document.querySelector(".hand.hour")
let handMinute = document.querySelector(".hand.minute")
let handSecond = document.querySelector(".hand.second")

function getCurrentTime(){
    let date = new Date();

    let currentHours = date.getHours()
    let currentMinutes = date.getMinutes()
    let currentSeconds = date.getSeconds()

    handSecond.style.transform = `rotate(${currentSeconds * 6}deg)`
    handMinute.style.transform = `rotate(${currentMinutes * 6}deg)`
    handHours.style.transform = `rotate(${currentHours * 30 + currentMinutes/2}deg)`
}

setInterval(getCurrentTime, 1000);