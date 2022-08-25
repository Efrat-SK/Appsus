import { utilService } from '../../../services/util.service.js';

const { Link } = ReactRouterDOM

export function BookPreview({ book }) {

    const { amount, currencyCode, isOnSale } = book.listPrice

    function getPriceClassName() {
        if (amount > 150) return 'red'
        else if (amount < 20) return 'green'
        else return ''
    }

    const priceClassName = getPriceClassName()
    const price = utilService.getCurrencySymbol(amount, currencyCode, book.language)

    return <Link to={"/book/" + book.id}>
        <article className="book-preview">
            {isOnSale && <img className="sale-img" src="assets/img/sale.png" alt="sale" />}
            <h3 className="title">Title: {book.title}</h3>
            <h4>Subtitle: {book.subtitle}</h4>
            <h4>Price:
                <span className={priceClassName}>{price}</span>
            </h4>
            <div className="img-container">
                <img src={book.thumbnail} />
            </div>
        </article>
    </Link>
}