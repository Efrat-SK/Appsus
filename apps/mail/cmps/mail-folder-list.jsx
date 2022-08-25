export class MailFolderList extends React.Component {

    state = {
        status: 'inbox'
    }

    setStatus = ({ target }) => {
        const { onSetStatus } = this.props
        this.setState({ status: target.className }, () => onSetStatus(this.state.status))
    }

    render() {
        return <section className="mail-folder-list flex column">
            <button className="btn-compose">➕ Compose</button>
            <ul className="clean-list">
                <li className="inbox"
                    name="inbox"
                    onClick={this.setStatus}>
                    Inbox
                </li>
                <li className="star"
                    name="star"
                    onClick={this.setStatus}>
                    Starred
                </li>
                <li className="sent"
                    name="sent"
                    onClick={this.setStatus}>
                    Sent Mail
                </li>
                <li className="draft"
                    name="draft"
                    onClick={this.setStatus}>
                    Drafts
                </li>
                <li className="trash"
                    name="trash"
                    onClick={this.setStatus}>
                    Trash
                </li>
            </ul>
        </section>
    }
}