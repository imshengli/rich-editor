import React, { Component } from 'react';
import Button from '../button/index';

export default class UnderLineControls extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {
            editorState,
            onToggle
        } = this.props;
        const currentStyle = editorState.getCurrentInlineStyle();
        const active = currentStyle.has('UNDERLINE');
        // const activeStyle = active ? this.props.activeStyle : null;
        const activeStyle = this.props.activeStyle;
        return (<Button
            label="U"
            onToggle={onToggle}
            style="UNDERLINE"
            title="Underline"
            activeStyle={activeStyle}
            active={active} />
        );
    }
}
UnderLineControls.defaultProps = {
    activeStyle: {
        textDecoration: 'underline'
    }
};
