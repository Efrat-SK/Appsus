export function MailPreview({ email }) {

    const readEmailClassName = (email.isRead) ? 'read' : 'un-read'

    return <tr className={`mail-preview ${readEmailClassName} flex align-center`}>
        <td>{email.from.fullName}</td>
        <td>{email.subject}</td>
    </tr >
}