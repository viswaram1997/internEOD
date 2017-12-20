import express from "express";
import bodyParser from "body-parser";
import storedetails from "./Routes/storedetails";
import cors from "cors";
import getdetails from "./Routes/getdetails";
import getcarddetails from "./Routes/getcarddetails";
import signupcheck  from "./Routes/signupcheck";
import signup from "./Routes/signup";
import livesearch from "./Routes/liveserch";
// import unreadtask from "./Routes/unreadtask";
let app=express();
app.use(bodyParser.json());
app.use(cors());
app.use('/api/storedetails',storedetails);
app.use('/api/getdetails',getdetails);
app.use('/api/getcarddetails',getcarddetails);
app.use('/api/livesearch',livesearch);
// app.use('/api/loginuser',userlogin);
 app.use('/api/signupcheck',signupcheck);
 app.use('/api/signup',signup);
//  app.use('/api/unreadtask',unreadtask);
app.get('/',(req,res)=>{
    res.send("helloyarn");
});
// app.set('port', process.env.PORT || 7070);
// app.set('host', process.env.HOST || '192.168.43.160');

// app.listen(app.get('port'), app.get('host'), function(){
//   console.log("Express server listening on port " + app.get('port'));
// });
app.listen(7070,'192.168.10.61',()=>{
    console.log("server started");
});