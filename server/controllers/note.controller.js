const Note = require("../models/note.model");

const getAllNotes = async (_, res) => {
    try {
        const notes = await Note.find().sort({ createdAt: -1 });
        if (notes.length === 0) {
            return res.status(404).json({ message: "No notes found" });
        }
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const createNote = async (req, res) => {
    try {
        const { title, content } = req.body;

        // Validate request body
        if (!title || !content) {
            return res.status(400).json({ message: "Title and content are required" });
        }

        // Check if note already exists
        const existingNote = await Note.findOne({ title });
        if (existingNote) {
            return res.status(409).json({ message: "Note with this title already exists" });
        }

        // Create new note
        const newNote = new Note({ title, content });
        await newNote.save();

        // Return the created note
        res.status(201).json({
            message: "Note created successfully" 
        })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateNote = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content } = req.body;

        // Validate request body
        if (!title || !content) {
            return res.status(400).json({ message: "Title and content are required" });
        }

        // Check if note exists
        const note = await Note.findById(id);
        if (!note) {
            return res.status(404).json({ message: "Note not found" });
        }

        // Update note
        note.title = title;
        note.content = content;
        await note.save();

        // Return the updated note
        res.status(200).json({
            message: "Note updated successfully",
            note
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteNote = async (req, res) => {
    try {
        const { id } = req.params;

        // Check if note exists
        const note = await Note.findById(id);
        if (!note) {
            return res.status(404).json({ message: "Note not found" });
        }

        // Delete note note.remove() is not a function
        await Note.deleteOne({ _id: id });

        // Return success message
        res.status(200).json({
            message: "Note deleted successfully"
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getNoteById = async (req, res) => {
    try {
        const { id } = req.params;

        // Check if note exists
        const note = await Note.findById(id);
        if (!note) {
            return res.status(404).json({ message: "Note not found" });
        }

        // Return the note
        res.status(200).json({
            message: "Note found successfully",
            note
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getAllNotes,
    createNote,
    updateNote,
    deleteNote,
    getNoteById
}