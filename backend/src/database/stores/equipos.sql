-- ---------------------------------------------------------------------------------
-- Routine DDL
-- Note: comments before and after the routine body will not be stored by the server
-- ---------------------------------------------------------------------------------
-- EQUIPOS
DELIMITER ;
DROP TABLE IF EXISTS `equipos`;
DELIMITER $$


CREATE TABLE `equipos` (
  `num_inventario` varchar(20) NOT NULL COMMENT 'Llave principal de equipos\\n',
  `tipo` varchar(50) DEFAULT NULL COMMENT 'Tipo de equipo\\n',
  `marca` varchar(30) DEFAULT NULL COMMENT 'Marca de equipo\\n',
  `modelo` varchar(50) DEFAULT NULL COMMENT 'Modelo de equipo\\n',
  `num_serie` varchar(30) DEFAULT NULL COMMENT 'Número de serie de equipo\\n',
  `disponibilidad` varchar(15) DEFAULT NULL COMMENT 'Disponibilidad de equipo\\n',
  PRIMARY KEY (`num_inventario`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Control de equipos'$$