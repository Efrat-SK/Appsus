import { mailService } from "../services/mail.service.js"

const { Link, NavLink, withRouter } = ReactRouterDOM

class _MailFolderList extends React.Component {

    state = {
        status: 'inbox',
        isCompose: false,
        folderClassName: ''
    }

    setStatus = ({ target }) => {
        const { onSetStatus } = this.props
        this.setState({ status: target.className }, () => onSetStatus(this.state.status))
    }

    onIsCompose = () => {
        this.setState({ isCompose: true }, () => this.props.isCompose(true))
    }

    openMenu = () => {
        this.setState({ folderClassName: 'menu-opened' })
    }

    closeMenu = () => {
        this.setState({ folderClassName: '' })
    }

    render() {
        const unReadMailsCounter = mailService.unReadMailsCounter()
        const { folderClassName } = this.state

        return <section className={`mail-folder-list flex column ${folderClassName}`}>
            {folderClassName && <div className="main-screen full" onClick={this.closeMenu}></div>}
            <Link to={`/mail/${this.props.match.params.status}/compose`}
                className="btn-compose">
                <button
                    onClick={this.onIsCompose}>
                    ➕ Compose
                </button>
            </Link>
            <ul className="clean-list flex column">
                <NavLink to="/mail/inbox" onClick={this.closeMenu}>
                    <li className="inbox"
                        name="inbox"
                        onClick={this.setStatus}>
                        Inbox
                        {unReadMailsCounter > 0 && <span className="counter">{unReadMailsCounter}</span>}
                    </li>
                </NavLink>
                <NavLink to="/mail/star" onClick={this.closeMenu}>
                    <li className="star"
                        name="star"
                        onClick={this.setStatus}>
                        Starred
                    </li>
                </NavLink>
                <NavLink to="/mail/sent" onClick={this.closeMenu}>
                    <li className="sent"
                        name="sent"
                        onClick={this.setStatus}>
                        Sent Mail
                    </li>
                </NavLink>
                <NavLink to="/mail/trash" onClick={this.closeMenu}>
                    <li className="trash"
                        name="trash"
                        onClick={this.setStatus}>
                        Trash
                    </li>
                </NavLink>
            </ul>
            <button className="toggle-menu" onClick={this.openMenu}>☰</button>
        </section>
    }
}

export const MailFolderList = withRouter(_MailFolderList)