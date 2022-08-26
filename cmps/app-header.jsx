const { Link, NavLink } = ReactRouterDOM

export function AppHeader() {

    return <header className="app-header main-layout full">
        <div className="header-container flex space-between">
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
        </div>
    </header>
}
