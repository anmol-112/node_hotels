const express=require('express');
const app = express();
const bodyParser = require( 'body-parser' );
// const person=require('./models/person');
const menuItem=require('./models/menuItem');
require('dotenv').config();
const passport=require('./auth');

// Initialize Passport
app.use(passport.initialize());

const localAuthMiddleware=passport. authenticate( 'local', {session: false});


// get is used to fetch info

// app.get('/', (req, res) => {
//   res.send('Hello World')
// })

// Middleware Function
const logRequest = (req, res, next) => {
console. log(`${new Date().toLocaleString()} Request Made to : ${req.originalUrl}`);
next ();
} 
// // Move on to the next phase

app.use(logRequest);

app.get('/',function (req, res) {
res. send ( 'Welcome to our Hotel');
} );

// app.get('/', function (req, res) {
// res. send ( 'Welcome to my hotel ji ... How i can help you ?')
// })
app.get('/chicken', (req, res)=>{
res. send ('sure sir, i would love to serve chicken')
})
app.get('/idli', (req, res)=>{
  var customized_idli = {
name :'rava idli',
size: '10 cm diameter',
is_sambhar: true,
is_chutney: false}
res. send ( customized_idli)
});
// 3000 is a kind of adress of localhost

// app.listen(3000,()=>{console.log("Listning on Port")});

app.post('/idli', (req, res)=>{
res.send ('data is saved' )}) ;

// mongodb

const db=require('./db');
//although this require line come at first


app.use(bodyParser. json()); // req.body

// app. post ('/person', async (req, res) =>{
// try{
// const data = req. body // Assuming the request body contains the person data
// // Create a new Person document using the Mongoose model
// const newPerson = new person(data) ;
// // Save the new person to the database
// const response = await newPerson. save() ;
// console. log ( 'data saved' ) ;
// res.status(200) . json(response) ;}
// catch (err) {
// console. log (err) ;
// res. status (500) .json({error: 'Internal Server Error'}) ;
// }})
// ;

//GET method to get the person

// app. get ('/person', async (req, res) =>{
// try{
// const data = await person. find();
// console. log ('data fetched' ) ;
// res.status(200) . json(data);
// }
// catch (err) {
//   console. log (err) ;
// res. status (500) .json({error: 'Internal Server Error'}) ;
// }})
// ;


// app. post ('/menu', async (req, res) =>{
// try{
// const data = req. body // Assuming the request body contains the person data
// // Create a new Person document using the Mongoose model
// const newmenuItem = new menuItem(data) ;
// // Save the new person to the database
// const response = await newmenuItem. save() ;
// console. log ( 'data saved' ) ;
// res.status(200) . json(response) ;}
// catch (err) {
// console. log (err) ;
// res. status (500) .json({error: 'Internal Server Error'}) ;
// }})
// ;

// GET method to get the menu

// app. get ('/menu', async (req, res) =>{
// try{
// const data = await menuItem. find();
// console. log ('data fetched' ) ;
// res.status(200) . json(data);
// }
// catch (err) {
//   console. log (err) ;
// res. status (500) .json({error: 'Internal Server Error'}) ;
// }})
// ;

// next

// app.get ('/person/:workType', async(req, res)=>{
// try{
// const workType = req. params.workType; // // Extract the work type from the URL parameter
// if(workType == 'chef' || workType == 'manager' || workType == 'waiter') 
// { const response = await person. find ( {work: workType}) ;
// console. log ('response fetched' ) ;
// res.status(200) . json(response) ;
// }else{
// res. status(404) . json({error: 'Invalid work type'});
// }
// }catch (err) {
// console. log(err) ;
// res. status (500). json({error: 'Internal Server /Error'}) ;
// }})
// ;

// Import the router files
const personRoutes = require('./routes/personRoutes') ;
// Use the routers
app. use ('/person',localAuthMiddleware,personRoutes) ;


// Import the router files
const menuItemRoutes = require('./routes/menuItemRoutes') ;
// Use the routers
app. use ('/menu',menuItemRoutes) ;

const PORT=process.env.PORT || 3000;

app.listen(PORT,()=>{console.log("Listning on Port")});
