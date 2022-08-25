import { utilService } from '../../../services/util.service.js';
import { bookService } from '../services/book.service.js';
import { ReviewAdd } from '../cmps/review-add.jsx';

export class BookDetails extends React.Component {

    state = {
        book: null
    }

    componentDidMount() {
        this.loadBook()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.bookId !== this.props.match.params.bookId) {
            this.loadBook()
        }
    }

    loadBook = () => {
        const { bookId } = this.props.match.params
        bookService.getById(bookId)
            .then((book) => {
                if (!book) return this.onGoBack()
                this.setState({ book })
            })
    }

    onRemoveBook = () => {
        const { book } = this.state
        bookService.remove(book.id)
            .then(this.onGoBack)
    }

    onGoBack = () => {
        this.props.history.push('/book')
    }

    getPageCountTxt = () => {
        const { pageCount } = this.state.book

        if (pageCount > 500) return 'Long Reading'
        else if (pageCount > 200) return 'Decent Reading'
        else if (pageCount < 100) return 'Light Reading'
        else return ''
    }

    getPublishedDateTxt = () => {
        const { publishedDate } = this.state.book
        const diff = 2024 - publishedDate

        if (diff > 10) return 'Veteran Book'
        else if (diff < 1) return 'New!'
        else return ''
    }

    getPriceClassName = () => {
        const { amount } = this.state.book.listPrice

        if (amount > 150) return 'red'
        else if (amount < 20) return 'green'
        else return ''
    }

    render() {
        const { book } = this.state
        if (!book) return <div>Loading...</div>

        const { amount, currencyCode } = book.listPrice
        const priceClassName = this.getPriceClassName()
        const price = utilService.getCurrencySymbol(amount, currencyCode, book.language)
        const publishedDate = `${book.publishedDate} ${this.getPublishedDateTxt()}`
        const pageAmount = `${book.pageCount} ${this.getPageCountTxt()}`

        return <section className="book-details">
            <button className="btn-go-back" onClick={this.onGoBack}>Go Back</button>
            {book.listPrice.isOnSale && <img className="sale-img" src="assets/img/sale.png" alt="sale" />}
            <h3>Title: {book.title}</h3>
            <h4>Subtitle: {book.subtitle}</h4>
            <h4>Price:
                <span className={priceClassName}>{price}</span>
            </h4>
            <ul> Authors:
                {book.authors.map(author => <li key={author}>{author}</li>
                )}
            </ul>
            <h5>Published Date: {publishedDate}</h5>
            <h5>Page Amount: {pageAmount}</h5>
            <h5>Language: {book.language}</h5>
            <p>{book.description}</p>
            {/* <LongTxt text={book. description} isLongTxtShown={this.state.isLongTxtShown} /> */}
            {book.reviews && <div> Reviews:
                {book.reviews.map((review, idx) => {
                    return <ul key={idx}>
                        <li>{review.fullName}</li>
                        <li>{review.rate}</li>
                        <li>{review.text}</li>
                    </ul>
                })}
            </div>}
            <ReviewAdd />
            <div className="img-container">
                <img src={book.thumbnail} />
            </div>
            <ul> Categories:
                {book.categories.map(category => <li key={category}>{category}</li>
                )}
            </ul>
            <button onClick={this.onRemoveBook}>Remove Book</button>
        </section >
    }
}
