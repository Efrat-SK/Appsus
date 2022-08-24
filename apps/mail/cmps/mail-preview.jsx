export function MailPreview({ email, onSelectMail }) {

    const readEmailClassName = (email.isRead) ? 'read' : 'un-read'

    return <tr className={`mail-preview ${readEmailClassName} flex`}
        onClick={() => onSelectMail(email.id)}>
        <td className="mail-from-name">{email.from.fullName}</td>
        <td className="mail-subject">{email.subject}</td>
        <td className="mail-body">{email.body}</td>
    </tr >
}