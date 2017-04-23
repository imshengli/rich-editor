import { Editor, Entity, EditorState, RichUtils, Modifier, convertToRaw, ContentState } from 'draft-js';

const toggleLink = function(inlineStyle) {
    let selectedText = '', selectedHref = ''; 
    // `This` [in here] is rich-editor instance
    const {
        editorState
    } = this.state;
    const selectionState = editorState.getSelection();
    if (!selectionState.isCollapsed()) {
        // Get Selected Text
        const currentContent = editorState.getCurrentContent();
        const anchorKey = selectionState.getAnchorKey();
        const currentContentBlock = currentContent.getBlockForKey(anchorKey);
        const start = selectionState.getStartOffset();
        const end = selectionState.getEndOffset();
        selectedText = currentContentBlock.getText().slice(start, end);
        // Get Selected Text's Href
        const linkKey = currentContentBlock.getEntityAt(start);
        if (linkKey) {
            const linkInstance = currentContent.getEntity(linkKey);
            selectedHref = linkInstance.getData().url;
        }
    }
    this.setState({
        dialog: {
            visible: true,
            insertDataType: 'link',
            text: selectedText,
            href: selectedHref
        }
    });
};

const setLink = function(dialogInfo) {
    const inlineStyle = 'LINK';
    const {
        editorState
    } = this.state;
    const linkInfo = this.state.dialog || {};
    const { text, href } = linkInfo;
    const selectionState = editorState.getSelection();
    const currentContent = editorState.getCurrentContent();    
    if (!selectionState.isCollapsed()) {
        // Has selected text
        const startKey = selectionState.getStartKey();
        const startOffset = selectionState.getStartOffset();
        const blockWithLinkAtBeginning = currentContent.getBlockForKey(startKey);
        const linkKey = blockWithLinkAtBeginning.getEntityAt(startOffset);

        const contentStateWithEntity = currentContent.createEntity('LINK', 'MUTABLE', {                 url: dialogInfo.href,
            text: dialogInfo.text
        });
        const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
        const newEditorState = EditorState.set(editorState, { currentContent: contentStateWithEntity });
        this.setState({
            editorState: RichUtils.toggleLink(newEditorState, newEditorState.getSelection(),entityKey)
        }, () => {
            this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle));
            setTimeout(() => {
                this.refs.richEditor.focus();
            }, 10);
        });
        return true;
    } else {
        const contentStateBlankEntity = Entity.create('LINK', 'MUTABLE', {
            url: dialogInfo.href,
            text: dialogInfo.text
        });
        const textWithEntity = Modifier.insertText(currentContent, selectionState, dialogInfo.text, null, contentStateBlankEntity);
        this.setState({
            editorState: EditorState.push(editorState, textWithEntity)
        }, () => {
            this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle));
            setTimeout(() => {
                this.refs.richEditor.focus();
            }, 10);
        });
        return true;
    }
};

module.exports = {
    toggleLink,
    setLink
};
