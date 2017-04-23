import { RichUtils } from 'draft-js';

module.exports = function(style) {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, style));
};
