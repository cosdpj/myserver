var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  bodyParser = require('body-parser');

app.use(bodyParser.json({ type: 'application/json' }));

app.get('/list', function (req, res) {
    res.json({ message: 'hooray! welcome to our api!', date : new Date () });
})

app.post('/add', function (req, res) {
     debugger;
       var data = req.body;
       console.log( data );
       res.end( JSON.stringify(data));

})

app.listen(port);

console.log('RESTful API server started on: ' + port);