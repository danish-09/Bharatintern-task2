const express = require('express');
const mongoose = require('mongoose');
const articleRouter = require("./routes/articles");
const Article = require("./models/article");
const methodOverride = require('method-override')
const app = express();

// connect to db
mongoose.connect('mongodb://localhost/blogwebsiteDB');

// ejs
app.set('view engine','ejs')

// for parsing using queryString
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'))
app.get("/",async(req,res)=>{
    const articles = await Article.find().sort({createdAt:'desc'});
    res.render("articles/index", {articles:articles});
});

// defining a new route
app.use('/articles',articleRouter)

app.listen(3000);

