const express=require('express');
const router=express.Router();
const passport=require('passport')
const controller=require('../controllers/users')
const taskcontroller=require('../controllers/tasks')

router.post('/signup',controller.signup);
router.post('/signin',controller.signin);
router.get('/profile',passport.authenticate('jwt',{session:false}),controller.profile)
router.get('/getuser/:id',controller.getuserbyid);
router.post('/sendmail',controller.sendmail);
router.post('/update/:id',controller.update);
router.delete('/delete/:id',controller.delete);
router.get('/auth/google',passport.authenticate('google', {scope: ['profile', 'email']}));
router.get('/auth/google/callback', passport.authenticate('google', {failureRedirect: '/signup'}), controller.profile);
router.get('/tasks/:user',taskcontroller.gettasks);
router.post('/task/create',taskcontroller.create);
router.delete('/task/delete/:id',taskcontroller.deletetask);
router.post('/task/update/:id',taskcontroller.updatetask);
module.exports=router; 