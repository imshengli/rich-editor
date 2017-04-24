var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import classNames from 'classnames';
import { LinkIcon, ImageIcon } from '../svg/icon';
import './index.scss';

var Dialog = function (_Component) {
    _inherits(Dialog, _Component);

    function Dialog(props) {
        _classCallCheck(this, Dialog);

        var _this = _possibleConstructorReturn(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).call(this, props));

        _this.state = {
            text: _this.props.text,
            href: _this.props.href,
            imageSrc: _this.props.imageSrc
        };
        return _this;
    }

    _createClass(Dialog, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(next) {
            this.setState({
                text: next.text,
                href: next.href,
                imageSrc: next.imageSrc,
                error: next.error
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                visible = _props.visible,
                _props$insertDataType = _props.insertDataType,
                insertDataType = _props$insertDataType === undefined ? '' : _props$insertDataType,
                okEvent = _props.okEvent;
            var _state = this.state,
                _state$text = _state.text,
                text = _state$text === undefined ? '' : _state$text,
                _state$href = _state.href,
                href = _state$href === undefined ? '' : _state$href,
                _state$imageSrc = _state.imageSrc,
                imageSrc = _state$imageSrc === undefined ? '' : _state$imageSrc,
                _state$error = _state.error,
                error = _state$error === undefined ? false : _state$error;

            var dialogHideClassName = classNames({
                'rich-editor-dialog-hide': !visible
            });
            var textInputHideClassName = classNames({
                'rich-editor-dialog-input-error': error
            });
            var hrefInputHideClassName = classNames({
                'rich-editor-dialog-input-hide': insertDataType !== 'link',
                'rich-editor-dialog-input-error': error
            });
            var imageInputHideClassName = classNames({
                'rich-editor-dialog-input-hide': insertDataType !== 'image',
                'rich-editor-dialog-input-error': error
            });
            return React.createElement(
                'div',
                null,
                React.createElement('div', { className: 'rich-editor-dialog-shadow ' + dialogHideClassName }),
                React.createElement(
                    'div',
                    { className: 'rich-editor-dialog ' + dialogHideClassName },
                    React.createElement(
                        'div',
                        { className: 'rich-editor-dialog-input ' + textInputHideClassName + ' rich-editor-dialog-input-text' },
                        React.createElement(
                            'div',
                            { className: 'rich-editor-dialog-icon rich-editor-dialog-icon-text' },
                            'T'
                        ),
                        React.createElement('input', { type: 'text', name: 'text', placeholder: '', value: text, onChange: this.changeEvent.bind(this, 'text'), autoComplete: 'off' })
                    ),
                    React.createElement(
                        'div',
                        { className: 'rich-editor-dialog-input ' + hrefInputHideClassName + ' rich-editor-dialog-input-href' },
                        React.createElement(LinkIcon, { className: 'rich-editor-dialog-icon' }),
                        React.createElement('input', { type: 'text', name: 'href', placeholder: 'https://', onChange: this.changeEvent.bind(this, 'href'), value: href, autoComplete: 'off' })
                    ),
                    React.createElement(
                        'div',
                        { className: 'rich-editor-dialog-input rich-editor-dialog-input-img ' + imageInputHideClassName },
                        React.createElement(ImageIcon, { className: 'rich-editor-dialog-icon' }),
                        React.createElement('input', { type: 'text', name: 'img', value: imageSrc, autoComplete: 'off', onChange: this.changeEvent.bind(this, 'imageSrc') })
                    ),
                    React.createElement(
                        'div',
                        { className: 'rich-editor-dialog-buttons' },
                        React.createElement('input', { onClick: this.cancelEvent.bind(this), type: 'button', value: 'CANCEL', className: 'rich-editor-dialog-button-default' }),
                        React.createElement('input', { onClick: this.okEvent.bind(this), type: 'button', value: 'OK', className: 'rich-editor-dialog-button-primary' })
                    )
                )
            );
        }
    }, {
        key: 'changeEvent',
        value: function changeEvent(type, event) {
            // Input change event
            this.setState(_defineProperty({
                error: false
            }, type, event.target.value));
        }
    }, {
        key: 'okEvent',
        value: function okEvent() {
            // Check info
            if (this.props.insertDataType === 'link' && (!this.state.href || !this.state.text) || this.props.insertDataType === 'image' && !this.state.imageSrc) {
                this.setState({
                    error: true
                });
                return false;
            }
            if (this.props.okEvent(this.state, this.props.insertDataType)) {
                this.initialDialog();
            }
        }
    }, {
        key: 'cancelEvent',
        value: function cancelEvent() {
            this.initialDialog();
        }
    }, {
        key: 'initialDialog',
        value: function initialDialog() {
            this.props.setRichEditorState({
                dialog: {
                    text: '',
                    href: '',
                    imageSrc: '',
                    visible: false
                }
            });
        }
    }]);

    return Dialog;
}(Component);

var _default = Dialog;
export default _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Dialog, 'Dialog', 'src/dialog/index.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', 'src/dialog/index.jsx');
}();

;