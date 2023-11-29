const express = require ("express");
const handleGenerateNewShortURL = require("../controllers/url")

const router = express.Router();


router.post('/', (req, res) => {
  res.send(handleGenerateNewShortURL);
}) 


module.exports = router;