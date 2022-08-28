
export function NoteImg({ note ,onEditNote}) {

    return <article className="note-info" >
            <img src={note.info} alt="img" />
    </article>
}