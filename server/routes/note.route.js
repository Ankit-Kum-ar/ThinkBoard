const express = require('express');
const { getAllNotes, createNote, updateNote, deleteNote, getNoteById } = require('../controllers/note.controller');
const noteRouter = express.Router();

noteRouter.get('/', getAllNotes);
noteRouter.get('/:id', getNoteById);
noteRouter.post('/', createNote);
noteRouter.put('/:id', updateNote);
noteRouter.delete('/:id', deleteNote);

module.exports = noteRouter;