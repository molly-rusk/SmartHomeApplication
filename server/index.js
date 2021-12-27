const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())


app.get("/api/locked", (req,res) => {
    const locked = ["All doors have been locked",
                    "Doors locked successfully",
                    ]

    let randomIndex = Math.floor(Math.random() * locked.length)
    let randomLocked = locked[randomIndex]
    res.status(200).send(randomLocked)
})

app.get("/api/unlocked", (req,res) => {
    const unlocked = ["All doors have been unlocked sucessfully",
                      "Doors unlocked sucessfully"
                    ]
    
    let randomIndex = Math.floor(Math.random() * unlocked.length)
    let randomUnlocked = unlocked[randomIndex]

    res.status(200).send(randomUnlocked)
})

app.listen(3030, () => console.log('Listening on port 3030!'))