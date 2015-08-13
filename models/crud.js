/**
 * Created by apple on 8/13/15.
 */
var CRUD = {
    //insert
    _insert: function (client, insertSQLString) {
        client.query(insertSQLString, function (error, results) {
            if (error) {
                console.log("ClientReady Error:" + error.message);
                client.end();
                return;
            } else {
                console.log("Inserted:" + results.affectedRows + " row.");
                console.log("Insert success...");

            }
        });
    },
    //select
    _select: function (client, selectSQLString) {
        client.query(selectSQLString, function (error, results) {
            if (error) {
                console.log("GetData Error:" + error.message);
                client.end();
                return;
            }

            if (results.length > 0) {
                var firstResult, resultSet = '';

                for (var i = 0; i < results.length; i++) {
                    firstResult = results[i];
                    resultSet += "ID:" + firstResult["user_id"] + ' Name:' + firstResult["name"] + " EMAIL:" + firstResult["email"] + " PWD:" + firstResult["password"] + "\n";
                }
                console.log(resultSet);
            }
            console.log(results);
        });
    },
    //update
    _update: function (client, updateSQLString) {
        client.query(updateSQLString, function (error, results) {
            if (error) {
                console.log("ClientReady Error:" + error.message);
                client.end();
                return;
            }

            console.log("Update success...");


        });
    },
    //delete
    _delete: function (client, deleteSQLString) {
        client.query(deleteSQLString, function (error, results) {
            if (error) {
                console.log("ClientReady Error:" + error.message);
                client.end();
                return;
            }

            console.log("Delete success...");
        });
    }
};

exports._insert = CRUD._insert;
exports._select = CRUD._select;
exports._update = CRUD._update;
exports._delete = CRUD._delete;