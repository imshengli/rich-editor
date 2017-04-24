import { stateToHTML } from 'draft-js-export-html';
import { EditorState } from 'draft-js';
import blockStyles from '../styles/blocks';

const blockRenderWithClass = (block) => {
    const className = blockStyles(block);
    const text = block.getText();
    return `<div class=${className}>${text}</div>`;
};
const imageRenderWidthClass = (block, contentState) => {
    const entity = contentState.getEntity(block.getEntityAt(0));
    const { src, alt } = entity.getData();
    return `<div class="rich-editor-image">
        <a href=${src} target="_blank">
            <img src=${src} alt=${alt} />
        </a>
        <p class="rich-editor-image-text">${alt}</p>
    </div>`;
};

module.exports = function() {
    const contentState = this.state.editorState.getCurrentContent();
    const options = {
        inlineStyles: {
            'RED': {
                'style': {'color': '#f00'}
            },
            'LINK': {
                'attributes': {'class': 'rich-editor-link'}
            }
        },
        blockRenderers: {
            'code-block': (block) => `<pre class="public-DraftStyleDefault-pre">${blockRenderWithClass(block)}</pre>`,
            'blockquote': (block) => blockRenderWithClass(block),
            'ordered-list-item': (block) => blockRenderWithClass(block),
            'unordered-list-item': (block) => blockRenderWithClass(block),
            'header-two': (block) => blockRenderWithClass(block),
            'atomic': (block) => imageRenderWidthClass(block, contentState)
        }
    };

    const html = stateToHTML(contentState, options);
    return `<div class="rich-editor rich-editor-output">${html}</div>`;
};
