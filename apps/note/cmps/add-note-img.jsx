import { utilService } from "../../../services/util.service.js"

export class AddNoteImg extends React.Component {

    state = {
        note: {
            id: utilService.makeId(),
            type: 'note-img',
            info: '',
        }

    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        this.setState(({ note }) => ({
            note: { ...note, [field]: value }
        }))
        console.log(this.state.note)
        //this.setState((prevState)=>(...prevState,note:{...prevState.note,[field]:value}))
    }

    addNote = (ev) => {
        const { note } = this.state
        this.setState({ note: { info: '' } }, () => {
            this.props.onAddNote(ev, note)
        })
    }

    render() {
        const { info } = this.state.note
        const { handleChange } = this
        return <section>
            <label htmlFor="info">
            <section className="note-add flex full space-between align-center">
                < form onSubmit={this.addNote} >
                    <input type="text" name="info"
                        value={info} id="info"
                        placeholder="Add an URL" autoComplete="off"
                        onChange={handleChange}
                    />
                </form >
                <section className="flex space-between">
                    <div className="add-btn flex align-center justify-center">
                        <img src="apps/note/img/text.png" alt="text" />
                    </div>
                    <div className="add-btn flex align-center justify-center">
                        <img src="apps/note/img/image.png" alt="img" />
                    </div>
                    <div className="add-btn flex align-center justify-center">
                        <img src="apps/note/img/to-do-list.png" alt="todo" />
                    </div>
                </section>
            </section >
            </label>
        </section>

    }
}