let counter = document.querySelector("#counterDays")
let remove = document.getElementById("remove")

let currentDate = new Date()
let eidDays = new Date(2024, 5, 16);

let diff = eidDays - currentDate

let remainingDays = Math.floor(diff/(1000 * 60 * 60 * 24))
let remainingHours = Math.floor(diff/(1000 * 60 * 60))
let remainingMinutes = Math.floor(diff/(1000 * 60))
let remainingSeconds = Math.floor(diff/(1000))

counterDays.innerText = `${remainingDays} days remaining`
counterHours.innerText = `${remainingHours} hours remaining`
counterMinutes.innerText = `${remainingMinutes} minutes remaining`
counterSeconds.innerText = `${remainingSeconds} seconds remaining`


if(remainingDays < 0){
    counterDays.innerText = "EID MUBARAK"
    counterHours.innerText = ""
    counterMinutes.innerText = ""
    counterSeconds.innerText = ""
    remove.innerText = ""
}



