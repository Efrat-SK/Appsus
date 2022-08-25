export class BookFilter extends React.Component {

    state = {
        filterBy: {
            name: '',
            price: 0
        },
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'range' ? +target.value : target.value
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
        const { name, price } = this.state.filterBy
        const className = (price > 150)? 'red' : (price < 20)? 'green' : ''

        return <section className="book-filter">
            <form>
                <label>Name:
                    <input
                        type="search"
                        placeholder="by book name..."
                        name="name"
                        value={name}
                        onChange={this.handleChange}
                    />
                </label>

                <label>Price:
                    <input type="range"
                        placeholder="by book price..."
                        name="price"
                        value={price}
                        min='0'
                        max='186'
                        onChange={this.handleChange} />
                    <span className={className}>{price}</span>
                </label>
            </form>
        </section>
    }
}