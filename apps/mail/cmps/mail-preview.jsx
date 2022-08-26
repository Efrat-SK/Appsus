export function MailPreview({ email, status, onSelectMail }) {

    const readEmailClassName = (email.isRead) ? 'read' : 'un-read'

    function getTextBody() {
        const text = email.body
        const textLength = 70 - email.subject.length
        if (text.length < textLength) return text
        else return `${text.substring(0, textLength + 1)}...`
    }

    const body = getTextBody()
    return <tr className={`mail-preview ${readEmailClassName} flex`}
        onClick={() => onSelectMail(email.id)}>
        {status === 'inbox' && <td className="mail-from-name">{email.from.fullName}</td>}
        {status === 'sent' && <td className="mail-to-name">To: {email.to.fullName}</td>}
        <td className="mail-subject">{email.subject}</td>
        <td className="mail-body">{body}</td>
    </tr >
}