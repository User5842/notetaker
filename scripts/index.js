import { Note } from './note.js';
import { Storage } from './storage.js';

// Wrappers
const notesWrapper = document.querySelector('.notes');

// Form elements
const noteForm = document.forms['form'];

noteForm.addEventListener('submit', event => {
    event.preventDefault();

    const title = noteForm.elements['title'].value;
    const message = noteForm.elements['message'].value;

    Storage.addNote({ title, message });

    const note = new Note(title, message);
    notesWrapper.append(note.generateNote());

    noteForm.reset();
});

if (Storage.getNotes()) {
    const notes = Storage.getNotes();

    notes.forEach(note => {
        const newNote = new Note(note.title, note.message);
        notesWrapper.append(newNote.generateNote());
    });
}