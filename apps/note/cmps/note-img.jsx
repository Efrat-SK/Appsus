
export function NoteImg({ note ,onEditNote}) {

    return <article className="note-info" >
        <h1 contentEditable="true" suppressContentEditableWarning={true}
            onBlur={(ev) => onEditNote(ev, note)}>{note.info.title}</h1>
            <img src={note.info.url} alt="img" />
    </article>
}