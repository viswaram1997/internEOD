import express from "express";
import mysql from "mysql";
import con from "./sql";
import nanoid from "nanoid";
var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
 
// Connection URL
var url = 'mongodb://localhost:27017/doodleblue';
0
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
 
 
  db.close();
});



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
        if (!err) {
            ([con.query("select project,date,totaltime from tasks where name='viswa'", (err, result) => {
                console.log(err,"error ");
                console.log(result);
                let FinalData={
                    tasksCompleted:0,
                    totalDays:0,
                    taskPending:0,
                    userName:'viswa',
                    eods:[]
                }
               
              
                result.map((data) => {
                    var projects = [];
                    
                    
        
                    let splitproject = data.project.split("&&");
                    splitproject.splice(0, 1);
        
                    let displaydata = splitproject.map((data) => {
                        let dataa = [];
                        let dd = data.split("@");
                        let length = dd.length;
                        let pushdata = {
                            projectName: "",
                            tasks: []
                        }
        
                        for (let i = 1; i < length; i += 3) {
                            let push = {
                            }
                            pushdata.projectName = dd[0];
                            push.task = dd[i];
                            push.hrsSpent = dd[i + 1];
                           
                            push.status = dd[i + 2];
                         if(dd[i+2]==="finished"){
                         FinalData.tasksCompleted++
                         }
                            pushdata.tasks.push(push);
                        }
                        projects.push(pushdata);
                    });
                    var Pro={
                        date:data.date,
                        totaltime:data.totaltime,
                        projects:projects
                    }
                 
                    FinalData.eods.push(Pro);
                })
                FinalData.totalDays=FinalData.eods.length;
            
        
                
        
        
                return res.json(FinalData);
        
            })])
        
          

        }


    });
}


Router.post('/', (req, res) => {
    ConcatAllDetails(req.body, res);


});

export default Router;