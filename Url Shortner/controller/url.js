const shortId = require("shortid");
const URL = require("../models/url");

async function shortenUrl(url) {
    try {
        // Validate the URL or perform any other necessary actions
        const shortID = shortId.generate();

        // Save the shortened URL to the database or perform any other necessary actions
        await URL.create({
            shortId: shortID,
            redirectURL: url,
            visitHistory: [],
        });

        return shortID;
    } catch (error) {
        console.error("Error in shortenUrl:", error);
        throw error; // Handle the error appropriately
    }
}

module.exports = {
    shortenUrl,
};