let tempSubmitForm = document.getElementById('tempForm')
let tempInput = document.getElementById('tempInput')
let tempHeader = document.getElementById('tempHeader')

    tempSubmitForm.addEventListener('submit', function(event) {
        event.preventDefault()
        tempHeader.innerText = 'The current temperature is ' + tempInput.value + ' °F'
         
    if(tempInput.value >= 75){
        let bg = `background: rgb(255,246,139);
        background: radial-gradient(circle, rgba(255,246,139,1) 0%, rgba(238,144,22,1) 55%, rgba(226,47,56,0.9088319088319088) 100%);`
        document.getElementById('tempBody').style = bg;
    }
    else {
        let bg = `background: rgb(216,252,255);
        background: radial-gradient(circle, rgba(216,252,255,1) 0%, rgba(42,169,222,1) 65%, rgba(15,92,208,1) 100%);`
        document.getElementById('tempBody').style = bg
    }
        
    })


   