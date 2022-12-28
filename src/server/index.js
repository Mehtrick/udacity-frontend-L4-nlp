var path = require('path')
const express = require('express')
const dotenv = require('dotenv');
const meaninglcoudApiBaseUrl = "https://api.meaningcloud.com/sentiment-2.1"
const FormData = require('form-data');
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const {re} = require("@babel/core/lib/vendor/import-meta-resolve");

dotenv.config();

const app = express()

app.use(express.static('dist'))
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('dist/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.post('/analyzeText', async function (req, res) {
    console.log(req.body)
    const response = await analyzeText(req.body.txt)
    console.log(response)
    res.send(response);
})

async function analyzeText(text) {
    console.log(text)
    const form = new FormData();
    form.append("key", "2d58b9af293898dc3f325552f7e463a5");
    form.append("lang", "en");
    form.append("model", "general")
    form.append("txt", text)

    return await fetch(meaninglcoudApiBaseUrl, {
        method: 'POST',
        body: form
    })
        .then(res =>
             res.json()
        )
        .then(function (res) {
            console.log(res)
            return {
                subjectivity: res.subjectivity,
                text: res.sentence_list[0].text
            }
        })
}