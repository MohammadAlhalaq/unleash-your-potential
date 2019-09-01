const jwt = require('jsonwebtoken');
require('env2')('./config.env');

const { getPosts } = require('../database/queries/getPost');

exports.getHome = (req, res, next) => {
  let username = '' 
  if (req.logedIn) { username  = req.unleash.user_name }
  getPosts()
    .then((posts) => 
      res.render('home', {
         allPosts: posts.rows,
         isLogedIn: req.logedIn,
         name: username,
        })
    )
    .catch((err) => next(err.stacks));
};
//DONE
