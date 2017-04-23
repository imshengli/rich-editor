import React, { Component } from 'react';
import Button from '../button/index.jsx';
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
        const active = blockType === 'header-two';
        return (<Button
            label="H"
            onToggle={onToggle}
            style="header-two"
            title="Header"
            active={active} />);
    }
}
