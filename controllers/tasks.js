const Task=require('../models/tasks');


module.exports.create=function(req,res){
    Task.create(req.body,function(err,data){
       data.populate('user','name').then(data=>{return res.send(data)} );
    })  
}

module.exports.gettasks=function(req,res){
    Task.find({user:req.body.user},function(err,tasks){
        if(err){return;}
        return res.send(tasks);
    })
}

module.exports.deletetask=function(req,res){
    Task.findByIdAndDelete(req.params.id,function(err,data){
        if(err){return;}
        return res.json(200,{
            message:'task deleted'           
        })
    })
}

module.exports.updatetask=function(req,res){
    Task.findByIdAndUpdate(req.params.id,{content:req.body.content},function(err,data){
        if(err){return}
        return res.send(data);
    })
}