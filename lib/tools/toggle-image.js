import { Editor, EditorState, RichUtils, convertToRaw, ContentState, AtomicBlockUtils } from 'draft-js';

var toggleImage = function toggleImage(inlineStyle) {
    this.setState({
        dialog: {
            visible: true,
            insertDataType: 'image',
            imageSrc: '',
            text: ''
        }
    });
};

var mediaConfirm = function mediaConfirm(dialogInfo) {
    var _this = this;

    var editorState = this.state.editorState;

    var contentState = editorState.getCurrentContent();
    var contentStateWithEntity = contentState.createEntity('image', 'IMMUTABLE', {
        src: dialogInfo.imageSrc,
        alt: dialogInfo.text
    });
    var entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    var newEditorState = EditorState.set(editorState, {
        currentContent: contentStateWithEntity
    });
    this.setState({
        editorState: AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, ' ')
    }, function () {
        setTimeout(function () {
            return _this.focus();
        }, 0);
    });
    return true;
};

module.exports = {
    toggleImage: toggleImage,
    mediaConfirm: mediaConfirm
};
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(toggleImage, 'toggleImage', 'src/tools/toggle-image.js');

    __REACT_HOT_LOADER__.register(mediaConfirm, 'mediaConfirm', 'src/tools/toggle-image.js');
}();

;