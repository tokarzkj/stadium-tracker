import { createPool } from 'mysql';
const pool = createPool({
    connectionLimit: 10,
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
})

class MySqlDatabase {
    query(sql) {
        pool.query(sql, (err, results, fields) => {
            if (err) {
                throw err;
            }
            
            return {
                results: results,
                fields: fields
            };
        });
    }
}

export default MySqlDatabase;