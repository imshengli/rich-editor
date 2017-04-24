import { RichUtils } from 'draft-js';

module.exports = function (style) {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, style));
};
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }
}();

;