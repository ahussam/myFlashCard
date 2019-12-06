var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/';
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

function csrfToken(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

var token = csrfToken(8);

app.use('/static', express.static('static'));
app.set('view engine', 'vash');


app.get('/', function(req, res) {

    res.render('index', {
        title: 'Home Page'
    });

});

app.get('/add', function(req, res) {

    res.render('add', {
        title: 'Add a Card',
        token: token
    });

});

app.get('/general', function(req, res) {

    res.render('general', {
        title: 'General Cards',
        tag: 'g'
    });

});


app.get('/security', function(req, res) {

    res.render('security', {
        title: 'Security Cards',
        tag: 's'
    });

});


app.get('/code', function(req, res) {

    res.render('code', {
        title: 'Code Cards',
        tag: 'c'
    });

});



app.get('/cards.json', function(req, res) {

    MongoClient.connect(url, function(err, db) {

        if (err) throw err;

        var dbo = db.db('MyDb'); // Database Name
        var tag = req.query.tag; //?tag=s OR ?tag=g ...etc. 
        var query = {
            tag: tag
        }; // Query to Mongo's find() function. 

        dbo.collection('cards').find(query).toArray(function(err, result) {
            if (err) throw err;
            res.json(result); // Returns a JSON array of objects. 
            db.close();

        });
    });
});


app.put('/solve.json', function(req, res) {

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;

        var dbo = db.db('MyDb'); // Database Name
        var id = req.query.id; //?id=123123 
        var newvalues = {
            $inc: {
                solved: 1
            }
        }; // inc by 1 

        dbo.collection('cards').update({
            _id: ObjectId(id)
        }, newvalues, function(err, res) {
            if (err) throw err;

            db.close();
        });
    });

    res.json({
        status: 'done'
    });

});

app.post('/addCard.json', function(req, res) {

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("MyDb");
        var myobj = {
            front: req.body.q,
            back: '<br>' + req.body.a,
            solved: 0,
            tag: req.body.type
        };
        if (req.body.token === token) {
            dbo.collection("cards").insertOne(myobj, function(err, res) {
                if (err) throw err;

                db.close();
            });
        }
    });

    res.json({
        status: 'done'
    });

});



var server = app.listen(5000, function() {
    console.log('Server is running');


});