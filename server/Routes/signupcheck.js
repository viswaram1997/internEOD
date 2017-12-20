import express from "express";
import mysql from "mysql";
import con from "./sql";
import isEmpty from "lodash/isEmpty";




let Router = express.Router();
Router.get('/:name', (req, res) => {

    ([con.query("select username from login where username=" + mysql.escape(req.params.name), (err, result) => {
        
        if(isEmpty(result)){
            res.json({access:true});

        }else{
            res.json({
                access:false
            });
        }
    })])
});

export default Router;