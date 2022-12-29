const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'This field is required.'
    },
    description: {
        type: String,
        required: 'This field is required.'
    },
    email: {
        type: String,
        required: 'This field is required.'
    },
    category: {
        type: String,
        enum: ['Technology', 'Music', 'Travel', 'Sport', 'Health'],
        required: 'This field is required.'
    },
    image: {
        type: String,
        required: 'This field is required.'
    },
});

blogSchema.index({ name: 'text', description: 'text' });
// WildCard Indexing
//blogSchema.index({ "$**" : 'text' });

module.exports = mongoose.model('Blog', blogSchema);