const oracledb = require('oracledb');
oracledb.outFormat= oracledb.OBJECT;


let connection=undefined;
async function db_query(query , params){
    if(connection===undefined){
        connection = await oracledb.getConnection({
            user: 'VMART_VENTURES',
            password: '123',
            //connectionString: 'localhost/orcldb',
            connectString: 'localhost/orcl'
            
        });
        console.log("connected to database");
    }

    try{

        let result = await connection.execute(query,params);
        oracledb.autoCommit=true;
        return result.rows; 
    } catch(err){
        console.log(err);
    }
}


module.exports = db_query;