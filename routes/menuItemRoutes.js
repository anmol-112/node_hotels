const express=require('express');
const router=express.Router();
const menuItem=require('./../models/menuItem');

 router. post ('/', async (req, res) =>{
 try{
 const data = req. body // Assuming the request body contains the person data
 // Create a new Person document using the Mongoose model
 const newmenuItem = new menuItem(data) ;
 // Save the new person to the database
 const response = await newmenuItem. save() ;
 console. log ( 'data saved' ) ;
 res.status(200) . json(response) ;}
 catch (err) {
 console. log (err) ;
 res. status (500) .json({error: 'Internal Server Error'}) ;
 }})
 ;


 router. get ('/', async (req, res) =>{
try{
const data = await menuItem. find();
console. log ('data fetched' ) ;
res.status(200) . json(data);
}
catch (err) {
  console. log (err) ;
res. status (500) .json({error: 'Internal Server Error'}) ;
}})
;


// if there is space after : in taste below error occurs
router.get ('/:tastetype', async (req, res) =>{
try{
const tastetype = req. params.tastetype; // // Extract the work type from the URL parameter
if(tastetype == 'spicy' || tastetype == 'sweet' || tastetype == 'sour') 
{ const response = await menuItem. find ( {taste: tastetype}) ;
console. log ('response fetched' ) ;
res.status(200) . json(response) ;t
}else{
res. status(404) . json({error: 'Invalid work type'});
}
}catch (err) {
console. log(err) ;
res. status (500). json({error: 'Internal Server /Error'}) ;
}})
;


// comment added for git
module.exports=router;