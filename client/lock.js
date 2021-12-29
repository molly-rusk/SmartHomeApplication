
let lockDoor = document.getElementById('lockedBtn')
let unlockDoor = document.getElementById('unlockedBtn')
let lockHeader = document.getElementById('lockHeader')

lockDoor.addEventListener('click', function(event){
    event.preventDefault()
    lockHeader.innerText = `All doors have been locked`
})

unlockDoor.addEventListener('click', function(event){
    event.preventDefault()
    lockHeader.innerText = `All doors have been unlocked`
})