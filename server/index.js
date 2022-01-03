const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

let reviewArr = []

app.get("/locked", (req,res) => {
    const locked = ["All doors have been locked",
                    "Doors locked successfully",
                    ]

    let randomIndex = Math.floor(Math.random() * locked.length)
    let randomLocked = locked[randomIndex]
    res.status(200).send(randomLocked)
})

app.get("/unlocked", (req,res) => {
    const unlocked = ["All doors have been unlocked sucessfully",
                      "Doors unlocked sucessfully"
                    ]
    
    let randomIndex = Math.floor(Math.random() * unlocked.length)
    let randomUnlocked = unlocked[randomIndex]

    res.status(200).send(randomUnlocked)
})

app.post("/reviews", (req,res) => {

    console.log(req.body)

    let review = req.body

    reviewArr.push(review)

    res.status(200).send(reviewArr)


})

app.listen(3030, () => console.log('Listening on port 3030!'))