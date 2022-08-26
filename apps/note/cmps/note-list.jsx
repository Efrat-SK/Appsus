import { NotePreview } from "./note-preview.jsx";


export function NoteList({ notes, onRemoveNote ,onEditNote }) {

    return <section className="note-list">
        <ul className="clean-list grid">
            {
                notes.map(note =>
                    <li className="note-preview flex column" key={note.id}>
                        <NotePreview note={note} onEditNote={onEditNote}/>
                        <div className="devTools flex">
                        <button onClick={() => onRemoveNote(note.id)}>X</button>
                        <button onClick={() => onRemoveNote(note.id)}>X</button>
                        </div>
                    </li>)
            }
        </ul>

    </section>
}