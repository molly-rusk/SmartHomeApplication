
// let tempBtn = document.getElementById('tempBtn')
// tempBtn.addEventListener('click', function(){
//     document.location.href = './temp.html'
// })

// let lockBtn = document.getElementById('lockBtn')
// lockBtn.addEventListener('click', function(){
//     document.location.href = './lock.html'
// })

// let lightBtn = document.getElementById('lightBtn')
// lightBtn.addEventListener('click', function(){
//     document.location.href = './lights.html'
// })

let tempSubmitForm = document.getElementById('tempForm')
let tempInput = document.getElementById('tempInput')
let tempHeader = document.getElementById('tempHeader')

    tempSubmitForm.addEventListener('submit', function(event) {
        event.preventDefault()
        tempHeader.innerText = 'The current temperature is ' + tempInput.value + ' °F'
        
        if(tempInput.value >= 75){
           document.getElementById('tempBody').style.background = '#f58235'
        }
        else {
            document.getElementById('tempBody').style.background = '#93dcf7'
        }
    })

    
