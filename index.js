const express = require('express')
const cors = require('cors')
const app = express()
const router = require('./routes/routes')

app.use(cors())
app.use(express.json())
app.use(router)

app.listen(4000, function() {
    console.log("Servidor rodando =)")
})

app.get("/", (req, res) => {
    res.send("hello")
})
