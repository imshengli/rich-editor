import {
    Editor,
    EditorState,
    RichUtils,
    convertToRaw,
    ContentState,
    AtomicBlockUtils
} from 'draft-js';

const toggleImage = function(inlineStyle) {
    this.setState({
        dialog: {
            visible: true,
            insertDataType: 'image',
            imageSrc: '',
            text: ''
        }
    });
};

const mediaConfirm = function(dialogInfo) {
    const {
        editorState
    } = this.state;
    const contentState = editorState.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity('image', 'IMMUTABLE', {
        src: dialogInfo.imageSrc,
        alt: dialogInfo.text
    });
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const newEditorState = EditorState.set(editorState, {
        currentContent: contentStateWithEntity
    });
    this.setState({
        editorState: AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, ' ')
    }, () => {
        setTimeout(() => this.focus(), 0);
    });
    return true;
};

module.exports = {
    toggleImage,
    mediaConfirm
};

