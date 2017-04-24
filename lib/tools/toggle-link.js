import { Editor, Entity, EditorState, RichUtils, Modifier, convertToRaw, ContentState } from 'draft-js';

var toggleLink = function toggleLink(inlineStyle) {
    var selectedText = '',
        selectedHref = '';
    // `This` [in here] is rich-editor instance
    var editorState = this.state.editorState;

    var selectionState = editorState.getSelection();
    if (!selectionState.isCollapsed()) {
        // Get Selected Text
        var currentContent = editorState.getCurrentContent();
        var anchorKey = selectionState.getAnchorKey();
        var currentContentBlock = currentContent.getBlockForKey(anchorKey);
        var start = selectionState.getStartOffset();
        var end = selectionState.getEndOffset();
        selectedText = currentContentBlock.getText().slice(start, end);
        // Get Selected Text's Href
        var linkKey = currentContentBlock.getEntityAt(start);
        if (linkKey) {
            var linkInstance = currentContent.getEntity(linkKey);
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

var setLink = function setLink(dialogInfo) {
    var _this = this;

    var inlineStyle = 'LINK';
    var editorState = this.state.editorState;

    var linkInfo = this.state.dialog || {};
    var text = linkInfo.text,
        href = linkInfo.href;

    var selectionState = editorState.getSelection();
    var currentContent = editorState.getCurrentContent();
    if (!selectionState.isCollapsed()) {
        // Has selected text
        var startKey = selectionState.getStartKey();
        var startOffset = selectionState.getStartOffset();
        var blockWithLinkAtBeginning = currentContent.getBlockForKey(startKey);
        var linkKey = blockWithLinkAtBeginning.getEntityAt(startOffset);

        var contentStateWithEntity = currentContent.createEntity('LINK', 'MUTABLE', { url: dialogInfo.href,
            text: dialogInfo.text
        });
        var entityKey = contentStateWithEntity.getLastCreatedEntityKey();
        var newEditorState = EditorState.set(editorState, { currentContent: contentStateWithEntity });
        this.setState({
            editorState: RichUtils.toggleLink(newEditorState, newEditorState.getSelection(), entityKey)
        }, function () {
            _this.onChange(RichUtils.toggleInlineStyle(_this.state.editorState, inlineStyle));
            setTimeout(function () {
                _this.refs.richEditor.focus();
            }, 10);
        });
        return true;
    } else {
        var contentStateBlankEntity = Entity.create('LINK', 'MUTABLE', {
            url: dialogInfo.href,
            text: dialogInfo.text
        });
        var textWithEntity = Modifier.insertText(currentContent, selectionState, dialogInfo.text, null, contentStateBlankEntity);
        this.setState({
            editorState: EditorState.push(editorState, textWithEntity)
        }, function () {
            _this.onChange(RichUtils.toggleInlineStyle(_this.state.editorState, inlineStyle));
            setTimeout(function () {
                _this.refs.richEditor.focus();
            }, 10);
        });
        return true;
    }
};

module.exports = {
    toggleLink: toggleLink,
    setLink: setLink
};
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(toggleLink, 'toggleLink', 'src/tools/toggle-link.js');

    __REACT_HOT_LOADER__.register(setLink, 'setLink', 'src/tools/toggle-link.js');
}();

;