import { storageService } from "../../../services/storage.service.js"
import { utilService } from "../../../services/util.service.js"

export const mailService = {
    query,
    getById,
    save
}

const STORAGE_KEY = 'emailsDB'

const loggedinUser = {
    email: 'user@appsus.com',
    fullName: 'Mahatma Appsus'
}

function query(criteria) {
    let emails = _loadFromStorage()
    if (!emails) {
        emails = _createEmails()
        _saveToStorage(emails)
    }

    switch (criteria.status) {
        case 'inbox':
            emails = emails.filter(email => (
                email.to.email === loggedinUser.email
            ))
            break
        case 'sent':
            emails = emails.filter(email => (
                email.to.email !== loggedinUser.email
            ))
            break
    }

    const txt = criteria.txt.toLowerCase()
    const isRead = criteria.isRead

    if (txt) {
        emails = emails.filter(email => (
            (email.subject.toLowerCase().includes(txt) ||
                email.body.toLowerCase().includes(txt) ||
                email.from.fullName.toLowerCase().includes(txt))
        ))
    }

    if (isRead !== null) emails = emails.filter(email => email.isRead == isRead)

    return Promise.resolve(emails)
}

function getById(mailId) {
    if (!mailId) return Promise.resolve(null)
    const emails = _loadFromStorage()
    const email = emails.find(email => mailId === email.id)

    return Promise.resolve(email)
}

function save(mail) {
    return _add(mail)
}

function _add({ to, subject, body }) {
    let emails = _loadFromStorage()
    const mail = _createEmail(to, subject, body)
    emails = [mail, ...emails]
    _saveToStorage(emails)
    return Promise.resolve(mail)
}

function _loadFromStorage() {
    return storageService.loadFromStorage(STORAGE_KEY)
}

function _saveToStorage(data) {
    storageService.saveToStorage(STORAGE_KEY, data)
}

function _createEmails() {
    const emails = [
        {
            id: utilService.makeId(),
            subject: 'Miss you!',
            body: 'Would love to catch up sometimes',
            isRead: true,
            sentAt: Date.now(),
            from: {
                fullName: 'Mahatma Appsus',
                email: 'user@appsus.com'
            },
            to: {
                fullName: 'Momo Mimo',
                email: 'momo@momo.com'
            }
        },
        {
            id: utilService.makeId(),
            subject: 'Noga and 66 others made changes in your shared folders',
            body: 'You have activity in Shared Folders',
            isRead: false,
            sentAt: Date.now(),
            from: {
                fullName: 'DropBox',
                email: 'dropbox@dropbox.com'
            },
            to: {
                fullName: 'Mahatma Appsus',
                email: 'user@appsus.com'
            }
        },
        {
            id: utilService.makeId(),
            subject: 'Vacation this summer!',
            body: 'I want to schedule a vacation for us this summer, do you have a favorite destination?',
            isRead: true,
            sentAt: Date.now(),
            from: {
                fullName: 'Mahatma Appsus',
                email: 'user@appsus.com'
            },
            to: {
                fullName: 'Roni Cohen',
                email: 'ronicohen111@gmail.com'
            }
        },
        {
            id: utilService.makeId(),
            subject: 'Welcome to our Website!',
            body: 'Congratulations! You have successfully connected to our site',
            isRead: false,
            sentAt: Date.now(),
            from: {
                fullName: 'Slack',
                email: 'slack@slack.com'
            },
            to: {
                fullName: 'Mahatma Appsus',
                email: 'user@appsus.com'
            }
        },
        {
            id: utilService.makeId(),
            subject: 'Send me please our photos',
            body: 'Hi! How Are You? would you please send me soon our photos together? tnx!!',
            isRead: true,
            sentAt: Date.now(),
            from: {
                fullName: 'Mahatma Appsus',
                email: 'user@appsus.com'
            },
            to: {
                fullName: 'Lea Levi',
                email: 'lea1996@gmail.com'
            }
        },
        {
            id: utilService.makeId(),
            subject: 'See my project !',
            body: 'Hi, I uploaded my project to Facebook, go and take a look :)',
            isRead: true,
            sentAt: Date.now(),
            from: {
                fullName: 'Josef Ben Simon',
                email: 'josefsim888@walla.co.il'
            },
            to: {
                fullName: 'Mahatma Appsus',
                email: 'user@appsus.com'
            }
        },
        {
            id: utilService.makeId(),
            subject: 'some updates',
            body: 'Hi, just so you know. I updated the system so that everything is working again, let me know if there are any more problems, have a good day',
            isRead: true,
            sentAt: Date.now(),
            from: {
                fullName: 'Mahatma Appsus',
                email: 'user@appsus.com'
            },
            to: {
                fullName: 'Limor Zax',
                email: 'zaxlim@gmail.com'
            }
        },
        {
            id: utilService.makeId(),
            subject: 'I opened an Instagram profile!',
            body: 'I opened an Instagram profile! Feel free to follow me on Instagram: nim_1981',
            isRead: true,
            sentAt: Date.now(),
            from: {
                fullName: 'Nimrod Meno',
                email: 'nimrod1981@gmail.com'
            },
            to: {
                fullName: 'Mahatma Appsus',
                email: 'user@appsus.com'
            }
        },
        {
            id: utilService.makeId(),
            subject: 'Liron opened an Instagram profile!',
            body: 'Your friend Liron opened an Instagram profile! go follow her :)',
            isRead: true,
            sentAt: Date.now(),
            from: {
                fullName: 'Instagram',
                email: 'instagram@instagram.com'
            },
            to: {
                fullName: 'Mahatma Appsus',
                email: 'user@appsus.com'
            }
        },
        {
            id: utilService.makeId(),
            subject: 'Miss you!',
            body: 'Would love to catch up sometimes',
            isRead: true,
            sentAt: Date.now(),
            from: {
                fullName: 'Mahatma Appsus',
                email: 'user@appsus.com'
            },
            to: {
                fullName: 'Niso Lerner',
                email: 'nislerner1@gmail.com'
            }
        },
        {
            id: utilService.makeId(),
            subject: 'Miss you!',
            body: 'Would love to catch up sometimes',
            isRead: true,
            sentAt: Date.now(),
            from: {
                fullName: 'Mahatma Appsus',
                email: 'user@appsus.com'
            },
            to: {
                fullName: 'Efrat Cohen',
                email: 'efratc1000@gmail.com'
            }
        },
        {
            id: utilService.makeId(),
            subject: 'I Miss you too!',
            body: 'How about friday? We can go to the new Coffee Shop',
            isRead: false,
            sentAt: Date.now(),
            from: {
                fullName: 'Efrat Cohen',
                email: 'efratc1000@gmail.com'
            },
            to: {
                fullName: 'Mahatma Appsus',
                email: 'user@appsus.com'
            }
        },
        {
            id: utilService.makeId(),
            subject: 'Complaint about the service at the store in Rishon Lezion',
            body: 'I am not satisfied with your service, I demand compensation! My contact phone number is 0525381648',
            isRead: true,
            sentAt: Date.now(),
            from: {
                fullName: 'Mahatma Appsus',
                email: 'user@appsus.com'
            },
            to: {
                fullName: 'Mashbir365',
                email: 'mashbir365@mashbir.com'
            }
        },
        {
            id: utilService.makeId(),
            subject: 'Miss you!',
            body: 'Would love to catch up sometimes, What about Friday?',
            isRead: true,
            sentAt: Date.now(),
            from: {
                fullName: 'Rona Nala',
                email: 'rona567@gmail.com'
            },
            to: {
                fullName: 'Mahatma Appsus',
                email: 'user@appsus.com'
            }
        },
        {
            id: utilService.makeId(),
            subject: 'making an appointment',
            body: 'Hello, how are you Gal? Can I get my nails done tomorrow?',
            isRead: true,
            sentAt: Date.now(),
            from: {
                fullName: 'Mahatma Appsus',
                email: 'user@appsus.com'
            },
            to: {
                fullName: 'Gal Nails',
                email: 'nails1@gmail.com'
            }
        },
        {
            id: utilService.makeId(),
            subject: 'changing an appointment',
            body: 'Hello, how are you Gal? Can I change my appointment to Friday? Thank You',
            isRead: true,
            sentAt: Date.now(),
            from: {
                fullName: 'Mahatma Appsus',
                email: 'user@appsus.com'
            },
            to: {
                fullName: 'Gal Nails',
                email: 'nails1@gmail.com'
            }
        },
    ]
    return emails
}

//compose
function _createEmail(to, subject, body) {
    return {
        id: utilService.makeId(),
        subject: subject,
        body: body,
        isRead: true,
        sentAt: Date.now(),
        from: {
            fullName: loggedinUser.fullName,
            email: loggedinUser.email
        },
        to: {
            fullName: to.split('@')[0],
            email: to
        }
    }
}