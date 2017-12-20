import express from "express";
import mysql from "mysql";
import con from "./sql";

function GetUnreadTask(body,res){
    ([con.query("SELECT * FROM task WHERE read ='false'",[value], (err, result) => {
        console.log(err);
        if(isEmpty(err)){
            res.json({
                access:true
            })
        }
    })])
    

}

let Router = express.Router();
Router.post('/:name',(req,res)=>{
      GetUnreadTask(req.body,res);

});