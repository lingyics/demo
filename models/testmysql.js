/**
 * Created by apple on 8/4/15.
 */

var mysql      = require('mysql');
var crud = require('./crud');

var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : '',
    database : 'customers'

});

//testing MYSQL
/*
the original table is:

 */

crud._select(connection, "select * from t_user");
crud._update(connection, 'update t_user set name="testUPDATE" where user_id =4');


