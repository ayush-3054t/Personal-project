let points = document.querySelector(".container .hours")
let nums = document.querySelector(".container .num")

let rods = []
let num = []

for (let i = 1; i <= 60; i++) {
    rods.push(`<span style="--index:${i}"><p></p></span>`)
}
points.insertAdjacentHTML("afterbegin", rods.join(""))
console.log(points)

for (let i = 1; i <= 12; i++) {
    num.push(
        `<span style="--index:${i}"><p>${i}</p></span>`
    )
}

nums.insertAdjacentHTML("afterbegin", num.join(" "))


let hourHand = document.querySelector(".hour")
let minHand = document.querySelector(".minute")
let secHand = document.querySelector(".second")

function time() {
    let currentTime = new Date()

    let hrs = currentTime.getHours()
    let min = currentTime.getMinutes()
    let sec = currentTime.getSeconds()


    minHand.style.transform = `rotate(calc(${min*6}deg))`
    secHand.style.transform = `rotate(calc(${sec*6}deg))`
    hourHand.style.transform = `rotate(calc(${hrs*30 + min/2}deg))`

}

setInterval(time , 1000)