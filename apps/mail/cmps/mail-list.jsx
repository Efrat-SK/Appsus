import { MailPreview } from "./mail-preview.jsx"

export function MailList({ emails }) {

    return <table className="email-list">
        <tbody>
            {emails.map(email =>
                <MailPreview key={email.id} email={email} />)}
        </tbody>
    </table>
}