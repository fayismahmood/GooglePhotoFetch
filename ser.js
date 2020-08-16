var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file
app.use(express.static('dist'))
// index page 
app.get('/a', function(req, res) {
    const fetch = require('node-fetch');
    fetch('https://photos.app.goo.gl/tXB2oVnXq7Tz1siz6')
    .then(res => res.text())
    .then((body)=>{
        res.render("index",{Img:extractPhotos(body)})
    });
});
app.get('/ee', function(req, res) {
    var dd=["/images/fulls/01.jpg","/images/fulls/04.jpg","/images/fulls/03.jpg","/images/fulls/02.jpg"]
        res.render("index",{Img:dd})
    
});


const regex = /"(https:\/\/lh3\.googleusercontent\.com\/[a-zA-Z0-9\-_]*)"/g

function extractPhotos(body) {
    const links = []
    let match
    while (match = regex.exec(body)) {
        links.push(match[1])
    } 
    return links
}

app.listen(8000);
console.log('8080 is the magic port');