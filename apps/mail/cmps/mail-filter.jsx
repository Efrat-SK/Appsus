export class MailFilter extends React.Component {
    state = {
        filterBy: {
            txt: '',
            isRead: ''
        },
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        this.setState((prevState) => ({
            filterBy: {
                ...prevState.filterBy,
                [field]: value
            }
        }), () => {
            this.props.onSetFilter(this.state.filterBy)
        })
    }
    render() {
        const { txt, isRead } = this.state.filterBy

        return <section className="mail-filter">
            <input
                type="search"
                placeholder="Email search"
                name="txt"
                value={txt}
                onChange={this.handleChange}
            />
        </section>
    }
}