import { NotePreview } from "./note-preview.jsx";


export function NoteList({notes}) {

    return <section className="note-list">
        <ul className="clean-list">
            {
                notes.map(note =>
                    <li className="note-preview" key={note.id}>
                        <NotePreview
                            note={note} />
                    </li>)
            }
        </ul>

    </section>
}