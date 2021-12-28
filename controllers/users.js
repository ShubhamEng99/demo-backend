const User=require('../models/users');
const jwt=require('jsonwebtoken');
const transporter=require('../config/nodemailer');

module.exports.sendmail=function(req,res){
    transporter.sendMail({
        from: 'shubham.eng1999@gmail.com', 
        to: req.body.email,
        subject: "verification", 
        text: req.body.otp, 
      });
      return res.send(req.body);
}

module.exports.signup=function(req,res){
    User.create(req.body,function(err,user){
        
        return res.send(user);
    })
}

module.exports.signin=function(req,res){
    User.findOne({email:req.body.email},function(err,user){
        if(!user){
            return res.send('user not found')
        }
        if(user){
            if(user.password!=req.body.password){
                return res.send('invalid password')
            }
           
            return res.json(200, {
                data:  {
                    token: jwt.sign(user.toJSON(), 'secret', {expiresIn:  '100000'}),
                    user:user
                }
            })      
        }
    })
}
module.exports.getuserbyid=function(req,res){
    User.findById(req.params.id,function(err,user){
        if(err){return;}
        return res.send(user);
    })
}

module.exports.profile=function(req,res){
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    return res.send('profile')
}

module.exports.update=function(req,res){
    User.findByIdAndUpdate(req.params.id,req.body,function(err,data){
        if(err){console.log(err);return;}
        return res.send(data);
    })
}

module.exports.delete=function(req,res){
    User.findByIdAndDelete(req.params.id,function(err,data){
        if(err){console.log(err);return;}
        return res.send(data);
    })
}