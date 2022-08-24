import { storageService } from "../../../services/storage.service.js";
import { utilService } from "../../../services/util.service.js";

export const noteService = {
    query,
    getById,
}

const KEY = 'notesDB'

const gNotes = [
    {
        id: utilService.makeId(),
        type: "note-txt",
        // isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        }
    },
    {
        id: utilService.makeId(),
        type: "note-txt",
        // isPinned: true,
        info: {
            txt: "Hello note"
        }
    },
    {
        id: utilService.makeId(),
        type: "note-txt",
        // isPinned: true,
        info: {
            txt: "Notes are my favorite"
        }
    },
    // {
    //     id: "n102",
    //     type: "note-img",
    //     info: {
    //         url: "http://some-img/me",
    //         title: "Bobi and Me"
    //     },
    //     style: {
    //         backgroundColor: "#00d"
    //     }
    // },
    // {
    //     id: "n103",
    //     type: "note-todos",
    //     info: {
    //         label: "Get my stuff together",
    //         todos: [
    //             { txt: "Driving liscence", doneAt: null },
    //             { txt: "Coding power", doneAt: 187111111 }
    //         ]
    //     }
    // }
];

function query() {
    return Promise.resolve(gNotes)
}

function getById(noteId) {
    if (!noteId) return Promise.resolve(null)
    const notes = _loadFromStorage()
    const note = notes.find(note => noteId === note.id)
    return Promise.resolve(note)
}


function _saveToStorage(notes) {
    storageService.saveToStorage(KEY, notes)
}

function _loadFromStorage() {
    return storageService.loadFromStorage(KEY)
}