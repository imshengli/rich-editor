import React, { Component } from 'react';
import Button from '../button/index.js';
import { CodingIcon } from '../svg/icon.js';
import './index.scss';

export default class CodeControls extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {
            editorState,
            onToggle
        } = this.props;
        const selection = editorState.getSelection();
        const blockType = editorState
            .getCurrentContent()
            .getBlockForKey(selection.getStartKey())
            .getType();
        const active = blockType === 'code-block';
        return (<Button
            onToggle={onToggle}
            style="code-block"
            title="Code"
            active={active}><CodingIcon /></Button>
        );
    }
}
