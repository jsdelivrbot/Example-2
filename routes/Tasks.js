var express = require('express');
 var router = express.Router();
 var Task=require('../models/Task');

router.post('/',function(req,res,next){
  res.send('Cannot POST');
});

router.get('/getImage',function(req,res,next){
  Task.getAllImages(function(err,rows){
    if(err){
      res.json(err);
    }else{
      res.json(rows);
    }
  });
});

router.post('/getTask',function(req,res,next){
 
if(req.body.id){
  Task.getAllTasks(req.body.id,function(err,rows){
 
    if(err)
    {
      res.json(err);
    }
    else
    {
      res.json(rows);
    }
 
  });
}else{
  res.send('Cannot POST');
}
 
});

router.post('/addTask',function(req,res,next){

if(req.body.id,req.body.title,req.body.status){
  Task.addTask(req.body,function(err,count){
    if(err)
    {
      res.json(err.sqlMessage);
    }
    else{
      res.json(req.body);//or return count for 1 &amp;amp;amp; 0
    }
  });
}else{
  res.send('Cannot POST');
}

});
router.post('/deleteTask',function(req,res,next){

if(req.body.id){
  Task.deleteTask(req.body.id,function(err,count){
 
    if(err)
    {
      res.json(err);
    }
    else
    {
      res.json(count);
    }
 
  });
}else{
  res.send('Cannot POST');
} 
 });
router.post('/updateTask',function(req,res,next){

if(req.body.id){
  Task.updateTask(req.body.id,req.body,function(err,rows){
 
    if(err)
    {
      res.json(err);
    }
    else
    {
      res.json(rows);
    }
  });
}else{
  res.send('Cannot POST');
} 
});
 module.exports=router;