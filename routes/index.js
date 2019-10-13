const router = require('express').Router();

const indexRouter = require('./index');
const userRoutes = require('./user.route'); 


router.get('/', (req, res) => {
  res.send({
    success: true
  });
});

router.use("/user", userRoutes);


module.exports = router;
