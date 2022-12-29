const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

/**
 * App Routes 
*/

router.get('/', blogController.homepage);
router.get('/about', blogController.about);
router.get('/signin', blogController.signin);
router.get('/contact', blogController.contact);
router.get('/register', blogController.register);
router.get('/blog/:id', blogController.viewBlog);
router.post('/search', blogController.searchBlog);
router.get('/categories', blogController.exploreCategories);
router.get('/categories/:id', blogController.exploreCategoriesById);
 
module.exports = router;