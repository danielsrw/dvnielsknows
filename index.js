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

const title = '';
const description = '';
const image = '';
const category = '';

const postSchema = new mongoose.Schema({
    title: String,
    description: String,
    image: String,
    category: String,
})

const Post = mongoose.model('Post', postSchema)

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(3000, () => {
    console.log('Server started')
})