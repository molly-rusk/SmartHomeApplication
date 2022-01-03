//const axios = require('axios')

let reviewSubmit = document.getElementById('reviewForm')
let reviewName = document.getElementById('reviewName')
let reviewContent = document.getElementById('reviewContent')

reviewSubmit.addEventListener('submit', function(event) {
    event.preventDefault()

    //alert('Your review has been received successfully!')

    let body = {
        name: reviewName.value, 
        content: reviewContent.value
    }

    console.log(body)
    axios.post('http://localhost:3030/reviews', body)
        .then((res) => {
            console.log(res.data)
        })


})




