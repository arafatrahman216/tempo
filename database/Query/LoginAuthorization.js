
const db_query= require('../connection');
const authorize= async (email, password)=>{
    
    const query= `SELECT * FROM HR.CUSTOMER_USER WHERE EMAIL LIKE \'${email}\' AND PASSWORD LIKE \'${password}\'`;
    const params=[];
    const r= await db_query(query,params);
    console.log(r);
    console.log(r.length);
    return r;
}

const Seller_authorize= async (email, password)=>{
    
    console.log(email);
    console.log(password);
    const query= `SELECT * FROM HR.SELLER_USER WHERE EMAIL LIKE \'${email}\' AND PASSWORD LIKE \'${password}\'`;
    const params=[];
    const r= await db_query(query,params);
    console.log(r);
    console.log(r.length);
    return r;
}

module.exports= {authorize, Seller_authorize};