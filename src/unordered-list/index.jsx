import React, { Component } from 'react';
import { UnOrderedListIcon } from '../svg/icon.jsx';
import Button from '../button/index.jsx';

export default class UnOrderedListControls extends Component {
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
        const active = blockType === 'unordered-list-item';
        return (<Button
            onToggle={onToggle}
            style="unordered-list-item"
            title="UnOrdered List"
            active={active}>
                <UnOrderedListIcon />
            </Button>
        );
    }
}
