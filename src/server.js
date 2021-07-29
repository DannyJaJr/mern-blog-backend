const express = require("express");


const app = express();
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

const articlesInfo = {
    'learn-react': {
        comments: []
    },

    'learn-node': {
        comments: [],
    },

    'my-thoughts-on-react': {
        comments: [],
    },
}




///endpoints
// app.get("/hello", (req, res) => res.send("Hello"));
// app.post("/hello", (req, res) => res.send(`hello ${req.body.name}`));
// app.get("/hello/:name", (req, res) => res.send(`Hello ${req.params.name}`))
app.post("/api/articles/:name/add-comments", (req, res) => {
    const { username, text } = req.body;
    const articleName = req.params.name;

    articlesInfo[articleName].comments.push({ username, text });
    res.status(200).send(articlesInfo[articleName]);

});


app.listen(8000, () => console.log("Listening on port 8000"));