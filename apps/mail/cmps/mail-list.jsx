import { EmailPreview } from "./mail-preview.jsx"

export function EmailList({ emails }) {

    return <table className="email-list">
        <tbody>
            {emails.map(email =>
                <EmailPreview key={email.id} email={email} />)}
        </tbody>
    </table>
}