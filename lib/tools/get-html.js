import { stateToHTML } from 'draft-js-export-html';
import { EditorState } from 'draft-js';
import blockStyles from '../styles/blocks';

var blockRenderWithClass = function blockRenderWithClass(block) {
    var className = blockStyles(block);
    var text = block.getText();
    return '<div class=' + className + '>' + text + '</div>';
};
var imageRenderWidthClass = function imageRenderWidthClass(block, contentState) {
    var entity = contentState.getEntity(block.getEntityAt(0));

    var _entity$getData = entity.getData(),
        src = _entity$getData.src,
        alt = _entity$getData.alt;

    return '<div class="rich-editor-image">\n        <a href=' + src + ' target="_blank">\n            <img src=' + src + ' alt=' + alt + ' />\n        </a>\n        <p class="rich-editor-image-text">' + alt + '</p>\n    </div>';
};

module.exports = function () {
    var contentState = this.state.editorState.getCurrentContent();
    var options = {
        inlineStyles: {
            'RED': {
                'style': { 'color': '#f00' }
            },
            'LINK': {
                'attributes': { 'class': 'rich-editor-link' }
            }
        },
        blockRenderers: {
            'code-block': function codeBlock(block) {
                return '<pre class="public-DraftStyleDefault-pre">' + blockRenderWithClass(block) + '</pre>';
            },
            'blockquote': function blockquote(block) {
                return blockRenderWithClass(block);
            },
            'ordered-list-item': function orderedListItem(block) {
                return blockRenderWithClass(block);
            },
            'unordered-list-item': function unorderedListItem(block) {
                return blockRenderWithClass(block);
            },
            'header-two': function headerTwo(block) {
                return blockRenderWithClass(block);
            },
            'atomic': function atomic(block) {
                return imageRenderWidthClass(block, contentState);
            }
        }
    };

    var html = stateToHTML(contentState, options);
    return '<div class="rich-editor rich-editor-output">' + html + '</div>';
};
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(blockRenderWithClass, 'blockRenderWithClass', 'src/tools/get-html.js');

    __REACT_HOT_LOADER__.register(imageRenderWidthClass, 'imageRenderWidthClass', 'src/tools/get-html.js');
}();

;