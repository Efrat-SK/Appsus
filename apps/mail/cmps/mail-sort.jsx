export class MailSort extends React.Component {
    state = {
        sortBy: {
            noSort: true,
            title: false,
            name: false,
            date: false,
        },
        isDesc: 1
    }

    handleChange = ({ target }) => {
        let field = target.value

        if (target.name === 'isDesc') {
            this.setState({ isDesc: -(this.state.isDesc) }, () => {
                this.props.onSetSort(this.state.sortBy, this.state.isDesc)
            })
            return
        }

        this.setState({
            sortBy: {
                noSort: false,
                title: false,
                name: false,
                date: false,
                [field]: true
            }
        }, () => {
            this.props.onSetSort(this.state.sortBy, this.state.isDesc)
        })
    }

    render() {
        return <section className="mail-sort flex justify-center">
            < select name="sortBy" onChange={this.handleChange} >
                <option value='noSort'>Sort By</option>
                <option value='title'>Title</option>
                <option value='name'>Name</option>
                <option value='date'>Date</option>
            </select >
            <label>
                <span className="descending">Descending</span>
                <input className="sort-desc" name="isDesc" type="checkbox" onChange={this.handleChange} />
            </label>
        </section >
    }
}