import { BookFilter } from '../cmps/book-filter.jsx';
import { BookList } from '../cmps/book-list.jsx';
import { bookService } from '../services/book.service.js';

export class BookIndex extends React.Component {

    state = {
        books: [],
        filterBy: null,
        selectedBook: null,
    }

    componentDidMount() {
        this.loadBooks()
    }

    loadBooks = () => {
        bookService.query(this.state.filterBy)
            .then((books) => this.setState({ books }))
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, () => {
            this.loadBooks()
        })
    }

    onSelectBook = (bookId) => {
        bookService.getById(bookId)
            .then(book => this.setState({ selectedBook: book, filterBy: null }, () => this.loadBooks()))
    }


    render() {
        const { books, selectedBook } = this.state
        return <section className="book-app main-layout">
            <BookFilter onSetFilter={this.onSetFilter} />
            <BookList books={books} onSelectBook={this.onSelectBook} />
        </section>
    }
}