import { storageService } from "../../../services/storage.service.js";
import { utilService } from "../../../services/util.service.js";

export const noteService = {
    query,
    getById,
    save,
    remove,
    update,
}

const KEY = 'notesDB'

const gNotes = [
    {
        id: utilService.makeId(),
        type: "note-txt",
        info: "Fullstack Me Baby!"
    },
    {
        id: utilService.makeId(),
        type: "note-txt",
        info: "Hello note"
    },
    {
        id: utilService.makeId(),
        type: "note-txt",
        info: "Notes are my favorite"
    },
    {
        id: utilService.makeId(),
        type: "note-img",
        info: "https://img.freepik.com/free-vector/spring-flower-collection_23-2148853687.jpg?w=2000",
    },
    {
        id: utilService.makeId(),
        type: "note-todos",
        info: [
            "Driving liscence",
            "Coding power"
        ]
    }
]

function query() {
    let notes = _loadFromStorage()
    if (!notes) {
        notes = gNotes
        _saveToStorage(notes)
    }
    return Promise.resolve(notes)
}

function getById(noteId) {
    if (!noteId) return Promise.resolve(null)
    const notes = _loadFromStorage()
    const note = notes.find(note => noteId === note.id)
    return Promise.resolve(note)
}

function save(newNote) {
    console.log('newNote: ', newNote)
    let notes = _loadFromStorage()
    notes = [newNote, ...notes]
    _saveToStorage(notes)
    return Promise.resolve(newNote)
}

function update(noteToUpdate, newInput) {
    let updatedNote = _updateNote(noteToUpdate, newInput)
    let notes = _loadFromStorage()
    notes = notes.map(note => note.id === noteToUpdate.id ? updatedNote : note)
    _saveToStorage(notes)
    return Promise.resolve(updatedNote)
}

function remove(noteId) {
    let notes = _loadFromStorage()
    notes = notes.filter(note => note.id !== noteId)
    _saveToStorage(notes)
    return Promise.resolve()
}

function _updateNote(note, newInfo) {
    return {
        id: note.id,
        type: note.type,
        info: newInfo
    }
}

function _saveToStorage(notes) {
    storageService.saveToStorage(KEY, notes)
}

function _loadFromStorage() {
    return storageService.loadFromStorage(KEY)
}