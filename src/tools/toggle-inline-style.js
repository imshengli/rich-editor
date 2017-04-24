import { RichUtils } from 'draft-js';

export default function(style) {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, style));
};
