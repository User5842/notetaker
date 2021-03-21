export class Note {
    constructor(title, message) {
        this._title = title;
        this._message = message;
    }

    generateNote() {
        this._note = this._getTemplate();
        this._note.querySelector('.note__title').textContent = this._title;
        this._note.querySelector('.note__message').textContent = this._message;

        this._setEventListeners();

        return this._note;
    }

    _getTemplate() {
        const noteTemplate = document.querySelector('#note__template')
            .content
            .querySelector('.note')
            .cloneNode(true);

        return noteTemplate;
    }

    _handleDelete() {
        this._note.remove();
    }

    _setEventListeners() {
        this._note.querySelector('.note__delete').addEventListener('click', () => {
            this._handleDelete();
        });
    }
}