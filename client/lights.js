
let houseOn = document.getElementById('turnOnHouse')
let houseOff = document.getElementById('turnOffHouse')
let yardOn = document.getElementById('turnOnYard')
let yardOff = document.getElementById('turnOffYard')
let header = document.getElementById('lightsHeader')

houseOn.addEventListener('click', function(event) {
    event.preventDefault()
    header.innerText = `All of the house lights are ON`
})

houseOff.addEventListener('click', function(event){
    event.preventDefault()
    header.innerText = `All of the house lights are OFF`
} )

yardOn.addEventListener('click', function(event) {
    event.preventDefault()
    header.innerText = `All of the yard lights are ON`
})

yardOff.addEventListener('click', function(event) {
    event.preventDefault()
    header.innerText = `All of the yard lights are OFF`
})