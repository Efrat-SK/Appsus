import { bookService } from '../services/book.service.js';

const { withRouter } = ReactRouterDOM

export class _ReviewAdd extends React.Component {

    state = {
        review: {
            fullName: '',
            rate: '',
            text: ''
        }
    }

    inputRef = React.createRef()

    componentDidMount() {
        this.inputRef.current.focus()
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState((prevState) => ({
            review: { ...prevState.review, [field]: value }
        }))
    }

    onSaveReview = (ev) => {
        const {bookId} = this.props.match.params
        ev.preventDefault()
        bookService.saveReview(this.state.review, bookId)
            .then(() => {
                console.log(`/book/:${bookId}`)
                this.props.history.push(`/book/${bookId}`)
            })
    }

    render() {
        const { fullName, rate, text } = this.state.review

        return <section className="review-add">
            <h4>Add Review</h4>
            <form onSubmit={this.onSaveReview}>

                <label>Full Name:
                    <input
                        ref={this.inputRef}
                        type="text"
                        name="fullName"
                        value={fullName}
                        onChange={this.handleChange} />
                </label>
                <label>Rate:
                    <input
                        type="number"
                        min='1'
                        max='5'
                        name="rate"
                        value={rate}
                        onChange={this.handleChange} />
                </label>
                <textarea
                    name="text"
                    cols="30"
                    rows="10"
                    value={text}
                    placeholder="Please enter here what do you think"
                    onChange={this.handleChange}>
                </textarea>
                <button>Save Review</button>
            </form>
        </section>
    }
}

export const ReviewAdd = withRouter(_ReviewAdd)