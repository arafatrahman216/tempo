const db_query= require('../connection');

const TotalCustomers = async () => {
    const query = `SELECT COUNT(*) AS TOTAL_CUSTOMER FROM CUSTOMER_USER`;
    result = await db_query(query,[]);
    var total_customer= result[0].TOTAL_CUSTOMER;
    return total_customer;
}

const TotalSellers = async () => {
    const query = `SELECT COUNT(*) AS TOTAL_SELLER FROM SELLER_USER`;
    var result = await db_query(query,[]);
    var total_seller= result[0].TOTAL_SELLER;
    return total_seller;
}

const TotalProducts = async () => {
    const query = `SELECT COUNT(*) AS TOTAL_PRODUCT FROM PRODUCTS`;
    result = await db_query(query,[]);
    var total_product= result[0].TOTAL_PRODUCT;
    return total_product;
}

const TotalOrders = async () => {
    const query = `SELECT COUNT(*) AS TOTAL_ORDER FROM ORDERS`;
    result = await db_query(query,[]);
    var total_order= result[0].TOTAL_ORDER;
    return total_order;
}

const AllProducts = async () => {
    const query = `SELECT P.PRODUCT_ID , P.PRODUCT_NAME , C.CATAGORY_NAME , P.PRICE , P.STOCK_QUANTITY , S.SHOP_NAME , P.PRODUCT_IMAGE,P.PROMO_CODE,
    (SELECT COUNT(*) FROM REVIEWS R WHERE R.PRODUCT_ID = P.PRODUCT_ID) AS REVIEW_COUNT,
    (SELECT NVL(ROUND(AVG(RATING),2),0) FROM REVIEWS R WHERE R.PRODUCT_ID = P.PRODUCT_ID) AS AVERAGE_RATING,
    (SELECT COUNT(*) FROM ORDERS O WHERE O.PRODUCT_ID = P.PRODUCT_ID AND O.DELIVERY_STATUS = 'DELIVERED') AS ORDER_COUNT
    FROM PRODUCTS P JOIN CATAGORY C ON P.CATAGORY_ID = C.CATAGORY_ID JOIN SELLER_USER S ON P.SHOP_ID = S.SHOP_ID ORDER BY P.PRODUCT_ID`;
    result = await db_query(query,[]);
    var products = result;
    return products;
}

const AllCustomers = async () => {
    const query = `SELECT * FROM CUSTOMER_USER ORDER BY USER_ID`;
    result = await db_query(query,[]);
    return result;
}

const AllSellers = async () => {
    const query = `SELECT 
    S.SHOP_ID, S.SHOP_NAME, S.PHONE, S.EMAIL, S.DESCRIPTION, S.SHOP_LOGO, S.TOTAL_REVENUE
    , (SELECT COUNT(*) FROM PRODUCTS P WHERE P.SHOP_ID = S.SHOP_ID) AS PRODUCT_COUNT
    FROM SELLER_USER S ORDER BY SHOP_ID`;
    result = await db_query(query,[]);
    return result;
}

const AllOrders = async () => {
    const query = `SELECT * FROM ORDERS ORDER BY ORDER_ID`;
    result = await db_query(query,[]);
    return result;
}

const LogTable = async () => {
    const query = `SELECT * FROM LOG_TABLE ORDER BY CALL_TIME DESC`;
    result = await db_query(query,[]);
    return result;
}

const TotalLog = async () => {
    const query= `SELECT COUNT(*) AS LOGTOTAL FROM LOG_TABLE`;
    result = await db_query(query,[]);
    var logtotal= result[0].LOGTOTAL;
    return logtotal;
}

const AdminDetails = async () => {
    console.log('here');
    const sellerno = await TotalSellers();
    const customerno = await TotalCustomers();
    const productno = await TotalProducts();
    const orderno = await TotalOrders();
    const products = await AllProducts();
    const customers = await AllCustomers();
    const sellers = await AllSellers();
    const orders = await AllOrders();
    const logs = await LogTable();
    const logno = await TotalLog();
    const a= { sellerno, customerno, productno, orderno, products, customers, sellers, orders, logs, logno };
    // console.log(a);
    return a;
}

module.exports = {AdminDetails};