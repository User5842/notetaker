/**
 * Helper class used to manage Window.localStorage.
 */
export class Storage {
    static getNotes() {
        return JSON.parse(localStorage.getItem('notes'));
    }

    static set(value) {
        if (this.getNotes()) {
            const notes = [...this.getNotes(), value];
            localStorage.setItem('notes', JSON.stringify(notes));
        } else {
            const note = [value];
            localStorage.setItem('notes', JSON.stringify(note));
        }
    }
}