const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())


app.get('/temp', getTemp)
app.post('/temp', changeTemp)

app.listen(3030, () => console.log('Listening on port 3030!'))