import { NotePreview } from "./note-preview.jsx";


export function NoteList({ notes, onRemoveNote }) {

    return <section className="note-list">
        <ul className="clean-list">
            {
                notes.map(note =>
                    <li className="note-preview" key={note.id}>
                        <NotePreview note={note} />
                        <button onClick={() => onRemoveNote(note.id)}>X</button>
                    </li>)
            }
        </ul>

    </section>
}