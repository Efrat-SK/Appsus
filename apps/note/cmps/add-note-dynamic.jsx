import { AddNoteTxt } from "./add-note-txt.jsx"
import { AddNoteImg } from "./add-note-img.jsx"
import { AddNoteList } from "./add-note-list.jsx"



export class AddNoteDynamic extends React.Component {
    render() {
        <section>
            {console.log(this.props.match.params.status)}
        </section>
    // switch (noteType) {
    //     case 'note-txt':
    //         return <AddNoteTxt onEditNote={onEditNote} onAddNote={onAddNote} />
    //     case 'note-img':
    //         return <AddNoteImg onEditNote={onEditNote} onAddNote={onAddNote} />
    //     case 'note-todos':
    //         return <AddNoteList onEditNote={onEditNote} onAddNote={onAddNote} />
    // }
    }
}
