import { noteForm, notesWrapper } from './elements.js';
import { Note } from './note.js';
import { Storage } from './storage.js';

function appendNote(note) {
    notesWrapper.append(note.generateNote());
}

function createNote() {
    const title = noteForm.elements['title'].value;
    const message = noteForm.elements['message'].value;
    const note = new Note(title, message);

    Storage.addNote(note);

    return note;
}

function createLocalStorageNote(note) {
    return new Note(note.title, note.message, note.id, note.date);
}

function handleNoteSubmission(event) {
    event.preventDefault();
    appendNote(createNote());
    noteForm.reset();
}

noteForm.addEventListener('submit', handleNoteSubmission);

if (Storage.getNotes()) {
    Storage
        .getNotes()
        .forEach(note => appendNote(createLocalStorageNote(note)));
}