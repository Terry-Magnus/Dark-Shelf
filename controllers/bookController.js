const Book = require("../models/book");
const mongoose = require("mongoose")

const getAllBooks = async (req, res) => {

    try {
        const books = await Book.find();

        res.status(200).json({
            success: true,
            message: 'Books retrieved successfully',
            data: books
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        });
    }
}

const getBook = async (req, res) => {
    const { id } = req.params

    try {
        const book = await Book.findById(id);

        res.status(200).json({
            success: true,
            message: 'Book retrieved successfully',
            data: book
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        });
    }
}

const createBook = async (req, res) => {
    const { title, authors, categories, description, publishedDate, copies, pages } = req.body;


    try {
        const book = await Book.create({
            title, authors, categories, description, publishedDate, copies, pages
        });

        res.status(201).json({
            success: true,
            message: 'Book created successfully',
            data: book
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        });
    }
}

const updateBook = async (req, res) => {
    const { id } = req.params
    const { title, authors, categories, description, publishedDate, copies, pages } = req.body;

    if (!mongoose.isValidObjectId(id)) {
        return res.status(400).json({
            success: false,
            message: "Invalid Book ID"
        })
    }

    try {
        const book = await Book.findByIdAndUpdate(id, {
            title, authors, categories, description, publishedDate, copies, pages
        }, { new: true });

        res.status(200).json({
            success: true,
            message: 'Book updated successfully',
            data: book
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        });
    }
}

const deleteBook = async (req, res) => {
    const { id } = req.params

    try {
        await Book.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: 'Book deleted successfully',

        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        });
    }
}

module.exports = {
    getAllBooks,
    getBook,
    createBook,
    updateBook,
    deleteBook
}