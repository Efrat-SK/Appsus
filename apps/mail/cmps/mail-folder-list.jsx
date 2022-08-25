const { Link, NavLink, withRouter } = ReactRouterDOM

class _MailFolderList extends React.Component {

    state = {
        status: 'inbox',
        isCompose: false
    }

    setStatus = ({ target }) => {
        const { onSetStatus } = this.props
        this.setState({ status: target.className }, () => onSetStatus(this.state.status))
    }

    onIsCompose = () => {
        this.setState({ isCompose: true }, () => this.props.isCompose(true))
    }

    render() {
        return <section className="mail-folder-list flex column">
            <Link to={`/mail/${this.props.match.params.status}/compose`}>
                <button className="btn-compose"
                    onClick={this.onIsCompose}>
                    ➕ Compose
                </button>
            </Link>
            <ul className="clean-list">
                <NavLink to="/mail/inbox">
                    <li className="inbox"
                        name="inbox"
                        onClick={this.setStatus}>
                        Inbox
                    </li>
                </NavLink>
                <NavLink to="/mail/star">
                    <li className="star"
                        name="star"
                        onClick={this.setStatus}>
                        Starred
                    </li>
                </NavLink>
                <NavLink to="/mail/sent">
                    <li className="sent"
                        name="sent"
                        onClick={this.setStatus}>
                        Sent Mail
                    </li>
                </NavLink>
                <NavLink to="/mail/draft">
                    <li className="draft"
                        name="draft"
                        onClick={this.setStatus}>
                        Drafts
                    </li>
                </NavLink>
                <NavLink to="/mail/trash">
                    <li className="trash"
                        name="trash"
                        onClick={this.setStatus}>
                        Trash
                    </li>
                </NavLink>
            </ul>
        </section>
    }
}

export const MailFolderList = withRouter(_MailFolderList)