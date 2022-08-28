import { NoteTypeDynamic } from "./note-type-dynamic.jsx"

const { Link, NavLink, withRouter } = ReactRouterDOM

export function NoteList({ notes, onRemoveNote, onEditNote }) {

    return <section className="note-list">
        {notes.map(note =>
            <article className="note-preview flex column" key={note.id}>
                <NoteTypeDynamic note={note} onEditNote={onEditNote} />
                <div className="devTools flex">
                    <Link to={`/mail/inbox/compose?subject=my note&body=${note.info}`}>
                        <button>
                            <img src="assets/img/email.png" alt="mail" />
                        </button>
                    </Link>
                    <button>
                        <img src="assets/img/trash.png" alt="trash" />
                    </button>

                </div>
            </article>)
        }
    </section>
}