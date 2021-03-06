var path = require('path')
const express = require('express')
const app = express()
const dotenv = require('dotenv');
dotenv.config();

function GetKeys() {
    const {User_Name , Weatherbit_Key , Pixabay_Key} = process.env;
    return {

        User_Name,
        Weatherbit_Key,
        Pixabay_Key
    };
}

app.get('/Keys' , (req , res)=>{
    const Keys = GetKeys();
    res.send(Keys);
})

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(3001, function() {
    console.log('Example app listening on port 3001!')
})







