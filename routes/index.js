import express from 'express';
import userRouter from './users.js'
import citiRouter from './cities.js'
import itinerariesRouter from './itineraries.js'
import activitiesRouter from './activities.js'
import authRouter from './auth.js';
import likesRouter from './likes.js';
import commentsRouter from './comments.js';


let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.use('/users',userRouter)
router.use('/cities',citiRouter)
router.use('/itineraries',itinerariesRouter)
router.use('/activities',activitiesRouter)
router.use('/auth',authRouter)
router.use('/likes',likesRouter)
router.use('/comments',commentsRouter)

export default router;
