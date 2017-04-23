import React, { Component } from 'react';
import StyleButton from '../button/index.jsx';
import COLORS from './colors';
import './index.scss';

class ColorControls extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeColor: '#333'
        };
    }
    render() {
        var currentStyle = this.props.editorState.getCurrentInlineStyle();

        const colors = COLORS.map((type, index) => {
            return (<li key={index}>
                <div style={{ backgroundColor: type.color, color: type.color }}>{type.label}</div>
            </li>);
        });

        return (<div className="rich-editor-tools-colors" title="Colors">
            {/*{COLORS.map((type, index) =>
                <StyleButton
                    key={index}
                    active={currentStyle.has(type.style)}
                    label={type.label}
                    onToggle={this.props.onToggle}
                    style={type.style}
                />
            )}*/}
            <div className="rich-editor-tools-colors-active">A</div>
            <ul className="rich-editor-tools-colors-select"> {colors} </ul>
        </div>);
    }
};

export default ColorControls;
