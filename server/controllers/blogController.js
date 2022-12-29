require('../models/database');
const Category = require('../models/Category');
const Blog = require('../models/Blog');

exports.homepage = async(req, res) => {
    try {
        const categories = await Category.find({}).limit(5);
        const latest = await Blog.find({}).sort({_id: -1}).limit(4);
        const tech = await Blog.find({ 'category': 'Technology' }).limit(3);
        const health = await Blog.find({ 'category': 'Health' }).limit(3);
        const music = await Blog.find({ 'category': 'Music' }).limit(3);

        const posts = { latest, tech, health, music };
        
        res.render('index', { title: 'DvnielKnows - Home', categories, posts })
    } catch (error) {
        res.status(500).send({message: error.message || "Error Occured"})
    }
}

exports.about = async(req, res) => {
    try {
        
        res.render('about', { title: 'DvnielKnows - About Us' } );
    } catch (error) {
        res.satus(500).send({message: error.message || "Error Occured" });
    }
}

exports.contact = async(req, res) => {
    try {
        
        res.render('contact', { title: 'DvnielKnows - Contact Us' } );
    } catch (error) {
        res.satus(500).send({message: error.message || "Error Occured" });
    }
}

exports.signin = async(req, res) => {
    try {
        
        res.render('signin', { title: 'DvnielKnows - Sign In' } );
    } catch (error) {
        res.satus(500).send({message: error.message || "Error Occured" });
    }
}

exports.register = async(req, res) => {
    try {
        
        res.render('register', { title: 'DvnielKnows - Create an account' } );
    } catch (error) {
        res.satus(500).send({message: error.message || "Error Occured" });
    }
}

exports.exploreCategories = async(req, res) => {
    try {
        const limitNumber = 20;
        const categories = await Category.find({}).limit(limitNumber);

        res.render('categories', { title: 'DvnielKnows - Categories', categories } );
    } catch (error) {
        res.satus(500).send({message: error.message || "Error Occured" });
    }
}

exports.exploreCategoriesById = async(req, res) => { 
    try {
        let categoryId = req.params.id;
        const limitNumber = 20;
        const categoryById = await Blog.find({ 'category': categoryId }).limit(limitNumber);
        const categories = await Category.find({}).limit(5);

        res.render('categories', { title: 'DvnielKnows - Categories', categoryById, categories } );
    } catch (error) {
        res.satus(500).send({message: error.message || "Error Occured" });
    }
}

exports.viewBlog = async(req, res) => {
    try {
        let blogId = req.params.id;
        const blog = await Blog.findById(blogId);
        res.render('blog', { title: 'DvnielKnows - View Blog', blog } );
    } catch (error) {
        res.satus(500).send({message: error.message || "Error Occured" });
    }
}

exports.searchBlog = async(req, res) => {
    try {
        let searchTerm = req.body.searchTerm;
        let blog = await Blog.find( { $text: { $search: searchTerm, $diacriticSensitive: true } });
        let categories = await Category.find({}).limit(5);

        res.render('search', { title: 'DvnielKnows - Search', blog, categories } );
    } catch (error) {
        res.satus(500).send({message: error.message || "Error Occured" });
    }
}