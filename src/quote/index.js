import React, { Component } from 'react';
import { QuoteIcon } from '../svg/icon.js';
import Button from '../button/index.js';
import './index.scss';

export default class QuoteControls extends Component {
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
        const active = blockType === 'blockquote';
        return (<Button
            onToggle={onToggle}
            style="blockquote"
            title="Quote"
            active={active} >
                <QuoteIcon />
            </Button>
        );
    }
}
