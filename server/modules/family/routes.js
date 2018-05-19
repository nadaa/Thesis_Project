const appRouter=require('express').Router();
const appControllers=require('./controllers');



appRouter.route('/api/signup').post((req,res)=>{
	// to retreive all family members
	// console.log("request received",req.body)
	appControllers.signupUser(req,res);

})
//this for jozaa to check the router is wotk or not
appRouter.route('/').get((req,res)=>{
  // to retreive all family members
  console.log("request received from profile 2222: ",req.body)
  var t={b:'YOU ARE CONECTED TO THE SERVER :)'}
  res.send(t);

})

appRouter.route('/api/login').post((req,res)=>{
	console.log('inside')
    //to check the password for the user and start the session 
    appControllers.signinUser(req,res);

})


appRouter.route('/api/getkids/:familyid').get((req,res)=>{
  //console.log(req.params.familyid);
  appControllers.getAllKids(req,res);

})


appRouter.route('/api/setkidtask').post((req,res)=>{
  //console.log("received setkidtask");
  appControllers.setKidTask(req,res);

})

appRouter.route('/api/gettasks').post((req,res)=>{
  //console.log("received getkidtasks");
  appControllers.getTasks(req,res);

})
appRouter.route('/api/userinfo').post((req,res)=>{
  appControllers.sendUserInfo(req,res);
})


module.exports=appRouter;
