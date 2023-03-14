-- ---------------------------------------------------------------------------------
-- Routine DDL
-- Note: comments before and after the routine body will not be stored by the server
-- ---------------------------------------------------------------------------------
-- PRESTAMOS
DELIMITER ;
DROP TABLE IF EXISTS `prestamos`;
DELIMITER $$


CREATE TABLE `prestamos` (
  `id_prestamo` varchar(20) NOT NULL COMMENT 'Llave principal de prestamos',
  `solicitante` varchar(50) DEFAULT NULL COMMENT 'Solicitante de prestamo',
  `procedencia` varchar(30) DEFAULT NULL COMMENT 'Procedencia de prestamo',
  `id_equipo` varchar(50) DEFAULT NULL COMMENT 'ID equipo de prestamo',
  `fecha_prestamo` varchar(30) DEFAULT NULL COMMENT 'Fecha de prestamo',
  `fecha_devolucion` varchar(15) DEFAULT NULL COMMENT 'Fecha de devolucion',
  `tipo_prestamo` varchar(15) DEFAULT NULL COMMENT 'Tipo de prestamo',
  PRIMARY KEY (`id_prestamo`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Control de prestamos'$$