const mongoose = require('mongoose');

const UrlSchema = new mongoose.Schema({
    
    shortId: {
        type: String,
        required: true,
        // for different id's
        unique: true,
    },
    redirectURL: {
        type: String,
        required: true,
    },
    visitHistory: [{ timestamp: { type: Number } }],
},
    // to undestand which entry and when its created
   { timestamps: true } 
    );

const URL = mongoose.model('url', UrlSchema);

module.exports = URL;
