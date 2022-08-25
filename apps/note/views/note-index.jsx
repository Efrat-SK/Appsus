import { EditNote } from "../cmps/edit-note.jsx";
import { NoteList } from "../cmps/note-list.jsx";
import { noteService } from '../services/note.service.js';

export class NoteIndex extends React.Component {

    state = {
        notes: [],
        filterBy: null
    }

    componentDidMount() {
        this.loadNotes()
    }

    loadNotes = () => {
        { console.log('load notes') }
        noteService.query()
            .then(notes => this.setState({ notes }))
    }

    onEditNote = () => {
        this.loadNotes()
    }

    onRemoveNote = (noteId) => {
        noteService.remove(noteId)
            .then(() => {
                this.setState(this.loadNotes)
            })
    }

    render() {
        const { notes } = this.state
        const { onEditNote, onRemoveNote } = this
        return (
            <section className="note-app main-layout">
                <EditNote onEditNote={onEditNote} />
                <NoteList notes={notes} onRemoveNote={onRemoveNote} />
            </section>
        )
    }
}
