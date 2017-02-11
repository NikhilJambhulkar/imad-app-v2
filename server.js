var express = require('express');//create the web server
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
 'article-one':{
    title:'Article One ! Nikhil',
    heading:'Article One',
    date:'3 feb 2017',
    content:`<p>
                    This is the content of my first article.This is the content of my first article.This is the content of my first article
                    This is the content of my first article.This is the content of my first article.This is the content of my first article
                </p>
                <p>
                    This is the content of my first article.This is the content of my first article.This is the content of my first article
                    This is the content of my first article.This is the content of my first article.This is the content of my first article
                </p>
                <p>
                    This is the content of my first article.This is the content of my first article.This is the content of my first article
                    This is the content of my first article.This is the content of my first article.This is the content of my first article
                </p>`
    
},
 'article-two':{
    title:'Article One ! Nikhil',
    heading:'Article Two',
    date:'3 feb 2017',
    content:`<p>
                    This is the content of my two article.This is the content of my two article.This is the content of my two article
                    This is the content of my two article.This is the content of my two article.This is the content of my two article
                </p>
               <p>
                    This is the content of my two article.This is the content of my two article.This is the content of my two article
                    This is the content of my two article.This is the content of my two article.This is the content of my two article
                </p>
               <p>
                    This is the content of my two article.This is the content of my two article.This is the content of my two article
                    This is the content of my two article.This is the content of my two article.This is the content of my two article
                </p>`
    
},

 'article-three':{
    title:'Article One ! Nikhil',
    heading:'Article Three',
    date:'3 feb 2017',
    content:`<p>
                    This is the content of my third article.This is the content of my third article.This is the content of my third article
                    This is the content of my third article.This is the content of my third article.This is the content of my third article
                </p>
               <p>
                    This is the content of my third article.This is the content of my third article.This is the content of my third article
                    This is the content of my third article.This is the content of my third article.This is the content of my third article
                </p>
               <p>
                    This is the content of my third article.This is the content of my third article.This is the content of my third article
                    This is the content of my third article.This is the content of my third article.This is the content of my third article
                </p>`
    
}
    
}

function CreateTemplate(data)
{
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    var htmlTemplate=`<html>
        <head>
            <title>
                 ${title}
            </title>
            <meta name="viewport" content="width-device-width,initial-scale=1"/> 
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
                <br/>
                <h3>
                     ${heading}
                </h3>
                <div>
                     ${date}
                </div>
                <div>
                   ${content}
                </div>
            </div>
        </body>`;
        return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter=0;
app.get('/counter', function(req, res){
    counter=counter + 1 ;
     res.send(counter.toString());
});

var comments=[];
app.get('/submit-name', function (req, res) {
    var comment=req.query.comment;
    comments.push(name);
    res.send(JSON.stringify(names));
});

var names=[];
app.get('/submit-name', function (req, res) {
    var name=req.query.name;
    names.push(name);
    res.send(JSON.stringify(names));
});
app.get('/:articleName', function(req, res){
    var articleName=req.params.articleName;
     res.send(CreateTemplate(articles[articleName]));
});




app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
