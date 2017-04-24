import { RichUtils } from 'draft-js';

module.exports = function (e) {
    var editorState = this.state.editorState;

    var newEditorState = RichUtils.onTab(e, editorState, 4);
    if (newEditorState !== editorState) {
        this.onChange(newEditorState);
    }
};
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }
}();

;