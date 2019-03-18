var orm = require("../config/orm");

var burgers = {
    selectAll: function(callback){
        orm.selectALL("burgers", function(data){
            callback(data);
        })
    },
    insertOne: function(colNames, values, callback){
        orm.insertOne("burgers", colNames,values, function(data){
            callback(data);
        })
    },
    updateOne: function(assignments, where_condition, callback){
        orm.updateOne("burgers", assignments, where_condition, function(data){
            callback(data);
        })
    }  
}

module.exports = burgers;
