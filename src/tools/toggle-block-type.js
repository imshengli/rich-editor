import { RichUtils } from 'draft-js';

module.exports = function(type) {
    this.onChange(RichUtils.toggleBlockType(this.state.editorState, type));
};
