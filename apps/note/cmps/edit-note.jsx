import { noteService } from "../services/note.service.js"

export class EditNote extends React.Component {

    state = {
        note: {
            info: {},
            color: 'red',
        }
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        this.setState(({note}) => ({
            note: { ...note, [field]: value }
        }))
    }

onSaveCar = (ev) => {
    ev.preventDefault()
    noteService.save(this.state.note)
        .then(() => {
            console.log('note was added')
        })
}


render() {
    const { info } = this.state.note.info
    const { onSaveNote, handleChange } = this
    return <section className="note-edit">
        <form className="flex column align-center" onSubmit={onSaveNote}>

            <input type="text" name="info"
                value={info} id="info"
                placeholder="Add your new note"
                onChange={handleChange}
            />

        </form>
    </section>

}
}