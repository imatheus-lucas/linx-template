import express from 'express';
import cors from 'cors';
import http from 'http'


import '../database'
const app = express();


app.use(cors())






const server = new http.Server(app);



export default server;