/**
 * Helper class used to manage Window.localStorage.
 */
export class Storage {
    static addNote(note) {
        note = note.getNoteProperties();

        if (this.getNotes()) {
            const notes = [...this.getNotes(), note];
            localStorage.setItem('notes', JSON.stringify(notes));
        } else {
            localStorage.setItem('notes', JSON.stringify([note]));
        }
    }

    static deleteNote(id) {
        if (this.getNotes()) {
            let notes = this.getNotes();
            const index = notes.findIndex(note => note.id === id);
            notes.splice(index, 1);
            localStorage.setItem('notes', JSON.stringify(notes));
        }
    }

    static getNotes() {
        return JSON.parse(localStorage.getItem('notes'));
    }
}