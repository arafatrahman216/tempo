    
const express = require('express');
const router = express.Router();
const axios = require('axios');


const db_query= require('../database/Query/Customer_query');
const { AdminDetails }= require('../database/Query/AdminQuery');

const {
    update_user, 
    Filter_Products, 
    set_products,
    Search_products_by_name,
    get_seller,
    set_seller,
    get_user,
    get_products
    } = require('../database/Query/Customer_query');

    
    router.get('/login', async (req, res) => {
        console.log('get request');
        console.log('in router');
        res.render('ForgetPassword', { type: 'admin' });
    });

    router.post('/login', async (req, res) => {
        var email=req.body.name;
        var password=req.body.password;
        console.log(req.body);
        if (email=='admin' && password=='admin')
        {
            res.json({ success: true });
            return;
        }
        res.json({ success: false});
        console.log('not ok');
    });

    
    router.get('/home', async (req, res) => {
    console.log('get request');
    const adminDetails= await AdminDetails();
    res.render('AdminHome', { 
        sellerno : adminDetails.sellerno,
        customerno : adminDetails.customerno,
        productno : adminDetails.productno,
        orderno : adminDetails.orderno,
        products : adminDetails.products,
        customers : adminDetails.customers,
        sellers : adminDetails.sellers,
        orders : adminDetails.orders,
        logs : adminDetails.logs,
        logno : adminDetails.logno
     });
});
    

module.exports = router;