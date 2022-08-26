import { AppHeader } from "./cmps/app-header.jsx"
import { About } from "./views/about.jsx"
import { Home } from "./views/home.jsx"
import { MailIndex } from "./apps/mail/views/mail-index.jsx"
import { NoteIndex } from "./apps/note/views/note-index.jsx"
import { BookIndex } from "./apps/book/views/book-index.jsx"
import { BookDetails } from "./apps/book/views/book-details.jsx"
import { UserMsg } from './cmps/user-msg.jsx';

const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

export function App() {
    return <Router>
        <section className="app main-layout">
            <AppHeader />
            <Switch>
                <Route path="/book/:bookId" component={BookDetails} />
                <Route path="/book" component={BookIndex} />
                <Route path="/mail/:status?/:compose?" component={MailIndex} />
                <Route path="/note" component={NoteIndex} />
                <Route path="/about" component={About} />
                <Route path="/" component={Home} />
            </Switch>
            <UserMsg />
        </section>
    </Router>
}
