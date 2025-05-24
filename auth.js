const passport = require('passport');

const LocalStrategy = require('passport-local' ) . Strategy;

const person=require('./models/person');


console.log("good night");

passport.use(new LocalStrategy(async (USERNAME, password, done) => {
// authentication logic here
// authentication logic nere
try{
console. log ( 'Received credentials: ', USERNAME, password) ;
const user = await person. findOne( {username: USERNAME}) ;
if (!user)
return done(null, false, { message: 'Incorrect username.' });
// const isPasswordMatch = user.password === password ? true : false;
const isPasswordMatch =await user.comparePassword(password);
if (isPasswordMatch) {
return done(null, user) ;
}else{
return done(null, false, { message: 'Incorrect password.' });}
}catch (err) {
return done(err) ;}
}));

module.exports=passport;
