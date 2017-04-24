import { RichUtils } from 'draft-js';

export default function(e) {
    const { editorState } = this.state;
    const newEditorState = RichUtils.onTab(e, editorState, 4);
    if (newEditorState !== editorState) {
        this.onChange(newEditorState);
    }
};
