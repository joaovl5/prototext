// TODO
// [X] sanitization (empty text, data outside of limits)
// [X] basic block styles for replies, also telling author date etc
// [X] author pseudonymous system
// [ ] login auth system
// [ ] sub forums


const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId

const CONNECTION_STRING = "mongodb://127.0.0.1:27017/textboard"

const TITLE_MAX = 50
const CONTENT_MAX = 1000

const CommentS = new Schema({
    author: { type: String, min: 1, max: 30 },
    content: { type: String, min: 1, max: CONTENT_MAX },
    date: { type: Date, default: Date.now }
});

const PostS = new Schema({
    author: { type: String, min: 1, max: 30 },
    title: { type: String, min: 1, max: TITLE_MAX },
    content: { type: String, min: 1, max: CONTENT_MAX },
    comments: [CommentS],
    date: { type: Date, default: Date.now }
});

const Comment = mongoose.model("Comment", CommentS)
const Post = mongoose.model("Post", PostS)


const app = express()
const port = process.env.PORT || 3000

app.set('view engine', 'pug')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
    secret: 'Your_Secret_Key',
    resave: true,
    saveUninitialized: true,
    cookie: {
    
    }
}))




app.get('/', (req, res) => {


    Post.find({}).then((msgs) => {
        res.render('index', { messages: msgs })
    })
})

app.post('/', (req, res) => {



    if (isInputSafe(req.body.title, 1, TITLE_MAX) && isInputSafe(req.body.content, 1, CONTENT_MAX)) {
        const post = new Post()
        post.title = req.body.title
        post.content = req.body.content
        post.author = req.session.id
        post.save().then(() => {
            res.redirect(302, "/") // redirect to GET route
        })
    } else {
        res.redirect(302, "/?err=1")
    }





    // msgs.push(req.body.textbar)
    // res.render('index', { title: 'Hey', messages: msgs })

})

app.get('/:postId', (req, res) => {
    Post.findById(req.params.postId).then((post) => {
        res.render('post', { post: post })
    }).catch(() => {
        res.send("Post not found")
    })
})

app.post('/:postId', (req, res) => {
    if (isInputSafe(req.body.content, 1, CONTENT_MAX)) {
        Post.findById(req.params.postId).then((post) => {
            post.comments.push({
                content: req.body.content,
                author: req.session.id
            })

            post.save().then(() => {
                res.redirect(302, "/" + req.params.postId)
            })
        }).catch(() => {
            res.send("Post not found")
        })
    } else {
        res.redirect(302, "/" + req.params.postId + "?err=1")
    }
})

mongoose.connect(CONNECTION_STRING).then(() => {
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
})

function isInputSafe(text = "", min = 1, max = 1000) {
    return text != " " && text.length >= min && text.length <= max
}

function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}