import express from "express";
import mysql from "mysql";
import con from "./sql";
import nanoid from "nanoid";


let Router = express.Router();
function ConcatAllDetails(body, res) {
    console.log(body[0].date);
    let total = 0;
    var minn = [];
    let final = body.map((file) => {
        var alltask = "";
        let data = file.data.map((data) => {

            alltask = alltask + '@' + data.task + '@' + data.hrspent + '@' + data.status;
            var temp = data.hrspent.split('.');
            minn.push(temp);

        })
        return file.project + alltask;

    });
    let storedata = ""
    final.map((data) => {
        storedata = storedata + '&&' + data;
    });
    let hr = 0;
    let min = 0;
    minn.map((data) => {
        hr += data[0] * 60 * 60 * 1000;
        min += data[1] * 60 * 1000;
    });
    let Total = hr + min;
    var hours = Math.floor((Total % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((Total % (1000 * 60 * 60)) / (1000 * 60));
    var hrs = hours.toString();
    var mi = minutes.toString();
    var lastdata = `${hrs} hr:${mi} min`

    var uniqueId=nanoid(10);
    console.log(uniqueId);

    const quer = "INSERT INTO tasks (project,name,date,totaltime,id) VALUES (?)";
    var value = [storedata, "viswa", body[0].date, lastdata,uniqueId];


    con.query(quer, [value], function (err, result) {
        if (err) {
            res.status(500).json(err);
            console.log(err);

        } else {
            console.log(true)
        }


    });
}


Router.post('/', (req, res) => {
    ConcatAllDetails(req.body, res);


});

export default Router;