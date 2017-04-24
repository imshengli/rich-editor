import { RichUtils } from 'draft-js';

module.exports = function(e) {
    const { editorState } = this.state;
    const newEditorState = RichUtils.onTab(e, editorState, 4);
    if (newEditorState !== editorState) {
        this.onChange(newEditorState);
    }
};
