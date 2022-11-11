//Sequelize es un ORM (Object-Relational mapping) para Nodejs que nos permite manipular varias bases de datos SQL
//mysql, sqlite, postgres, mssql

const Sequelize = require('sequelize');

const sequelize = new Sequelize('scpe', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql',
});

sequelize.authenticate()
  .then(() => {
    console.log('Conectado')
  })
  .catch(error => {
    console.log('No se conecto: ' + error)
});

module.exports = sequelize;
