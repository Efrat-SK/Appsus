import { mailService } from "../services/mail.service.js"
import { MailFilter } from "../cmps/mail-filter.jsx"
import { MailList } from "../cmps/mail-list.jsx"
import { MailFolderList } from "../cmps/mail-folder-list.jsx"

export class MailIndex extends React.Component {

    state = {
        emails: [],
        criteria: {
            status: 'inbox',
            txt: '',
            isRead: null,
            isStared: true,
            lables: ['important', 'romantic']
        },
        selectedMail: null
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

    onSetStatus = (status) => {
        this.setState((prevState) => ({
            criteria: {
                ...prevState.criteria,
                status: status
            }
        }), () => {
            console.log(this.state)
            this.loadEmails()
        })
    }

    render() {
        const { emails } = this.state
        const { status } = this.state.criteria

        return (
            <section className="email-app main-layout">
                <MailFilter onSetFilter={this.onSetFilter} />
                <div className="flex">
                    <MailFolderList onSetStatus={this.onSetStatus} />
                    <MailList emails={emails} status={status}/></div>
            </section>
        )
    }
}
