import { NoteTxt } from "./note-txt.jsx"
import { NoteImg } from "./note-img.jsx"
import { NoteTodos } from "./note-todos.jsx"


export function NoteTypeDynamic({ note, onEditNote }) {
    switch (note.type) {
        case 'note-txt':
            return <NoteTxt note={note} onEditNote={onEditNote} />
        case 'note-img':
            return <NoteImg note={note} onEditNote={onEditNote} />
        case 'note-todos':
            return <NoteTodos note={note} onEditNote={onEditNote} />
    }
}
