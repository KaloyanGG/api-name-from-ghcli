// import { appendFileSync, existsSync, unlinkSync, unlink } from "fs";
import express from "express";
import {errorLogger} from "./logger.js";
//
// const express = require('express')

const app = express()
const port = 3000


app.use(errorLogger);

app.get('/', auth, (req, res) => {
    console.log('req.admin: ' + req.admin);
    res.send('Hello World!!!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

function auth(req, res, next) {
    // console.log('auth');
    if (req.query.admin === 'true') {
        req.admin = true;
        next(); // p
        return;
    }
    res.send('You are not an admin');

}

// throw new Error();


// throw new Error("Error");


// appendFileSync('error.log', `asdf`);
