const mongoose=require('mongoose');

// Define the MongoDB connection URL
// const mongoURL = 'mongodb://localhost:27017/mydb';
//now above not for local


const mongoURL='mongodb+srv://helloworld:Anmol1234@cluster0.ylps7ox.mongodb.net/';

// Replace 'mydatabase' with your database name
// Set up MongoDB connection
mongoose. connect (mongoURL);

// Get the default connection
// Mongoose maintains a default connection object representing the MongoDB connection.
const db = mongoose.connection;

db.on('connected', () => {
console. log ( "Connected to MongoDB server" ) ;});

db. on ('error', (err) => {
console. error ('MongoDB connection error: ', err);});
db. on('disconnected', () => {
console. log ( 'MongoDB disconnected' ) ;
}) ;

// export db

module.exports=db;