import { mailService } from "../services/mail.service.js"
import { MailDetails } from "./mail-details.jsx"
import { MailPreview } from "./mail-preview.jsx"

export class MailList extends React.Component {

    state = {
        selectedMail: null
    }

    onSelectMail = (mailId) => {
        mailService.getById(mailId)
            .then(email => this.setState({ selectedMail: email }))
    }

    onResetMail = () => {
        this.setState({ selectedMail: null })
    }

    render() {
        const { emails, status } = this.props
        const { selectedMail } = this.state

        return <section>
            {!selectedMail && <table className="email-list">
                <tbody>
                    {emails.map(email =>
                        <MailPreview key={email.id} email={email} status={status} onSelectMail={this.onSelectMail} />)}
                </tbody>
            </table>}
            {selectedMail && <MailDetails email={selectedMail} onResetMail={this.onResetMail} />}
        </section>
    }
}