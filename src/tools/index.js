import toggleBlockType from './toggle-block-type.js';
import toggleInlineStyle from './toggle-inline-style.js';
import toggleTab from './toggle-tab.js';
import toggleColor from './toggle-color.js';
import { toggleLink, setLink } from './toggle-link.js';
import { toggleImage, mediaConfirm } from './toggle-image.js';
import setHTML from './set-html.js';
import getHTML from './get-html.js';

const dialogOkEvent = function(dialogInfo, type) {
    if (type === 'link') {
        return setLink.call(this, dialogInfo);
    } else if (type === 'image') {
        return mediaConfirm.call(this, dialogInfo);
    }
};

export default {
    toggleBlockType,
    toggleInlineStyle,
    toggleTab,
    toggleColor,
    toggleLink,
    dialogOkEvent,
    toggleImage,
    setHTML,
    getHTML
};
