import express from "express";
import jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import config from '../config.js';

/** @param {string} token */
function verifyJWTToken(token) {
    return new Promise((resolve, reject)=> {
        jwt.verify(token, config.secret, (err, decodedToken)=> {
            if(err || !decodedToken)
                return reject(err);
            return resolve(decodedToken);
        });
    });
}

/** @param {string} passwd */
async function generatePassword(passwd) {
    return await bcrypt.hash(passwd, 10);
}

/** @param {string} passwd @param {string} hash */
async function comparePassword(passwd, hash) {
    return await bcrypt.compare(passwd, hash);
}

/** @param {express.Request} @returns {string[]} */
function getUserRoles(request) {
    if(request.user) {
        return request.user.privilege.split(',');
    }
    return [];
}

export {
    verifyJWTToken,
    generatePassword,
    comparePassword,
    getUserRoles,
}