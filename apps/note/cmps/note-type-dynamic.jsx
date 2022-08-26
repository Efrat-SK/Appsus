import { NotePreviewText } from "./note-preview-text.jsx"

export function NoteTypeDynamic({ note, onEditNote }) {
    switch (note.type) {
        case 'note-txt':
            return <NotePreviewText note={note} onEditNote={onEditNote} />
        case 'note-img':
            return <NotePreviewText note={note} onEditNote={onEditNote} />
    }
}