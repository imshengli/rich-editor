var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from "react";
import { Editor, EditorState, RichUtils, Modifier, convertToRaw, convertFromHTML, ContentState, CompositeDecorator } from 'draft-js';
import Separative from './separative/index.jsx';
import Dialog from './dialog/index.jsx';
// Inlines
import Bold from './bold/index.jsx';
import Italic from './italic/index.jsx';
import Underline from './underline/index.jsx';
// blocks
import Header from './header/index.jsx';
import Quote from './quote/index.jsx';
import Code from './code/index.jsx';
import UnOrderedList from './unordered-list/index.jsx';
import OrderedList from './ordered-list/index.jsx';
// Link and Image
import { LINK, Link, findLinkEntities } from './link/index.jsx';
import { Media, Image } from './image/index.jsx';
import Tools from './tools/index';
import ColorControls from './colors/index.jsx';
import BlockStyles from './styles/blocks';
import './index.scss';

var mediaBlockRenderer = function mediaBlockRenderer(block) {
    if (block.getType() === 'atomic') {
        return {
            component: Media,
            editable: false
        };
    }
    return null;
};

var RichEditor = function (_Component) {
    _inherits(RichEditor, _Component);

    function RichEditor(props) {
        _classCallCheck(this, RichEditor);

        var _this = _possibleConstructorReturn(this, (RichEditor.__proto__ || Object.getPrototypeOf(RichEditor)).call(this, props));

        _this.decorator = new CompositeDecorator([{
            strategy: findLinkEntities,
            component: LINK
        }]);

        _this.state = {
            editorState: EditorState.createEmpty(_this.decorator),
            dialog: {
                visible: false,
                insertDataType: '', // link or image
                text: '',
                href: '',
                imageSrc: '',
                error: false
            }
        };

        _this.onChange = function (editorState) {
            return _this.setState({ editorState: editorState });
        };

        // API
        _this.getHTML = function () {
            return Tools.getHTML.call(_this);
        };
        _this.setHTML = function (html) {
            return Tools.setHTML.call(_this, html);
        };

        _this.focus = function () {
            return _this.refs.richEditor.focus();
        };
        _this.onTab = function (e) {
            return Tools.toggleTab.call(_this, e);
        };
        _this.toggleColor = function (toggledColor) {
            return Tools.toggleColor.call(_this, toggledColor);
        };
        _this.toggleBlockType = function (type) {
            return Tools.toggleBlockType.call(_this, type);
        };
        _this.toggleInlineStyle = function (style) {
            return Tools.toggleInlineStyle.call(_this, style);
        };
        _this.toggleLink = function (inlineStyle) {
            return Tools.toggleLink.call(_this, inlineStyle);
        };
        _this.toggleImage = function (inlineStyle) {
            return Tools.toggleImage.call(_this, inlineStyle);
        };
        return _this;
    }

    _createClass(RichEditor, [{
        key: 'render',
        value: function render() {
            var editorState = this.state.editorState;

            return React.createElement(
                'div',
                { className: 'rich-editor' },
                React.createElement(
                    'div',
                    { className: 'rich-editor-tools util-clearfix' },
                    React.createElement(Bold, {
                        editorState: editorState,
                        onToggle: this.toggleInlineStyle }),
                    React.createElement(Italic, {
                        editorState: editorState,
                        onToggle: this.toggleInlineStyle }),
                    React.createElement(Underline, {
                        editorState: editorState,
                        onToggle: this.toggleInlineStyle }),
                    React.createElement(Separative, null),
                    React.createElement(Header, {
                        editorState: editorState,
                        onToggle: this.toggleBlockType }),
                    React.createElement(Quote, {
                        editorState: editorState,
                        onToggle: this.toggleBlockType }),
                    React.createElement(Code, {
                        editorState: editorState,
                        onToggle: this.toggleBlockType }),
                    React.createElement(UnOrderedList, {
                        editorState: editorState,
                        onToggle: this.toggleBlockType }),
                    React.createElement(OrderedList, {
                        editorState: editorState,
                        onToggle: this.toggleBlockType }),
                    React.createElement(Separative, null),
                    React.createElement(Link, {
                        editorState: editorState,
                        onToggle: this.toggleLink }),
                    React.createElement(Image, {
                        editorState: editorState,
                        onToggle: this.toggleImage })
                ),
                React.createElement(
                    'div',
                    { className: 'rich-editor-content', onClick: this.focus },
                    React.createElement(Editor, {
                        blockStyleFn: BlockStyles,
                        blockRendererFn: mediaBlockRenderer,
                        editorState: editorState,
                        onChange: this.onChange,
                        onTab: this.onTab,
                        placeholder: 'Placeholder...',
                        ref: 'richEditor'
                    })
                ),
                React.createElement(Dialog, _extends({
                    setRichEditorState: this.setState.bind(this)
                }, this.state.dialog, { okEvent: Tools.dialogOkEvent.bind(this) }))
            );
        }
    }]);

    return RichEditor;
}(Component);

var _default = RichEditor;
export default _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(mediaBlockRenderer, 'mediaBlockRenderer', 'src/index.jsx');

    __REACT_HOT_LOADER__.register(RichEditor, 'RichEditor', 'src/index.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', 'src/index.jsx');
}();

;