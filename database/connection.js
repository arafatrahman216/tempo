const oracledb = require('oracledb');
oracledb.outFormat= oracledb.OBJECT;
require('dotenv').config();


let connection=undefined;
async function db_query(query , params){
    if(connection===undefined){
        connection = await oracledb.getConnection({
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD, 
            // connectString: 'localhost/orcl'
            connectString: process.env.DB_CONNECTION_STRING
            
        });
        console.log("connected to database");
    }

    try{

        oracledb.autoCommit=true;
        let result = await connection.execute(query,params);
        return result.rows; 
    } catch(err){
        console.log(err);
    }
}


module.exports = db_query;
