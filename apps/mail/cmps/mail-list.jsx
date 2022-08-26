import { mailService } from "../services/mail.service.js"
import { MailDetails } from "./mail-details.jsx"
import { MailPreview } from "./mail-preview.jsx"

export class MailList extends React.Component {


    render() {
        const { emails, status, onSelectMail, onResetMail, selectedMail } = this.props

        return <section>
            {!selectedMail && <table className="email-list">
                <tbody>
                    {emails.map(email =>
                        <MailPreview key={email.id} email={email} status={status} onSelectMail={onSelectMail} />)}
                </tbody>
            </table>}
            {selectedMail && <MailDetails email={selectedMail} onResetMail={onResetMail} />}
        </section>
    }
}