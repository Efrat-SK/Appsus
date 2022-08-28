
export function NoteTodos({ note, onEditNote }) {


    return <article className="note-info" >
        <ul>
            {note.info.map((todo, idx) => <li key={idx} 
            contentEditable="true" suppressContentEditableWarning={true}
            onBlur={(ev) => onEditNote(ev, note)}>
            {todo}</li>)}
        </ul>

    </article>
}