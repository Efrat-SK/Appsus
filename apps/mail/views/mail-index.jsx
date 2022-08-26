import { mailService } from "../services/mail.service.js"
import { MailFilter } from "../cmps/mail-filter.jsx"
import { MailList } from "../cmps/mail-list.jsx"
import { MailFolderList } from "../cmps/mail-folder-list.jsx"
import { MailCompose } from "../cmps/mail-compose.jsx"
import { showErrorMsg, showSuccessMsg } from '../../../services/event-bus.service.js';

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
        isCompose: false
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
            this.loadEmails()
        })
    }

    saveMail = (mail, status) => {
        mailService.save(mail)
            .then(() => {
                showSuccessMsg('Your Email Send')
                this.isCompose(false)
                this.props.history.push(`/mail/${status}`)
            })
    }

    isCompose = (isCompose) => {
        this.setState({ isCompose: isCompose })
    }

    removeCompose = (status) => {
        this.isCompose(false)
        this.props.history.push(`/mail/${status}`)
    }

    render() {
        const { emails, isCompose } = this.state
        const { status } = this.state.criteria

        return (
            <section className="mail-app main-layout">
                <MailFilter onSetFilter={this.onSetFilter} />
                <div className="flex">
                    <MailFolderList onSetStatus={this.onSetStatus} isCompose={this.isCompose} />
                    <MailList emails={emails} status={status} /></div>
                {isCompose && <MailCompose saveMail={this.saveMail} removeCompose={this.removeCompose} />}
            </section>
        )
    }
}
