import React, { Component } from 'react';
import classNames from 'classnames';
import { LinkIcon, ImageIcon } from '../svg/icon.js';
import './index.scss';
export default class Dialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.text,
            href: this.props.href,
            imageSrc: this.props.imageSrc
        };
    }
    componentWillReceiveProps(next) {
        this.setState({
            text: next.text,
            href: next.href,
            imageSrc: next.imageSrc,
            error: next.error
        });
    }
    render() {

        const { visible, insertDataType = '', okEvent } = this.props;
        const {
            text = '',
            href = '',
            imageSrc = '',
            error = false
        } = this.state;
        const dialogHideClassName = classNames({
            'rich-editor-dialog-hide': !visible
        });
        const textInputHideClassName = classNames({
            'rich-editor-dialog-input-error': error
        });
        const hrefInputHideClassName = classNames({
            'rich-editor-dialog-input-hide': insertDataType !== 'link',
            'rich-editor-dialog-input-error': error
        });
        const imageInputHideClassName = classNames({
            'rich-editor-dialog-input-hide': insertDataType !== 'image',
            'rich-editor-dialog-input-error': error
        });
        return (<div>
            <div className={`rich-editor-dialog-shadow ${dialogHideClassName}`}></div>
            <div className={`rich-editor-dialog ${dialogHideClassName}`}>
                <div className={`rich-editor-dialog-input ${textInputHideClassName} rich-editor-dialog-input-text`}>
                    <div className="rich-editor-dialog-icon rich-editor-dialog-icon-text">T</div>
                    <input type="text" name="text" placeholder="" value={text} onChange={this.changeEvent.bind(this, 'text')} autoComplete="off" />
                </div>
                <div className={`rich-editor-dialog-input ${hrefInputHideClassName} rich-editor-dialog-input-href`}>
                    <LinkIcon className="rich-editor-dialog-icon" />
                    <input type="text" name="href" placeholder="https://" onChange={this.changeEvent.bind(this, 'href')} value={href} autoComplete="off" />
                </div>
                <div className={`rich-editor-dialog-input rich-editor-dialog-input-img ${imageInputHideClassName}`}>
                    <ImageIcon className="rich-editor-dialog-icon" />
                    <input type="text" name="img" value={imageSrc} autoComplete="off" onChange={this.changeEvent.bind(this, 'imageSrc')} />
                </div>
                <div className="rich-editor-dialog-buttons">
                    <input onClick={this.cancelEvent.bind(this)} type="button" value="CANCEL" className="rich-editor-dialog-button-default" />
                    <input onClick={this.okEvent.bind(this)} type="button" value="OK" className="rich-editor-dialog-button-primary" />
                </div>
            </div>
        </div>);
    }
    changeEvent(type, event) {
        // Input change event
        this.setState({
            error: false,
            [type]: event.target.value
        });
    }
    okEvent() {
        // Check info
        if (((this.props.insertDataType === 'link') && (!this.state.href || !this.state.text)) ||
            (this.props.insertDataType === 'image' && !this.state.imageSrc)) {
            this.setState({
                error: true
            });
            return false;
        }
        if (this.props.okEvent(this.state, this.props.insertDataType)) {
            this.initialDialog();
        }
    }
    cancelEvent() {
        this.initialDialog();
    }
    initialDialog() {
        this.props.setRichEditorState({
            dialog: {
                text: '',
                href: '',
                imageSrc: '',
                visible: false
            }
        });
    }
}
