const { Link, NavLink, withRouter } = ReactRouterDOM
export function AppHeader() {

    return <header className="app-header flex space-between full">
        <Link to="/">
            <h3>AppSus</h3>
        </Link>
        <nav>
            <NavLink to="/mail">Mail</NavLink>
            <NavLink to="/note">Note</NavLink>
            <NavLink to="/book">Book</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink exact to="/">Home</NavLink>
        </nav>
    </header>
}
