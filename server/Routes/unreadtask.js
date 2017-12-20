import express from "express";
import mysql from "mysql";
import con from "./sql";

function GetUnreadTask(body,res){
    ([con.query("SELECT * FROM task WHERE viewed ='false'",[value], (err, result) => {
       
    })])
    

}

let Router = express.Router();
Router.post('/:name',(req,res)=>{
      GetUnreadTask(req.body,res);

});