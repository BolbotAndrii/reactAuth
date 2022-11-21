const express = require('express')
const config = require('config')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

// init app
const app = express()

// init settings
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(bodyParser.json())


// port
const PORT = config.get('port') || 6000

const startServer = async () => {
    try {
        await mongoose.connect(config.get('mongoURI'), {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        app.listen( PORT, () => console.log(`Server started at port: ${PORT}`))
    } catch (e) {
        console.log('Server Error', e.message)
        process.exit(1)
    }
}

//start server
startServer()