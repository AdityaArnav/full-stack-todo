const express = require('express');

const {Router} = require('express');
const userModel = require('../model/auth');

const { signupFn, loginFn } = require('../controller/authController');
// const loginFn = require('../controller/authController');
const authRoute = Router();

const signup = authRoute.post('/signup', signupFn);
const login = authRoute.post('/login',loginFn)

module.exports = authRoute;