const { Link, NavLink, withRouter } = ReactRouterDOM

class _MailCompose extends React.Component {

    state = {
        mail: {
            to: '',
            subject: '',
            body: ''
        }
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        this.setState(({ mail }) => ({
            mail: { ...mail, [field]: value }
        }))
    }

    onSaveMail = (ev) => {
        ev.preventDefault()
        this.props.saveMail(this.state.mail, this.props.match.params.status)
    }

    onRemove = () => {
        this.props.removeCompose(this.props.match.params.status)
    }

    render() {
        const { onSaveMail, handleChange, onRemove } = this
        const { to, subject, body } = this.state

        return <section className="mail-compose flex column full">
            <h4>New Message</h4>
            <form className="flex column" onSubmit={onSaveMail}>
                <label>To:
                    <input type="email"
                        name="to"
                        value={to}
                        onChange={handleChange} />
                </label>
                <label>Subject:
                    <input type="text"
                        name="subject"
                        value={subject}
                        onChange={handleChange} />
                </label>
                <textarea name="body"
                    cols="30" rows="10"
                    value={body}
                    onChange={handleChange}>
                </textarea>
                <button className="send">Send</button>
                <button className="remove" onClick={onRemove}>Delete</button>
            </form>
        </section>
    }
}

export const MailCompose = withRouter(_MailCompose)