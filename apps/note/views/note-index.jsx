import { AddNote } from "../cmps/add-note-txt.jsx";
import { NoteList } from "../cmps/note-list.jsx";
import { noteService } from '../services/note.service.js';
import { AddNoteDynamic } from "../cmps/add-note-dynamic.jsx";
import { AddNoteImg } from "../cmps/add-note-img.jsx";
import { AddNoteList } from "../cmps/add-note-list.jsx";
import { AddNoteTxt } from "../cmps/add-note-txt.jsx";

const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

export class NoteIndex extends React.Component {

    state = {
        notes: [],
        noteType: "note-txt",
    }

    componentDidMount() {
        this.loadNotes()
    }

    loadNotes = () => {
        noteService.query()
            .then(notes => this.setState({ notes }))
    }

    onEditNote = (ev, note) => {
        switch (note.type) {
            case "note-txt":
                noteService.update(note, ev.target.innerText)
                    .then(() => {
                        this.setState(this.loadNotes)
                    })
                break;
            case "note-todos":
                noteService.update(note, ev.target.innerText, ev.target.accessKey)
                    .then(() => {
                        this.setState(this.loadNotes)
                    })
                break;
        }

    }

    onRemoveNote = (noteId) => {
        console.log('remove');
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
        const { notes, noteType } = this.state
        const { onRemoveNote, onAddNote, onEditNote } = this
        const { noteTxtOpen, noteImgOpen, noteTodosOpen } = this.state
        return (
            <main className="note-app main-layout flex column align-center">
                <AddNoteTxt onAddNote={onAddNote} onRemoveNote={onRemoveNote} />
                <NoteList notes={notes} onRemoveNote={onRemoveNote} onEditNote={onEditNote} />
            </main>
        )
    }
}
