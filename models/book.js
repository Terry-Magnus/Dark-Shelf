const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
    },
    authors: [{
        type: String,
        required: [true, 'Author is required'],
    }],
    categories: [{
        type: String,
        required: false,
        default: []
    }],
    description: {
        type: String,
        required: [true, 'Description is required'],
    },
    publishedDate: {
        type: Date,
        required: [true, 'Published Date is required'],
    },
    pages: {
        type: Number,
        required: [true, 'Number of pages is required'],
    },
    copies: {
        type: Number,
        required: [true, 'Available copies are required'],
        default: 1,
    }
}, { timestamps: true });

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;
