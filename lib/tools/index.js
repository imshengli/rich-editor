import toggleBlockType from './toggle-block-type.js';
import toggleInlineStyle from './toggle-inline-style.js';
import toggleTab from './toggle-tab.js';
import toggleColor from './toggle-color.js';
import { toggleLink, setLink } from './toggle-link.js';
import { toggleImage, mediaConfirm } from './toggle-image.js';
import setHTML from './set-html.js';
import getHTML from './get-html.js';

var dialogOkEvent = function dialogOkEvent(dialogInfo, type) {
    if (type === 'link') {
        return setLink.call(this, dialogInfo);
    } else if (type === 'image') {
        return mediaConfirm.call(this, dialogInfo);
    }
};

module.exports = {
    toggleBlockType: toggleBlockType,
    toggleInlineStyle: toggleInlineStyle,
    toggleTab: toggleTab,
    toggleColor: toggleColor,
    toggleLink: toggleLink,
    dialogOkEvent: dialogOkEvent,
    toggleImage: toggleImage,
    setHTML: setHTML,
    getHTML: getHTML
};
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(dialogOkEvent, 'dialogOkEvent', 'src/tools/index.js');
}();

;