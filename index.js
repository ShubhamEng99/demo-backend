const express=require('express');
const port=8000;
const bodyParser=require('body-parser');
const Cors=require('cors');
const db=require('./config/mongoose');
const passport = require('passport');
const passportJWT = require('./config/passport-jwt-strategy');
const passportgoogleauth=require('./config/passport-googleauth')
const session=require('express-session');

const app=express();

app.use(bodyParser.json());

app.use(session({
    secret: 'secret',
    saveUninitialized: false,
    resave: false,
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(Cors());

app.use('/users',require('./routes/index'));
app.listen(port,function(err){
    if(err){
    console.log('error while running server');
    return;
    }
    console.log('server is running on port:',port)
})
