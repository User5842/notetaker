/**
 * Helper class used to manage Window.localStorage.
 */
export class Storage {
    /**
     * Adds a Note to Window.localStorage.
     * 
     * @param {Note} note The note to add.
     */
    static addNote(note) {
        let notes = [note.getNoteProperties()];

        if (this.getNotes()) {
            notes = [...notes, ...this.getNotes()];
        }

        localStorage.setItem('notes', JSON.stringify(notes));
    }

    /**
     * Removes the note with the given id.
     * 
     * @param {String} id The id of the note.
     */
    static deleteNote(id) {
        localStorage.setItem(
            'notes',
            JSON.stringify(this.getNotes().filter(note => note.id !== id))
        );
    }

    /**
     * Edits the title and message of the note found using the id.
     * 
     * @param {String} id The id of the note.
     * @param {String} title The new title of the note.
     * @param {String} message The new message of the note.
     */
    static editNote(id, title, message) {
        const notes = this.getNotes();
        const index = notes.findIndex(note => note.id === id);

        notes[index].title = title;
        notes[index].message = message;

        localStorage.setItem('notes', JSON.stringify(notes));
    }

    /**
     * Returns the list of notes in storage.
     * 
     * @returns A list of notes.
     */
    static getNotes() {
        return JSON.parse(localStorage.getItem('notes'));
    }
}