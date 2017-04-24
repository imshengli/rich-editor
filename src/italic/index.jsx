import React, { Component } from 'react';
import Button from '../button/index';
export default class ItalicControls extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {
            editorState,
            onToggle
        } = this.props;
        const currentStyle = editorState.getCurrentInlineStyle();
        const active = currentStyle.has('ITALIC');
        // const activeStyle = active ? this.props.activeStyle : null;
        const activeStyle = this.props.activeStyle;
        return (<Button
            label="I"
            onToggle={this.props.onToggle}
            style="ITALIC"
            title="Italic"
            activeStyle={activeStyle}
            active={active} />
        );
    }
}
ItalicControls.defaultProps = {
    activeStyle: {
        fontStyle: 'italic'
    }
};
