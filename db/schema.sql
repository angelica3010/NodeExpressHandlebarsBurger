-- //     1. `npm install mysql --save`

-- //     2. Inside your `burger` directory, create a directory named `db`

-- //     3. In the db folder, Create a `schema.sql` file

-- //     4. Write SQL so that it does the following things to create the database in a `schema.sql` file

-- //         * Create the `burgers_db`
-- //         * Use the `burgers_db`
-- //         * Create a burgers table like the below instructions
-- //             * `id` as primary key auto incrementing
-- //             * `burger_name` as a string
-- //             * `devoured` as a boolean
-- //             * `date` as TIMESTAMP

-- syntax here for MYSQL http://www.java2s.com/Code/Java/Database-SQL-JDBC/CreateTableWithAllDataTypesInMySQL.htm

CREATE DATABASE burgers_db;
USE burgers_db;

var orm = require('./config/orm.js');
bu

