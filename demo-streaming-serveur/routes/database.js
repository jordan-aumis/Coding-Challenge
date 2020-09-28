const mysql = require('mysql');

//? CONNECTION A LA BASE DE DONNEES
const dbConnexion = mysql.createConnection({
    host: 'localhost',
    database: "demoStreaming",
    user: "jordan",
    password: "Bluechicken0",
    port: 3306,
    //SOCKET PATH
    strict: false // Permet d'entrer des valeurs NULL pour les champs date
});

dbConnexion.connect((err) => {
    if (err) {
        console.log(err.message);

    }else {
        console.log("Connexion à la base réussie");
    }
});

//? LISTE DES VARIABLES QUI VONT ETRE EXPORTEES

module.exports = dbConnexion

