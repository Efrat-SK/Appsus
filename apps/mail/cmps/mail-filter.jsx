export class MailFilter extends React.Component {
    state = {
        filterBy: {
            txt: '',
            isRead: null
        }
    }

    handleChange = ({ target }) => {
        const field = target.name
        let value = target.value

        switch (value) {
            case 'everything':
                value = null
                break
            case 'read':
                value = true
                break
            case 'un-read':
                value = false
                break
        }

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
        const { txt } = this.state.filterBy

        return <section className="mail-filter">
            <input
                type="search"
                placeholder="Email search"
                name="txt"
                value={txt}
                onChange={this.handleChange}
            />
            <select name="isRead" onChange={this.handleChange}>
                <option value='everything'>Everything</option>
                <option value='read'>Read</option>
                <option value='un-read'>Un Read</option>
            </select>
        </section>
    }
}