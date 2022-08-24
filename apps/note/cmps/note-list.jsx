import { NotePreview } from "./note-preview.jsx";


export function NoteList({notes}) {

    return <section className="note-list">
        <h1>note list:</h1>
        <ul className="clean-list">
            {
                notes.map(note =>
                    <li className="note-preview" key={note.id}>
                        <NotePreview
                            note={note} />

                        {/* <Link to={"/note/" + note.id}>Details</Link> | 
                        <Link to={`/note/edit/${note.id}`}>Edit</Link>
                        <button onClick={()=>onRemoveCar(note.id)}>X</button> */}
                    </li>)
            }
        </ul>

    </section>
}