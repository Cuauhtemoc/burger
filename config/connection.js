var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "t89yihg12rw77y6f.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "by66ekvue0tn9uu6",
    password: "xmjmc3mawpjv7571",
    database: "pzv2j4tvj6yjpg9y"
})

connection.connect(function(err){
    if (err)
    {
        console.log("Connection error: " + err)
    }
    console.log("connected on id: " + connection.threadId)
})

module.exports = connection;