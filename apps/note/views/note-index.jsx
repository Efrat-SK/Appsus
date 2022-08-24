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
        noteService.query()
            .then(notes => this.setState( {notes} ))
    }

    render() {
        const { notes } = this.state
        return (
            <section>
                <div>note app</div>
                {/* <CarList cars={cars} onRemoveCar={onRemoveCar} /> */}
                <NoteList notes={notes} />
            </section>
        )
    }
}
