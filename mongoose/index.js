/**  including .env file */
require('dotenv').config();

/**import http, express module and create server*/
const http = require('http');
const express = require('express');
const server = express();

/**use middleware for parse the body */
server.use(express.json());

/** Including mongo connection file */
const mongo	= require("./config/connection");

/**importing the routings */
const productRouter = require('./routes/product');

/**attaching router in server with the help of middleware*/
server.use('/api/v1/product', productRouter.router);

server.use((req,res,next)=>{
    next()
})

server.listen(process.env.PORT,()=>{
    console.log(`server started on ${process.env.PORT}`)
});