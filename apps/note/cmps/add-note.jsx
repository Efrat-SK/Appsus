
export class AddNote extends React.Component {

    state = {
        note: {
            info: '',
        }

    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        this.setState(({ note }) => ({
            note: { ...note, [field]: value }
        }))
        //this.setState((prevState)=>(...prevState,note:{...prevState.note,[field]:value}))
    }

    addNote = (ev) => {
        const { note } = this.state
        this.setState({ note: { info: '' } }, () => {
            this.props.onAddNote(ev, note)
        })
    }

    render() {
        console.log('renders')
        const { info } = this.state.note
        // const { note } = this.state
        const { handleChange } = this
        const { onAddNote } = this.props
        return <section className="note-add">
            < form className="flex column align-center" onSubmit={this.addNote} >
                <input type="text" name="info"
                    value={info} id="info"
                    placeholder="Add your new note"
                    onChange={handleChange}
                />
                
            </form >

        </section >
    }
}