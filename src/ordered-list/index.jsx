import React, { Component } from 'react';
import { OrderedListIcon } from '../svg/icon.jsx';
import Button from '../button/index.jsx';

export default class OrderedListControls extends Component {
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
        const active = blockType === 'ordered-list-item';
        return (<Button
            onToggle={onToggle}
            style="ordered-list-item"
            title="Ordered List"
            active={active} >
                <OrderedListIcon />
            </Button>
        );
    }
}
