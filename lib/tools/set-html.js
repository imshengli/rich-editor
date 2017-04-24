import { stateFromHTML } from 'draft-js-import-html';
import { EditorState } from 'draft-js';
module.exports = function(html) {
    const contentState = stateFromHTML(html);
    this.onChange(EditorState.createWithContent(contentState, this.decorator));
};
