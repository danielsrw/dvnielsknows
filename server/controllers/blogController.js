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

exports.exploreCategories = async(req, res) => {
    try {
        const limitNumber = 20;
        const categories = await Category.find({}).limit(limitNumber);
        res.render('categories', { title: 'DvnielKnows - Categoreis', categories } );
    } catch (error) {
        res.satus(500).send({message: error.message || "Error Occured" });
    }
}