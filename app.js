const express = require('express');
const html = require('html');
const ejs = require('ejs');
const path = require('path');

const mongoose = require('mongoose');

const app = express();

const db1URL = 'mongodb://127.0.0.1:27017/riderDB'; 
const db2URL = 'mongodb://127.0.0.1:27017/driverDB'; 
const db3URL = 'mongodb://127.0.0.1:27017/riderRequestsDB'; 


const db1Connection = mongoose.createConnection(db1URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db2Connection = mongoose.createConnection(db2URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db3Connection = mongoose.createConnection(db3URL, { useNewUrlParser: true, useUnifiedTopology: true });

const riderSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    phoneNumber: Number
  });
  const riderModel = db1Connection.model('riderModel', riderSchema);


  
const driverSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    phoneNumber: Number
  });
  const driverModel = db2Connection.model('driverModel', driverSchema);


  const riderRequests = new mongoose.Schema({
    pickup: String,
    drop: String,
    type: String,
    people: String,
    dateof: String,
    timeof: String,
    freq: String,
  });
  const rideRequests = db3Connection.model('rideRequests', riderRequests);



//mongoose.connect('mongodb://127.0.0.1:27017/riderDB', {useNewUrlParser: true});

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




/*const Schema = {
    username: String,
    email: String,
    password: String,
    phoneNumber: Number
};*/



app.get('/',function(req,res){
    res.sendFile(path.join(__dirname, 'sign-up.html'));
});

app.get('/sign-up.html',function(req,res){
    res.sendFile(path.join(__dirname, 'sign-up.html'));
});

app.get('/sign-in.html',function(req,res){
    res.sendFile(path.join(__dirname, 'sign-in.html'));
});

app.get('/rider-page-default.html',function(req,res){
    res.sendFile(path.join(__dirname, 'rider-page-default.html'));
});

app.get('/driver-main-page.html',function(req,res){
    res.sendFile(path.join(__dirname, 'driver-main-page.html'));
});




app.post("/sign-up.html",function(req,res){

    if(req.body.button1Value == 'true'){

        riderModel.findOne({email: req.body.email}).then((result) => {   
            if (result) {
                console.log('rider account with this email exists');
            } else{
                riderModel.findOne({username: req.body.name}).then((result) => {   
                    if (result) {
                        console.log('rider account with this username exists');
                    } else{
                        riderModel.findOne({phoneNumber: req.body.number}).then((result) => {   
                            if (result) {
                                console.log('rider account with this number exists');
                            } else{
                                driverModel.findOne({email: req.body.email}).then((result) => {   
                                    if (result) {
                                        console.log('driver account with this email exists');
                                    } else{
                                        driverModel.findOne({username: req.body.name}).then((result) => {   
                                            if (result) {
                                                console.log('driver account with this username exists');
                                            } else{
                                                driverModel.findOne({phoneNumber: req.body.number}).then((result) => {   
                                                    if (result) {
                                                        console.log('driver account with this number exists');
                                                    } else{

                                                           const newRider = new riderModel({
                                                               username: req.body.name,
                                                               email: req.body.email,
                                                               password: req.body.password,
                                                               phoneNumber: req.body.number
                                                           });
                                                           
                                                           newRider.save().then(()=>{
                                                               res.sendFile(path.join(__dirname, 'sign-in.html'));
                                                           }).catch((err)=>{
                                                               console.log(err);
                                                           });
                                                          }}).catch((err1) => {   
                                                              console.log(err1);
                                                           });
                                                  }}).catch((err1) => {   
                                                    console.log(err1);
                                                 });
                                        }}).catch((err1) => {   
                                            console.log(err1);
                                            });
                        }}).catch((err1) => {   
                            console.log(err1);
                            });
                    }}).catch((err1) => {   
                        console.log(err1);
                        });
                }}).catch((err1) => {   
                    console.log(err1);
                    });
                }
            



    else if(req.body.button2Value == 'true'){


        riderModel.findOne({email: req.body.email}).then((result) => {   
            if (result) {
                console.log('rider account with this email exists');
            } else{
                riderModel.findOne({username: req.body.name}).then((result) => {   
                    if (result) {
                        console.log('rider account with this username exists');
                    } else{
                        riderModel.findOne({phoneNumber: req.body.number}).then((result) => {   
                            if (result) {
                                console.log('rider account with this number exists');
                            } else{
                                driverModel.findOne({email: req.body.email}).then((result) => {   
                                    if (result) {
                                        console.log('driver account with this email exists');
                                    } else{
                                        driverModel.findOne({username: req.body.name}).then((result) => {   
                                            if (result) {
                                                console.log('driver account with this username exists');
                                            } else{
                                                driverModel.findOne({phoneNumber: req.body.number}).then((result) => {   
                                                    if (result) {
                                                        console.log('driver account with this number exists');
                                                    } else{

                                                           const newDriver = new driverModel({
                                                               username: req.body.name,
                                                               email: req.body.email,
                                                               password: req.body.password,
                                                               phoneNumber: req.body.number
                                                           });
                                                           
                                                           newDriver.save().then(()=>{
                                                               res.sendFile(path.join(__dirname, 'sign-in.html'));
                                                           }).catch((err)=>{
                                                               console.log(err);
                                                           });
                                                          }}).catch((err1) => {   
                                                              console.log(err1);
                                                           });
                                                  }}).catch((err1) => {   
                                                    console.log(err1);
                                                 });
                                        }}).catch((err1) => {   
                                            console.log(err1);
                                            });
                        }}).catch((err1) => {   
                            console.log(err1);
                            });
                    }}).catch((err1) => {   
                        console.log(err1);
                        });
                }}).catch((err1) => {   
                    console.log(err1);
                    });
}
});


app.post("/sign-in.html",function(req,res){
    const emailName = req.body.emailName;
    const passWord = req.body.passWord;

    riderModel.findOne({email: emailName}).then((result) => {   
        if (result) {
            riderModel.findOne({password: passWord}).then((result) => {   
                if (result) {
                    res.sendFile(path.join(__dirname, 'rider-page-default.html'));
                } else{
                    console.log("Invalid password");
                    res.sendFile(path.join(__dirname, 'sign-in.html'));
                }}).catch((err1) => {   
                    console.log(err1);
                 });
            
        } else {
            driverModel.findOne({email: emailName}).then((result) => {   
                if (result) {
                    driverModel.findOne({password: passWord}).then((result) => {   
                        if (result) {
                            res.sendFile(path.join(__dirname, 'driver-main-page.html'));
                        } else{
                            console.log("Invalid password");
                            res.sendFile(path.join(__dirname, 'sign-in.html'));
                        }}).catch((err2) => {   
                            console.log(err2);
                         });
                    
                } else {
                    console.log("Invalid email");
                    res.sendFile(path.join(__dirname, 'sign-in.html'));
                }
            }).catch((err3) => {   
                console.log(err3);
             });
        }
    }).catch((err4) => {   
        console.log(err4);
     });

});


app.post("/rider-page-default.html",function(req,res){
    const Pickup = req.body.pickup;
    const Drop = req.body.drop;
    const Type = req.body.type;
    const People = req.body.people;
    const Date = req.body.date;
    const Time = req.body.time;
    const Freq = req.body.freq;


    const newRideRequests = new rideRequests({
        pickup: Pickup,
        drop: Drop,
        type: Type,
        people: People,
        dateof: Date,
        timeof: Time,
        freq: Freq
    });
    
    newRideRequests.save().then(()=>{
        console.log('Your Ride is successfully scheduled');
    }).catch((err)=>{
        console.log(err);
    });

});


app.post("/driver-main-page.html",function(req,res){
    const Pickup = req.body.pickup;
    const Drop = req.body.drop;
    const Date = req.body.date;
    const Time = req.body.time;
    const Type = req.body.type;

    if(Pickup != 'null'){
    rideRequests.findOne({pickup: Pickup}).then((result)=>{
        console.log(result);
    }).catch((err)=>{
        console.log(err);
    });}

    
    if(Drop != 'null'){
    rideRequests.findOne({drop: Drop}).then((result)=>{
        console.log(result);
    }).catch((err)=>{
        console.log(err);
    });}

    if(Date != 'null'){
    rideRequests.findOne({dateof: Date}).then((result)=>{
        console.log(result);
    }).catch((err)=>{
        console.log(err);
    });}

    
    if(Time != 'null'){
    rideRequests.findOne({timeof: Time}).then((result)=>{
        console.log(result);
    }).catch((err)=>{
        console.log(err);
    });}

    rideRequests.findOne({type: Type}).then((result)=>{
        console.log(result);
    }).catch((err)=>{
        console.log(err);
    });


});




app.listen(3000,function(){
    console.log('Server started at port 3000');
});
