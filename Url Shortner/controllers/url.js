const shortId = require ("shortid");
const URL = require("../models/url");

async function handleGenerateNewShortURL(req,res){
    
    const body = req.body.url;
    if (!body.url) {
        return res.status(404).send("Bad Request");
    };

    const shortID = shortId(8);
    await URL.create({
        shortId: shortID,
        redirectURL: body.url , 
        visitHistory: [],
    })

    return res.json({ id: shortID });

};


module.exports =  {
    handleGenerateNewShortURL,
};