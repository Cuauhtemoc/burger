var connection = require("./connection");

var orm = {
    getQuestionMarks: function(arr){
        var questionMarkArr = []
     for(var i = 0; i < arr.length; i++)
     {
        questionMarkArr.push("?")
     }
     return questionMarkArr.join(",")
    },
    // ObjtoSql: function (obj){
    //     var keys = Object.keys(obj);
    //     var values = Object.values(obj);
    //     var arr = [];
    //     for( var i = 0; i < keys.length; i++){
    //         var str = keys[i] + "=" + values[i];
    //         arr.push(str);
    //     }
    //     console.log(arr);
    //     return arr;
    // },
    selectALL: function(tablename, callback){
        connection.query("SELECT * FROM ??", [tablename], function(err, result){
            if (err)
            {
                console.log("there was an error: " + err)
            }
            callback(result);
        })
    },
    insertOne: function(tablename, colNames, values, callback){
        var query = "INSERT INTO " + tablename + "(" + colNames.join("  ,") + ")"
        + "VALUES(" + this.getQuestionMarks(values) + ");";
        connection.query(query, values, function(err, result){
            if (err)
            {
                console.log("there was an error" + err)
            }
            callback(result);
        })
    },
    updateOne: function(tablename, assignments, where_condition, callback){
        var query = "UPDATE " + tablename + " SET " + this.getQuestionMarks(Object.keys(assignments)) + " WHERE " + where_condition;
        console.log(query)
        connection.query(query, assignments, function(err, result){
            console.log(query);
            if (err)
            {
                console.log("there was an error: " + err) 
            }
            callback(result)
        })
    }
}
// orm.selectALL("burgers", function(result){
//     console.log(result);
// })
// orm.insertOne("burgers", ["burger_name", "devoured"], ["triple ham burger", false], function(data){
//     console.log(data);
// })
// orm.updateOne("burgers", [{burger_name: "new burger"},{devoured: true}], "id = 1", function(data){
//     console.log(data);
// } )

module.exports = orm;