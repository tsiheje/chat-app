const mysql = require("mysql2")

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'chatapp',
    

})
connection.connect(function(err){
    if(err){
        console.log(err)
        console.log("Erreur de connection à la base de donnée");
    }else{
        console.log("connection réussi à la base de donnée");
    }
})

module.exports = connection;