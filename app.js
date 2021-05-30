const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const UserModel = require('./models/users.js');

//const UserModel = require('./models/users');
const app = express();
const port = 9000;
//const route = require('./routes/userRoutes.js');
//const UserModel = require('./models/users.js');
//require('./models/users.js')

mongoose.connect('mongodb://localhost:27017/resumedb',{useNewUrlParser: true,
useUnifiedTopology: true,
useFindAndModify: false,
useCreateIndex: true })

mongoose.connection.on('connected',()=>{
    console.log('Connection to Database Successful')
});
mongoose.connection.on('error',(err)=>{
    if(err){
    console.log('Connection Failed');
  }
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());


app.use(cors());
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
app.post('/add', async (req, res) =>{
  const data = new UserModel({
    bioData: req.body.bioData,
    education: req.body.education,
    projects: req.body.projects,
    experience: req.body.experience,
    hobbies: req.body.hobbies
  });
  try{
    const user =  await data.save()
    res.send({userdata:user})
  }
  catch(e){
    res.status(400).send({mesage:e.message})
  }
});

app.get('/api/users', (req, res) => {
  UserModel.find().then(resumes => {
    let resumeList=[], b={};
    
    for (let i=0; i<resumes.length; i++){
      b.firstName=(resumes[i].bioData.firstName);
      b.lastName=(resumes[i].bioData.lastName);
      b.id=(resumes[i].id)
      resumeList.push(b);
      b={};
    }
    res.status(200).json({
      message: "Resumes fetched successfully.",
      data: resumeList
    });
    
    
  });

});

app.get('/finduser/:id',function(req,res){
  UserModel.findOne({ "_id": req.params.id }, function (err, userDocument) {
      if(userDocument){
          res.json({
              'code': 200,
              'data':'Ok',
              'message':'User Avaiable',
              resume: userDocument
          });
      }else{
          res.json({
              'code': 400,
              'data':'error',
              'message':'User not avaiable'
          });
      }
  });
});

app.delete('/api/users/:id', (req, res) =>{
  UserModel.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json({ message: 'Resume deleted'});
  });
});


app.listen(port, () =>{
    console.log('Server has started running at port: ' + port);
});