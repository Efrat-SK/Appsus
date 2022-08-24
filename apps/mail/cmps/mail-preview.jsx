export function MailPreview({ email, onSelectMail }) {

    const readEmailClassName = (email.isRead) ? 'read' : 'un-read'

    return <tr className={`mail-preview ${readEmailClassName} flex align-center`}
        onClick={() => onSelectMail(email.id)}>
        <td>{email.from.fullName}</td>
        <td>{email.subject}</td>
        <td>{email.body}</td>
    </tr >
}