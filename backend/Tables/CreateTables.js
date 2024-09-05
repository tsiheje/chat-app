const DB = require('../DB/configDB');

const CreateUserTablesSQL = `
    CREATE TABLE IF NOT EXISTS users (
        id_user INT AUTO_INCREMENT PRIMARY KEY,
        email varchar(50) NOT NULL,
        name varchar(50) NOT NULL,
        firstname varchar(50) NOT NULL,
        password varchar(150) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
`;

DB.query(CreateUserTablesSQL, (err, results, fields) => {
    if(err){
        console.log("il y a une erreur lors de la creation de la tables")
    }
    else{
        console.log("Creation du table réussi")
    }
})
