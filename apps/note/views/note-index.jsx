import { AddNote } from "../cmps/add-note.jsx";
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

    onEditNote = (ev, note) => {
        console.log(ev)
        // console.log(note)
        // console.log(note.id)
        console.log(note.info)

        const updatedNote = { ...note, txt: ev.target.innerText }
        console.log('updatedNote', updatedNote)
        noteService.update(note , ev.target.innerText)
            .then(() => {
                this.setState(this.loadNotes)
            })
    }

    onRemoveNote = (noteId) => {
        noteService.remove(noteId)
            .then(() => {
                this.setState(this.loadNotes)
            })
        console.log('note was removed')
    }

    onAddNote = (ev, note) => {
        ev.preventDefault()
        noteService.save(note)
        this.loadNotes()
        console.log('note was saved')
    }

    render() {
        const { notes } = this.state
        const { onRemoveNote, onAddNote, onEditNote } = this
        return (
            <main className="note-app main-layout flex column align-center">
                <AddNote onEditNote={onEditNote} onAddNote={onAddNote} />
                <NoteList notes={notes} onRemoveNote={onRemoveNote} onEditNote={onEditNote} />
            </main>
        )
    }
}
