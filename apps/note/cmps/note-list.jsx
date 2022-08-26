// import { NotePreview } from "./note-preview.jsx";
import { NoteTypeDynamic } from "./note-type-dynamic.jsx"

export function NoteList({ notes, onRemoveNote, onEditNote }) {

    return <section className="note-list">
        {notes.map(note =>
            <article className="note-preview flex column" key={note.id}>
                {/* <NotePreview note={note} onEditNote={onEditNote} /> */}
                <NoteTypeDynamic note={note} onEditNote={onEditNote} />
                <div className="devTools flex">
                    <button onClick={() => onRemoveNote(note.id)}>X</button>
                    <button onClick={() => onRemoveNote(note.id)}>X</button>
                </div>
            </article>)
        }
    </section>
}