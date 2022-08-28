import { utilService } from "../../../services/util.service.js"
import { mailService } from "../services/mail.service.js"

const { Link } = ReactRouterDOM

export function MailPreview({ email, status, onSelectMail, onToggleIsStar }) {

    const readEmailClassName = (email.isRead) ? 'read' : 'un-read'
    const loggedinUser = mailService.getLoggedinUser()

    function getTextBody() {
        const text = email.body
        const textLength = 70 - email.subject.length
        if (text.length < textLength) return text
        else return `${text.substring(0, textLength + 1)}...`
    }

    const date = utilService.getDate(email.sentAt)
    const month = utilService.getMonthName(date[1] - 1)
    const body = getTextBody()

    return <article className={`mail-preview ${readEmailClassName} flex`}>
        {!email.isStar && <img className="star" onClick={() => onToggleIsStar(email.id, status)} src="assets/img/star-empty.png" alt="" />}
        {email.isStar && <img className="star" onClick={() => onToggleIsStar(email.id, status)} src="assets/img/star-yellow.png" alt="" />}
        <Link to={`/mail/${status}/${email.id}`}>
            <div className="content flex" onClick={() => onSelectMail(email.id)}>
                <div className="mail-name">
                    {email.from.fullName !== loggedinUser.fullName && <span className="mail-from-name">{email.from.fullName}</span>}
                    {email.from.fullName === loggedinUser.fullName && <span className="mail-to-name">To: {email.to.fullName}</span>}
                </div>
                <div className="text flex">
                    <span className="mail-subject">{email.subject}</span>
                    <span className="mail-body">{body}</span>
                </div>
                <span className="mail-date">{`${date[0]} ${month}`}</span>
            </div>
        </Link>
    </article >
}