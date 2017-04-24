import { RichUtils } from 'draft-js';

module.exports = function (type) {
    this.onChange(RichUtils.toggleBlockType(this.state.editorState, type));
};
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }
}();

;