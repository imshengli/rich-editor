import { RichUtils } from 'draft-js';

export default function(type) {
    this.onChange(RichUtils.toggleBlockType(this.state.editorState, type));
};
