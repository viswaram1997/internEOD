import express from "express";
import mysql from "mysql";
import con from "./sql";
import isEmpty from "lodash/isEmpty";



function Signup(body,res)
{
   let name= body.name;
   let username=body.username;
   let password = body.password;
   let role=body.post;
   let email=body.email;

var value=[name,username,role,email,password];
    ([con.query("INSERT INTO LOGIN (name,username,role,email,password) VALUES (?)",[value], (err, result) => {
        console.log(err);
        if(isEmpty(err)){
            res.json({
                access:true
            })
        }
    })])

}
let Router = express.Router();
Router.post('/', (req, res) => {    
        Signup(req.body,res)

    
});

export default Router;