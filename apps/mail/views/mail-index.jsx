import { emailService } from "../services/mail.service.js"
import { EmailList } from "../cmps/mail-list.jsx"

export class MailIndex extends React.Component {

    state = {
        emails: [],
        criteria: {
            status: 'inbox',
            txt: 'puki', // no need to support complex text search
            isRead: true, // (optional property, if missing: show all)
            isStared: true, // (optional property, if missing: show all)
            lables: ['important', 'romantic'] // has any of the labels
        }
    }

    componentDidMount() {
        this.loadEmails()
    }

    loadEmails = () => {
        emailService.query(this.state.criteria)
            .then((emails) => this.setState({ emails }))
    }

    render() {
        const { emails } = this.state

        return (
            // filter
            // nav bar in the left side
            // main - inbox - compList - compPrev
            <section className="email-app">
                <EmailList emails={emails} />
            </section>
        )
    }
}
