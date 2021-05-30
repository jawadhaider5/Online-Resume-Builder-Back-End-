/*var express = require('express');
var mongoose = require('mongoose');
var router = express();

var UserModel = require('../models/users.js');

var user = mongoose.model('UserModel');
*/
/*
router.post('/api/post', function(req, res){
    var usr = new UserModel(req.body);
    usr.save(function(err, result){
        res.json(result);
    })
});
*/

/*
router.post('/api/post', function(request, response){
    var {bioData, education, experience, projects, hobbies} = request.body
    user.findOne({ "email": email }, function (err, alreadyUser) {
     if (err) throw err;
         if (alreadyUser) {
         console.log(alreadyUser);
          response.json({
              'code':404,
              'data':'error',
              'message':'Email Already Registered'
          });
 
     } else {
         // var userObject = new user({firstName: firstName, lastName:lastName, email:email, password:password})
         var userObject = new user();
         userObject.bioData = bioData;
         userObject.education = education;
         userObject.experience = experience;
         userObject.projects = projects;
         userObject.hobbies = hobbies;
         
         userObject.save(function(err,document){
         if(err)
         {
             throw err;
             response.sendStatus(400);
         }
         console.log(document)
         response.json({
             'code':200,
             'data': document.id,
             'message':'success'
         });
 
     });
 }
 });
 });

*/

/*
router.get('/userfind',function(req,res){
    console.log(req.query.id)
    user.findOne({ "_id": req.query.id }, function (err, userDocument) {
        if(userDocument){
            res.json({
                'code': 200,
                'data':'Ok',
                'message':'User Available'
            });
        }
        else{
            res.json({
                'code': 400,
                'data':'error',
                'message':'User Not Available'
            });
        }
    });
});
*/
//module.exports = router;
