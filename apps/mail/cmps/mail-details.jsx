export class MailDetails extends React.Component {

    render() {
        const { email, status, onResetMail } = this.props
        const { subject, body, from, to } = email

        return <section className="mail-details flex column">
            <button className="btn-back" onClick={() => onResetMail(status)}>⬅</button>
            <h1 className="subject">{subject}</h1>
            <div className="from flex">
                <span className="from-fullName">{from.fullName}</span>
                <span className="from-email">{`<${from.email}>`}</span>
            </div>
            <span className="to-fullName">To: {to.fullName}</span>
            <p className="body">{body}</p>
        </section>
    }
}