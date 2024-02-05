// Set up routes for all things /api. userRoutes for sign in. Then probably a route for users or blog posts. 

const router = require('express').Router();
const userRoutes = require('./userRoutes');

router.use('/users', userRoutes);

module.exports = router;
