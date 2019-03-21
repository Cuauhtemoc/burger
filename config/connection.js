var mysql = require("mysql");
var connection;
if( process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL)
}
else{
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "password",
        database: "burgers_db"
    })
}

connection.connect(function(err){
    if (err)
    {
        console.log("Connection error: " + err)
    }
    console.log("connected on id: " + connection.threadId)
})

module.exports = connection;