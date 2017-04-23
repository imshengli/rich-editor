import React, { Component } from 'react';
import classNames from 'classnames';
import './index.scss';

export default class ButtonControls extends Component {
    constructor(props) {
        super(props);
        // active: button default state, false
        this.state = {
            active: false
        };
    }
    componentWillReceiveProps(next) {
        // When receive new props, set the button state.
        this.setState({
            active: next.active || ''
        });
    }
    render() {
        const btnClassNames = classNames({
            'rich-editor-tools-button': true,
            'rich-editor-tools-button-active': this.state.active
        });
        // const clickEvent = this.props.clickEvent || (() => {});
        return (<div title={this.props.title} className={btnClassNames} style={this.props.activeStyle} onMouseDown={this.onToggle.bind(this)}>
            {this.props.label} {this.props.children}
        </div>);
    }
    onToggle(e) {
        e.preventDefault();
        this.props.onToggle(this.props.style);
        // Set button state: true or false
        this.setState({
            active: !this.state.active
        });
    }
}
