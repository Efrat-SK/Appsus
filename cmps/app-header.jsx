const { Link, NavLink } = ReactRouterDOM

export class AppHeader extends React.Component {

    state = {
        headerClassName: ''
    }

    openMenu = () => {
        this.setState({ headerClassName: 'menu-opened' })
    }

    closeMenu = () => {
        this.setState({ headerClassName: '' })
    }

    render() {
        const { headerClassName } = this.state

        return <header className={`app-header main-layout full ${headerClassName}`}>
            <div className="header-container flex space-between">
                <Link to="/">
                    <h3>AppSus</h3>
                </Link>
                <nav className="flex">
                    <button className="btn-close" onClick={this.closeMenu}>X</button>
                    <NavLink to="/mail" onClick={this.closeMenu}>Mail</NavLink>
                    <span className="separate-line">_____</span>
                    <NavLink to="/note" onClick={this.closeMenu}>Note</NavLink>
                    <span className="separate-line">_____</span>
                    <NavLink to="/book" onClick={this.closeMenu}>Book</NavLink>
                    <span className="separate-line">_____</span>
                    <NavLink to="/about" onClick={this.closeMenu}>About</NavLink>
                    <span className="separate-line">_____</span>
                    <NavLink exact to="/" onClick={this.closeMenu}>Home</NavLink>
                </nav>
                <button className="toggle-menu" onClick={this.openMenu}>☰</button>
            </div>
        </header>
    }
}
