const { Link } = ReactRouterDOM

export function Home() {

    return <section className="home main-layout flex column justify-center">
        <header className="home-headers main-layout">
            <h2>Welcome to AppSus</h2>
            <h3>Enter one of our apps and start working</h3>
        </header>
        <div className="img-container main-layout flex justify-center">
            <Link to="/mail"><img src='../assets/img/email.jpg' /></Link>
            <Link to="/note"><img src='../assets/img/notes.jpg' /></Link>
            <Link to="/book"><img src='../assets/img/books.jpg' /></Link>
        </div>
    </section>
}