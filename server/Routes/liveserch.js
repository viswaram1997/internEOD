import express from "express";
import mysql from "mysql";
import con from "./sql";


let Router = express.Router();
Router.get("/:name",(req,res)=>{
    ([con.query(`SELECT name FROM login WHERE name LIKE '${req.params.name}%'`,(err,result)=>{
        console.log(result);
        console.log(err);
             res.json(result);
    })])

})
export default Router;