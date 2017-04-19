import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Editor, EditorState, RichUtils, Modifier } from 'draft-js';

export default class RichEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty()
        };
    }
    render() {
        return (<div className="rich-editor">
            <h1>Rich Editor</h1>
        </div>);
    }
}

ReactDOM.render(<RichEditor />, document.getElementById('root'));
