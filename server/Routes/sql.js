var mysql = require('mysql');

var con= mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database:"doodleblue"
});

export default con;

