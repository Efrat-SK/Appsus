const { Link } = ReactRouterDOM

export function MailPreview({ email, status, onSelectMail }) {

    const readEmailClassName = (email.isRead) ? 'read' : 'un-read'

    function getTextBody() {
        const text = email.body
        const textLength = 70 - email.subject.length
        if (text.length < textLength) return text
        else return `${text.substring(0, textLength + 1)}...`
    }

    const body = getTextBody()
    return <Link to={`/mail/${status}/${email.id}`}>
        <article className={`mail-preview ${readEmailClassName} flex`}
            onClick={() => onSelectMail(email.id)}>
            {status === 'inbox' && <span className="mail-from-name">{email.from.fullName}</span>}
            {status === 'sent' && <span className="mail-to-name">To: {email.to.fullName}</span>}
            <span className="mail-subject">{email.subject}</span>
            <span className="mail-body">{body}</span>
        </article >
    </Link>
}