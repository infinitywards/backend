const express=require('express')
const formidable = require('formidable');
const util = require('util');
const readXls=require('../services/xcelreading')

const userRouter=new express.Router()

userRouter.post('/sendsms',async (req,res)=>{
      try{
        var form = new formidable.IncomingForm();
 
        form.parse(req, function(err, fields, files) {
         // console.log(files)
         var f = files[Object.keys(files)[0]];
         readXls(fields['message'],f.path)
          res.writeHead(200, {'content-type': 'text/plain'});
          res.write('received upload:\n\n');
          res.end(util.inspect({fields: fields, files: files}));

        });

       // console.log(util.inspect({fields: fields, files: files}))

        // if(!user){
        //   return  res.status(400).send({error:'Unable to save user.. Something went wrong!'})
        // }
        //res.status(201).send({message:'Sucess response'})
      }catch(e){
          //res.send({error:e})
      }
    
})




module.exports=userRouter;