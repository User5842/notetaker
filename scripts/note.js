import { Storage } from './storage.js';

/**
 * Note class to manage business logic of a Note.
 */
export class Note {
    constructor(title, message, id = uuidv4(), date = null) {
        this._title = title;
        this._message = message;
        this._date = date || new Date().toJSON().slice(0, 10).replace(/-/g,'/');
        this._id = id;
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
        this._note.querySelector('.note__date').textContent = this._date;
        this._note.querySelector('.note__message').textContent = this._message;

        this._setEventListeners();

        return this._note;
    }

    /**
     * Accessor for Note properties.
     * 
     * @returns An object consisting of this Notes properties.
     */
    getNoteProperties() {
        return {
            title: this._title,
            message: this._message,
            id: this._id,
            date: this._date
        };
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
        Storage.deleteNote(this._id);
        this._note.remove();
    }

    /**
     * Handles the edit functionality of a Note.
     */
    _handleEdit() {
        this._setContentEditable({ editable: true });
    }

    /**
     * Handles the save functionality of a Note.
     */
    _handleSave() {
        this._setContentEditable({ editable: false });

        Storage.editNote(
            this._id,
            this._note.querySelector('.note__title').textContent,
            this._note.querySelector('.note__message').textContent
        );
    }

    /**
     * Helper method used to set the contentEditable attribute of an element.
     * 
     * @param {editable: String} param0 Object containing editable information. 
     */
     _setContentEditable({ editable }) {
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
            this._handleEdit();
        });

        this._note.querySelector('.note__save').addEventListener('click', () => {
            this._handleSave();
        });
    }
}