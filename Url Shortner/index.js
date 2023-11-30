const express = require("express");
const bodyParser = require('body-parser');
const { connectToMongoDB } = require("./connect");
const { shortenUrl } = require("./controller/url");
const URL = require("./models/url"); // Adjust the path based on your file structure


const app = express();
const port = 3000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))

connectToMongoDB('mongodb://localhost:27017/short-url').then(() => console.log("Connected To mongodb.."));

// Shorten URL
app.post('/shorten', async (req, res) => {
    try {
        const shortenedUrl = await shortenUrl(req.body.url);
        console.log("Shortened URL:", shortenedUrl);
        res.status(201).json({ id: shortenedUrl });
    } catch (error) {
        console.error("Error in handling URL:", error);
        res.status(500).send("Internal Server Error");
    }
});

// Redirect to original URL
app.get('/:shortId', async (req, res) => {
    try {
        const urlData = await URL.findOne({ shortId: req.params.shortId });
        console.log( req.params.shortId);

        if (urlData) {
            // Redirect to the original URL
            console.log("Redirecting to:", urlData.redirectURL);
            res.redirect(urlData.redirectURL);
        } else {
            // Handle not found case
            console.log("ShortId not found:", req.params.shortId);
            res.status(404).send("Not Found");
        }
    } catch (error) {
        console.error("Error in redirecting:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(port, () => {
    console.log(`server listening on ${port}`);
});
