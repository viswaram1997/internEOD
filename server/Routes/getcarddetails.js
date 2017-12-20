import express from "express";
import mysql from "mysql";
import con from "./sql";


let Router = express.Router();
Router.get('/:id', (req, res) => {
    ([con.query("select project from tasks where id=" + mysql.escape(req.params.id), (err, result) => {
       
        return res.json(result);
  

    })])

});

export default Router;