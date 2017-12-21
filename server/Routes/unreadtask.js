import express from "express";
import mysql from "mysql";
import con from "./sql";

function GetUnreadTask(body, res) {
    ([con.query("SELECT * FROM tasks WHERE viewed ='false'", [value], (err, result) => {
        let FinalData = {
            tasksCompleted: 0,
            totalDays: 0,
            taskPending: 0,
            userName: req.params.name,
            eods: []
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
                    if (dd[i + 2] === "finished") {
                        FinalData.tasksCompleted++
                    }
                    pushdata.tasks.push(push);
                }
                projects.push(pushdata);
            });
            var Pro = {
                date: data.date,
                totaltime: data.totaltime,
                projects: projects
            }
            FinalData.eods.push(Pro);
        })
        FinalData.totalDays = FinalData.eods.length;
        return res.json(FinalData);
    })])


}

let Router = express.Router();
Router.get('/', (req, res) => {
    GetUnreadTask(req.body, res);

});