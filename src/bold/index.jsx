import React, { Component } from 'react';
import Button from '../button/index';

export default class BoldControls extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {
            editorState,
            onToggle
        } = this.props;
        const currentStyle = editorState.getCurrentInlineStyle();
        const active = currentStyle.has('BOLD');
        // const activeStyle = active ? this.props.activeStyle : null;
        const activeStyle = this.props.activeStyle;
        return (<Button
            label="B"
            onToggle={onToggle}
            style="BOLD"
            title="Bold"
            activeStyle={activeStyle}
            active={active} />
        );
    }
}
BoldControls.defaultProps = {
    activeStyle: {
        fontWeight: 'bold',
        lineHeight: '28px'
    }
};
