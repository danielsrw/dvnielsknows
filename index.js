const express = require('express')
const { mongoose } = require('mongoose')
const ejs = require('ejs')
const bodyParser = require('body-parser')

const app = express()

mongoose.set('strictQuery', false);
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

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/contact', (req, res) => {
    res.render('contact')
})

app.get('/register', (req, res) => {
    res.render('register')
})

app.get('/signin', (req, res) => {
    res.render('signin')
})

app.listen(3000, () => {
    console.log('Server started')
})