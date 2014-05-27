'use strict';

angular.module('reservedWordsCheckerApp')
  .constant('words', {
    'MySQL 5.5': [
      'ACCESSIBLE',
      'ALTER',
      'AS',
      'BEFORE',
      'BINARY',
      'BY',
      'CASE',
      'CHARACTER',
      'COLUMN',
      'CONTINUE',
      'CROSS',
      'CURRENT_TIMESTAMP',
      'DATABASE',
      'DAY_MICROSECOND',
      'DEC',
      'DEFAULT',
      'DESC',
      'DISTINCT',
      'DOUBLE',
      'EACH',
      'ENCLOSED',
      'EXIT',
      'FETCH',
      'FLOAT8',
      'FOREIGN',
      'GENERAL',
      'HAVING',
      'HOUR_MINUTE',
      'IGNORE',
      'INDEX',
      'INOUT',
      'INT',
      'INT3',
      'INTEGER',
      'IS',
      'KEY',
      'LEADING',
      'LIKE',
      'LINES',
      'LOCALTIMESTAMP',
      'LONGBLOB',
      'LOW_PRIORITY',
      'MATCH',
      'MEDIUMINT',
      'MINUTE_MICROSECOND',
      'MODIFIES',
      'NO_WRITE_TO_BINLOG',
      'ON',
      'OPTIONALLY',
      'OUT',
      'PRECISION',
      'PURGE',
      'READS',
      'REFERENCES',
      'RENAME',
      'REQUIRE',
      'RETURN',
      'RLIKE',
      'SECOND_MICROSECOND',
      'SEPARATOR',
      'SIGNAL',
      'SPATIAL',
      'SQLEXCEPTION',
      'SQL_BIG_RESULT',
      'SSL',
      'TABLE',
      'TINYBLOB',
      'TO',
      'TRUE',
      'UNIQUE',
      'UPDATE',
      'USING',
      'UTC_TIMESTAMP',
      'VARCHAR',
      'WHEN',
      'WITH',
      'YEAR_MONTH',
      'ADD',
      'ANALYZE',
      'ASC',
      'BETWEEN',
      'BLOB',
      'CALL',
      'CHANGE',
      'CHECK',
      'CONDITION',
      'CONVERT',
      'CURRENT_DATE',
      'CURRENT_USER',
      'DATABASES',
      'DAY_MINUTE',
      'DECIMAL',
      'DELAYED',
      'DESCRIBE',
      'DISTINCTROW',
      'DROP',
      'ELSE',
      'ESCAPED',
      'EXPLAIN',
      'FLOAT',
      'FOR',
      'FROM',
      'GRANT',
      'HIGH_PRIORITY',
      'HOUR_SECOND',
      'IGNORE_SERVER_IDS',
      'INFILE',
      'INSENSITIVE',
      'INT1',
      'INT4',
      'INTERVAL',
      'ITERATE',
      'KEYS',
      'LEAVE',
      'LIMIT',
      'LOAD',
      'LOCK',
      'LONGTEXT',
      'MASTER_HEARTBEAT_PERIOD',
      'MAXVALUE',
      'MEDIUMTEXT',
      'MINUTE_SECOND',
      'NATURAL',
      'NULL',
      'OPTIMIZE',
      'OR',
      'OUTER',
      'PRIMARY',
      'RANGE',
      'READ_WRITE',
      'REGEXP',
      'REPEAT',
      'RESIGNAL',
      'REVOKE',
      'SCHEMA',
      'SELECT',
      'SET',
      'SLOW',
      'SPECIFIC',
      'SQLSTATE',
      'SQL_CALC_FOUND_ROWS',
      'STARTING',
      'TERMINATED',
      'TINYINT',
      'TRAILING',
      'UNDO',
      'UNLOCK',
      'USAGE',
      'UTC_DATE',
      'VALUES',
      'VARCHARACTER',
      'WHERE',
      'WRITE',
      'ZEROFILL',
      'ALL',
      'AND',
      'ASENSITIVE',
      'BIGINT',
      'BOTH',
      'CASCADE',
      'CHAR',
      'COLLATE',
      'CONSTRAINT',
      'CREATE',
      'CURRENT_TIME',
      'CURSOR',
      'DAY_HOUR',
      'DAY_SECOND',
      'DECLARE',
      'DELETE',
      'DETERMINISTIC',
      'DIV',
      'DUAL',
      'ELSEIF',
      'EXISTS',
      'FALSE',
      'FLOAT4',
      'FORCE',
      'FULLTEXT',
      'GROUP',
      'HOUR_MICROSECOND',
      'IF',
      'IN',
      'INNER',
      'INSERT',
      'INT2',
      'INT8',
      'INTO',
      'JOIN',
      'KILL',
      'LEFT',
      'LINEAR',
      'LOCALTIME',
      'LONG',
      'LOOP',
      'MASTER_SSL_VERIFY_SERVER_CERT',
      'MEDIUMBLOB',
      'MIDDLEINT',
      'MOD',
      'NOT',
      'NUMERIC',
      'OPTION',
      'ORDER',
      'OUTFILE',
      'PROCEDURE',
      'READ',
      'REAL',
      'RELEASE',
      'REPLACE',
      'RESTRICT',
      'RIGHT',
      'SCHEMAS',
      'SENSITIVE',
      'SHOW',
      'SMALLINT',
      'SQL',
      'SQLWARNING',
      'SQL_SMALL_RESULT',
      'STRAIGHT_JOIN',
      'THEN',
      'TINYTEXT',
      'TRIGGER',
      'UNION',
      'UNSIGNED',
      'USE',
      'UTC_TIME',
      'VARBINARY',
      'VARYING',
      'WHILE',
      'XOR'
    ],
    'MySQL 5.6': [
      'ACCESSIBLE',
      'ALTER',
      'AS',
      'BEFORE',
      'BINARY',
      'BY',
      'CASE',
      'CHARACTER',
      'COLUMN',
      'CONTINUE',
      'CROSS',
      'CURRENT_TIMESTAMP',
      'DATABASE',
      'DAY_MICROSECOND',
      'DEC',
      'DEFAULT',
      'DESC',
      'DISTINCT',
      'DOUBLE',
      'EACH',
      'ENCLOSED',
      'EXIT',
      'FETCH',
      'FLOAT8',
      'FOREIGN',
      'GENERAL',
      'GROUP',
      'HOUR_MICROSECOND',
      'IF',
      'IN',
      'INNER',
      'INSERT',
      'INT2',
      'INT8',
      'INTO',
      'IS',
      'KEY',
      'LEADING',
      'LIKE',
      'LINES',
      'LOCALTIMESTAMP',
      'LONGBLOB',
      'LOW_PRIORITY',
      'MASTER_SSL_VERIFY_SERVER_CERT',
      'MEDIUMBLOB',
      'MIDDLEINT',
      'MOD',
      'NOT',
      'NUMERIC',
      'OPTIMIZE',
      'OR',
      'OUTER',
      'PRECISION',
      'PURGE',
      'READS',
      'REFERENCES',
      'RENAME',
      'REQUIRE',
      'RETURN',
      'RLIKE',
      'SECOND_MICROSECOND',
      'SEPARATOR',
      'SIGNAL',
      'SPATIAL',
      'SQLEXCEPTION',
      'SQL_AFTER_GTIDS',
      'SQL_CALC_FOUND_ROWS',
      'STARTING',
      'TERMINATED',
      'TINYINT',
      'TRAILING',
      'UNDO',
      'UNLOCK',
      'USAGE',
      'UTC_DATE',
      'VALUES',
      'VARCHARACTER',
      'WHERE',
      'WRITE',
      'ZEROFILL',
      'ADD',
      'ANALYZE',
      'ASC',
      'BETWEEN',
      'BLOB',
      'CALL',
      'CHANGE',
      'CHECK',
      'CONDITION',
      'CONVERT',
      'CURRENT_DATE',
      'CURRENT_USER',
      'DATABASES',
      'DAY_MINUTE',
      'DECIMAL',
      'DELAYED',
      'DESCRIBE',
      'DISTINCTROW',
      'DROP',
      'ELSE',
      'ESCAPED',
      'EXPLAIN',
      'FLOAT',
      'FOR',
      'FROM',
      'GET',
      'HAVING',
      'HOUR_MINUTE',
      'IGNORE',
      'INDEX',
      'INOUT',
      'INT',
      'INT3',
      'INTEGER',
      'IO_AFTER_GTIDS',
      'ITERATE',
      'KEYS',
      'LEAVE',
      'LIMIT',
      'LOAD',
      'LOCK',
      'LONGTEXT',
      'MASTER_BIND',
      'MATCH',
      'MEDIUMINT',
      'MINUTE_MICROSECOND',
      'MODIFIES',
      'NO_WRITE_TO_BINLOG',
      'ON',
      'OPTION',
      'ORDER',
      'OUTFILE',
      'PRIMARY',
      'RANGE',
      'READ_WRITE',
      'REGEXP',
      'REPEAT',
      'RESIGNAL',
      'REVOKE',
      'SCHEMA',
      'SELECT',
      'SET',
      'SLOW',
      'SPECIFIC',
      'SQLSTATE',
      'SQL_BEFORE_GTIDS',
      'SQL_SMALL_RESULT',
      'STRAIGHT_JOIN',
      'THEN',
      'TINYTEXT',
      'TRIGGER',
      'UNION',
      'UNSIGNED',
      'USE',
      'UTC_TIME',
      'VARBINARY',
      'VARYING',
      'WHILE',
      'XOR',
      'ALL',
      'AND',
      'ASENSITIVE',
      'BIGINT',
      'BOTH',
      'CASCADE',
      'CHAR',
      'COLLATE',
      'CONSTRAINT',
      'CREATE',
      'CURRENT_TIME',
      'CURSOR',
      'DAY_HOUR',
      'DAY_SECOND',
      'DECLARE',
      'DELETE',
      'DETERMINISTIC',
      'DIV',
      'DUAL',
      'ELSEIF',
      'EXISTS',
      'FALSE',
      'FLOAT4',
      'FORCE',
      'FULLTEXT',
      'GRANT',
      'HIGH_PRIORITY',
      'HOUR_SECOND',
      'IGNORE_SERVER_IDS',
      'INFILE',
      'INSENSITIVE',
      'INT1',
      'INT4',
      'INTERVAL',
      'IO_BEFORE_GTIDS',
      'JOIN',
      'KILL',
      'LEFT',
      'LINEAR',
      'LOCALTIME',
      'LONG',
      'LOOP',
      'MASTER_HEARTBEAT_PERIOD',
      'MAXVALUE',
      'MEDIUMTEXT',
      'MINUTE_SECOND',
      'NATURAL',
      'NULL',
      'ONE_SHOT',
      'OPTIONALLY',
      'OUT',
      'PARTITION',
      'PROCEDURE',
      'READ',
      'REAL',
      'RELEASE',
      'REPLACE',
      'RESTRICT',
      'RIGHT',
      'SCHEMAS',
      'SENSITIVE',
      'SHOW',
      'SMALLINT',
      'SQL',
      'SQLWARNING',
      'SQL_BIG_RESULT',
      'SSL',
      'TABLE',
      'TINYBLOB',
      'TO',
      'TRUE',
      'UNIQUE',
      'UPDATE',
      'USING',
      'UTC_TIMESTAMP',
      'VARCHAR',
      'WHEN',
      'WITH',
      'YEAR_MONTH'
    ]
  });
