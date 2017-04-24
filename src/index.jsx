import React, { Component } from "react";
import { Editor, EditorState, RichUtils, Modifier, convertToRaw, convertFromHTML, ContentState,
    CompositeDecorator } from 'draft-js';
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


const mediaBlockRenderer = (block) => {
    if (block.getType() === 'atomic') {
        return {
            component: Media,
            editable: false
        };
    }
    return null;
}

export default class RichEditor extends Component {
    constructor(props) {
        super(props);
        this.decorator = new CompositeDecorator([{
            strategy: findLinkEntities,
            component: LINK
        }]);

        this.state = {
            editorState: EditorState.createEmpty(this.decorator),
            dialog: {
                visible: false,
                insertDataType: '', // link or image
                text: '',
                href: '',
                imageSrc: '',
                error: false
            }
        };

        this.onChange = (editorState) => this.setState({ editorState });

        // API
        this.getHTML = () => Tools.getHTML.call(this);
        this.setHTML = (html) => Tools.setHTML.call(this, html);

        this.focus = () => this.refs.richEditor.focus();
        this.onTab = (e) => Tools.toggleTab.call(this, e);
        this.toggleColor = (toggledColor) => Tools.toggleColor.call(this, toggledColor);
        this.toggleBlockType = (type) => Tools.toggleBlockType.call(this, type);
        this.toggleInlineStyle = (style) => Tools.toggleInlineStyle.call(this, style);
        this.toggleLink = (inlineStyle) => Tools.toggleLink.call(this, inlineStyle);
        this.toggleImage = (inlineStyle) => Tools.toggleImage.call(this, inlineStyle);
    }

    render() {
        const { editorState } = this.state;
        return (
            <div className="rich-editor">
                <div className="rich-editor-tools util-clearfix">
                    <Bold
                        editorState={editorState}
                        onToggle={this.toggleInlineStyle} />
                    <Italic
                        editorState={editorState}
                        onToggle={this.toggleInlineStyle} />
                    <Underline
                        editorState={editorState}
                        onToggle={this.toggleInlineStyle} />
                    <Separative />
                    <Header
                        editorState={editorState}
                        onToggle={this.toggleBlockType} />
                    <Quote
                        editorState={editorState}
                        onToggle={this.toggleBlockType} />
                    <Code
                        editorState={editorState}
                        onToggle={this.toggleBlockType} />
                    <UnOrderedList
                        editorState={editorState}
                        onToggle={this.toggleBlockType} />
                    <OrderedList
                        editorState={editorState}
                        onToggle={this.toggleBlockType} />
                    <Separative />
                    {/*<ColorControls
                        editorState={editorState}
                        onToggle={this.toggleColor} />*/}
                    <Link
                        editorState={editorState}
                        onToggle={this.toggleLink} />
                    <Image
                        editorState={editorState}
                        onToggle={this.toggleImage} />
                </div>
                <div className="rich-editor-content" onClick={this.focus}>
                    <Editor
                        blockStyleFn={BlockStyles}
                        blockRendererFn={mediaBlockRenderer}
                        editorState={editorState}
                        onChange={this.onChange}
                        onTab={this.onTab}
                        placeholder="Placeholder..."
                        ref="richEditor"
                    />
                </div>
                <Dialog
                    setRichEditorState={this.setState.bind(this)}
                    {...this.state.dialog} okEvent={Tools.dialogOkEvent.bind(this)} />
            </div>
        );
    }
}
