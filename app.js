const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

// connect to mongodb
const dbURI = 'mongodb+srv://NassHad:Zizou123Blogs@node.h3omc.mongodb.net/node-course?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => {
        // listen for requests
        app.listen(3000);
    })
    .catch((err) => {
        console.log(err);
    });

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true})) // Takes all the urls and pass it in objects
app.use(morgan('dev')); // Logs

// blog routes
app.use('/blogs', blogRoutes);

// other routes
app.get('/about', (req, res) => {
    // res.send('<p>about</p>');
    res.render('about',{title: 'About'});
});

// redirects
app.get('/', ((req, res) => {
    res.redirect('/blogs')
}))

// 404 page
app.use((req, res) => {
    res.status(404).render('404', {title: '404'});
})