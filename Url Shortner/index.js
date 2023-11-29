const express = require("express");
const {connectToMongoDB} = require("./connect");
const UrlRoute = require("./routes/url");

const app = express();
const port = 3000;

connectToMongoDB('mongodb://localhost:27017/short-url').then(() => console.log("Connected To mongodb.."));

app.use(express.json());

app.use("/url", UrlRoute);

app.listen(port, () => {
    console.log(`server listening on ${port}`);
})