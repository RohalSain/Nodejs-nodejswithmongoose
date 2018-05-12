import express from 'express';
import config from '../config';
import middleware from '../middleare';
import initializeDb from '../db';
import restaurant from '../controller/restaurant.js'

let router = express();

// connect to database
initializeDb(db => {

	// internal middlware

	router.use(middleware( { config,db }));

  // api for routes

  router.use('/restaurant',restaurant( { config,db}));
});

export default router;