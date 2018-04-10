var mysql=require('mysql');
 var connection=mysql.createPool({
 
host:'us-cdbr-iron-east-05.cleardb.net',
 user:'baebb9dd5144af',
 password:'b322b98f',
 database:'heroku_b7a0123940faa89'
 
});
 module.exports=connection;
