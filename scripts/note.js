import { Storage } from './storage.js';

/**
 * Note class to manage business logic of a Note.
 */
export class Note {
    constructor(title, message) {
        this._title = title;
        this._message = message;
    }

    /**
     * Method used to generate a new Note and add the corresponding
     * title and message properties to their respective fields.
     * 
     * @returns {HTMLDivElement} An instance of a Note.
     */
    generateNote() {
        this._note = this._getTemplate();
        this._note.querySelector('.note__title').textContent = this._title;
        this._note.querySelector('.note__message').textContent = this._message;

        this._setEventListeners();

        return this._note;
    }

    /**
     * Queries the DOM for the <template> tag and creates a clone
     * based off it.
     * 
     * @returns {HTMLDivElement} A clone of the Note node.
     */
    _getTemplate() {
        const noteTemplate = document.querySelector('#note__template')
            .content
            .querySelector('.note')
            .cloneNode(true);

        return noteTemplate;
    }

    /**
     * Handles the delete event on a Note.
     */
    _handleDelete() {
        Storage.deleteNote(this._title);
        this._note.remove();
    }

    /**
     * Handles the edit functionality of a Note.
     * 
     * @param {Boolean} editable Indicates if the element is editable.
     */
    _handleEdit(editable) {
        this._note.querySelector('.note__title').contentEditable = editable;
        this._note.querySelector('.note__message').contentEditable = editable;
    }

    /**
     * Helper method used to set event listeners of a Note.
     */
    _setEventListeners() {
        this._note.querySelector('.note__delete').addEventListener('click', () => {
            this._handleDelete();
        });

        this._note.querySelector('.note__edit').addEventListener('click', () => {
            this._handleEdit(true);
        });

        this._note.querySelector('.note__save').addEventListener('click', () => {
            this._handleEdit(false);
        });
    }
}