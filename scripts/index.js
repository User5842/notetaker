import { Note } from './note.js';

// Wrappers
const notesWrapper = document.querySelector('.notes');

// Form elements
const noteForm = document.forms['form'];

noteForm.addEventListener('submit', event => {
    event.preventDefault();

    const title = noteForm.elements['title'].value;
    const message = noteForm.elements['message'].value;

    const note = new Note(title, message);
    notesWrapper.append(note.generateNote());
});