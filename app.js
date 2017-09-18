const express = require( 'express' );
const app = express();

const volleyball = require('volleyball')

app.use(volleyball)

app.use(function (req, res, next){
    console.log(req.method+'/ is-anybody-in-here');
    console.log(res.statusCode+' /');
    next();
})

app.get('/', function(req, res){
    res.send('Hello world')
});

app.listen(3000);