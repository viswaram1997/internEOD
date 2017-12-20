import express from "express";
import mysql from "mysql";
import con from "./sql";

let Router = express.Router();
function Login(data,res){
    

    let name=data.name;
    // let email=data.identifier;



    ([con.query("select password , name, post ,username from login where name=?" ,[name],(err,result)=>{
        
        if(result[0].password==data.password){
           const token = jwt.sign({post:result[0].post,username:result[0].name},config.jwtSecret);
           res.json({token});

        }
        else{
            res.status(401).json({error:{form:"invalid username or password"}});

        }

    })])



}

Router.post('/', (req, res) => {
    Login(req.body, res);


});

export default Router;