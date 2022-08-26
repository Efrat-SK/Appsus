
export function NotePreviewText({ note ,onEditNote}) {

    return <article className="note-info" >
        <h1 contentEditable="true" suppressContentEditableWarning={true}
            onBlur={(ev) => onEditNote(ev, note)}>{note.info.txt}</h1>
    </article>
}