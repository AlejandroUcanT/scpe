//Constante para el uso de sequelize
const Sequelize = require('sequelize');
//Variable conector a BD
const sequelize = require('./BD');

//Asignación de la tabla
const nombreTabla = "equipo";
//Declaración de atributos de la tabla
const Equipo = sequelize.define(nombreTabla, {
  NUM_INVENTARIO: {
    type: Sequelize.STRING,
    primaryKey: true,
    autoIncrement: false,
  },
  TIPO: Sequelize.STRING,
  MARCA: Sequelize.STRING,
  MODELO: Sequelize.STRING,
  NUM_SERIE: Sequelize.STRING,
  DISPONIBILIDAD: Sequelize.STRING,
},
{
	 timestamps: false,
});

module.exports = Equipo;