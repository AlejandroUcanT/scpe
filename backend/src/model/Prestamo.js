//Constante para el uso de sequelize
const Sequelize = require('sequelize');
//Variable conector a BD
const sequelize = require('./BD');
//Enlace a llave foránea
const Equipo = require('./Equipo');

//Asignación de la tabla
const nombreTabla = "prestamo";
//Declaración de atributos de la tabla
const Prestamo = sequelize.define(nombreTabla, {
  ID_PRESTAMO: {
    type: Sequelize.STRING,
    primaryKey: true,
    autoIncrement: false,
  },
  SOLICITANTE: Sequelize.STRING,
  PROCEDENCIA: Sequelize.STRING,
  ID_EQUIPO: Sequelize.STRING,
  FECHA_PRESTAMO: Sequelize.STRING,
  FECHA_DEVOLUCION: Sequelize.STRING,
  TIPO_PRESTAMO: Sequelize.STRING
},
{
	 timestamps: false,
});

module.exports = Prestamo;
