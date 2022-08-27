import { mailService } from "../services/mail.service.js"
import { MailFilter } from "../cmps/mail-filter.jsx"
import { MailSort } from "../cmps/mail-sort.jsx"
import { MailList } from "../cmps/mail-list.jsx"
import { MailFolderList } from "../cmps/mail-folder-list.jsx"
import { MailCompose } from "../cmps/mail-compose.jsx"
import { showSuccessMsg } from '../../../services/event-bus.service.js';

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
        selectedMail: null,
        isCompose: false,
        sortBy: null,
        isDesc: 1
    }

    componentDidMount() {
        this.loadEmails()
        this.props.history.push(`/mail/inbox`)
    }

    loadEmails = () => {
        const { criteria, sortBy, isDesc } = this.state

        mailService.query(criteria, sortBy, isDesc)
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
            selectedMail: null,
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

    onSelectMail = (mailId) => {
        mailService.getById(mailId)
            .then(email => this.setState({ selectedMail: email }))
    }

    onResetMail = (status) => {
        this.setState({ selectedMail: null })
        this.props.history.push(`/mail/${status}`)
    }

    onRemoveMail = (mailId, status) => {
        mailService.removeMail(mailId)
            .then(() => {
                this.onSetStatus(status)
                if (status !== 'trash')
                    showSuccessMsg('Your email has been moved to Trash')
                else showSuccessMsg('Email Deleted')
            })
    }

    onSetSort = (sortBy, isDesc) => {
        this.setState({ sortBy, isDesc }, () => this.loadEmails())
    }

    render() {
        const { emails, isCompose, selectedMail } = this.state
        const { status } = this.state.criteria

        return (
            <section className="mail-app main-layout">
                <div className="filter-sort flex justify-center">
                    <MailFilter onSetFilter={this.onSetFilter} />
                    <MailSort onSetSort={this.onSetSort} />
                </div>
                <main className="main-container main-layout flex column">
                    <MailFolderList onSetStatus={this.onSetStatus} isCompose={this.isCompose} />
                    <MailList emails={emails} status={status} selectedMail={selectedMail} onSelectMail={this.onSelectMail} onResetMail={this.onResetMail} onRemoveMail={this.onRemoveMail} />
                </main>
                {isCompose && <MailCompose saveMail={this.saveMail} removeCompose={this.removeCompose} />}
            </section>
        )
    }
}
