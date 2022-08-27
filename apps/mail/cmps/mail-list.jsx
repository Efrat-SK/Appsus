import { MailDetails } from "./mail-details.jsx"
import { MailPreview } from "./mail-preview.jsx"

export class MailList extends React.Component {


    render() {
        const { emails, status, onSelectMail, onResetMail, selectedMail, onRemoveMail } = this.props

        return <section>
            {!selectedMail && emails.map(email =>
                <MailPreview key={email.id} email={email} status={status} onSelectMail={onSelectMail} />)}
            {selectedMail && <MailDetails email={selectedMail} status={status} onResetMail={onResetMail} onRemoveMail={onRemoveMail} />}
        </section>
    }
}