import { utilService } from "../../../services/util.service.js"

export class MailDetails extends React.Component {

    render() {
        const { email, status, onResetMail, onRemoveMail } = this.props
        const { subject, body, from, to } = email
        const date = utilService.getDate(email.sentAt)
        const month = utilService.getMonthName(date[1] - 1)

        return <section className="mail-details flex column">
            <div className="btns flex align-center">
            <button className="btn-back" onClick={() => onResetMail(status)}>⬅</button>
            <button className="btn-remove" onClick={() => onRemoveMail(email.id, status)}>
                <img src="assets/img/trash.png" alt="trash" />
            </button>
            </div>
            <h1 className="subject">{subject}</h1>
            <div className="flex space-between">
                <div className="from flex">
                    <span className="from-fullName">{from.fullName}</span>
                    <span className="from-email">{`<${from.email}>`}</span>
                </div>
                <span className="mail-date">{`${date[0]} ${month}`}</span>
            </div>
            <span className="to-fullName">To: {to.fullName}</span>
            <p className="body">{body}</p>
        </section>
    }
}