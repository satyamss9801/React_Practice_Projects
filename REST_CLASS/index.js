const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid');

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
const methodOverride = require('method-override');
app.use(methodOverride('_method'));


let posts = [
    {
        id: uuidv4(),
        username: "Satyam Kumar",
        content: "I Love coding"
    },
    {
        id: uuidv4(),
        username: "Gaurav Kumar",
        content: "I Love To Travel"
    },
    {
        id: uuidv4(),
        username: "Raja Kumar",
        content: "I Love coding"
    }
]

app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});
app.get("/posts/new", (req, res) => {
    res.render("new.ejs");

});

app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    let id =uuidv4();
    console.log(id);
    res.redirect("/posts");
    posts.push({id, username, content });

});

app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => p.id === id); 
    if (!post) {
        return res.status(404).send('Post not found');
    }
    res.render("show.ejs", { post }); 
});


app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id); 
    res.render("edit.ejs", { post }); 
});

app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    if (post) {
        post.content = newContent;
        res.redirect(`/posts/${id}`);
    } else {
        res.status(404).send('Post not found');
    }
});

app.delete("/posts/:id",(req,res)=>{
    let {id} =req.params;
     posts = posts.filter((p) => id !== p.id);
     res.redirect(`/posts`);
});

app.listen(port, () => {
    console.log("listening to port : 8080");
});