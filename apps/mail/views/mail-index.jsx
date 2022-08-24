import { mailService } from "../services/mail.service.js"
import { MailFilter } from "../cmps/mail-filter.jsx"
import { MailList } from "../cmps/mail-list.jsx"

export class MailIndex extends React.Component {

    state = {
        emails: [],
        criteria: {
            status: 'inbox',
            txt: '', // no need to support complex text search
            isRead: true, // (optional property, if missing: show all)
            isStared: true, // (optional property, if missing: show all)
            lables: ['important', 'romantic'] // has any of the labels
        }
    }

    componentDidMount() {
        this.loadEmails()
    }

    loadEmails = () => {
        const { criteria } = this.state
        mailService.query(criteria)
            .then((emails) => this.setState({ emails }))
    }

    onSetFilter = ({ txt, isRead }) => {
        console.log(txt, isRead)
        const { criteria } = this.state
        this.setState((prevState) => ({
            criteria: {
                ...prevState.criteria,
                txt: txt,
                isRead: isRead
            }
        }), () => {
            this.loadEmails()
        })
    }

    render() {
        const { emails } = this.state

        return (
            // filter
            // nav bar in the left side
            <section className="email-app">
                <MailFilter onSetFilter={this.onSetFilter} />
                <MailList emails={emails} />
            </section>
        )
    }
}
