const express = require('express')
const { default: mongoose } = require('mongoose')
const moongose = require('mongoose')

const app = express()

// mongoose.set('strictQuery', false);
mongoose
    .connect(process.env.MONGOURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, () => {
        console.log("DB connected")
    })

app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.set('view engine', 'ejs')

app.use(require('./server/routes/index'))

app.listen(3000, () => console.log("Server started listening"))