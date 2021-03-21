import { Note } from './note.js';

const notesWrapper = document.querySelector('.notes');

const note = new Note('First note', 'First note message');

notesWrapper.append(note.generateNote());