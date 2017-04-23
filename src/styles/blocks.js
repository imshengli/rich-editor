module.exports = (block) => {
    switch(block.getType()) {
        case 'blockquote':
            return 'rich-editor-content-blockquote';
        case 'code-block':
            return 'rich-editor-content-code';
        case 'header-two':
            return 'rich-editor-content-header-two';
        case 'ordered-list-item':
            return 'rich-editor-content-ordered-list';
        case 'unordered-list-item':
            return 'rich-editor-content-unordered-list';
        case 'atomic': 
            return 'rich-editor-image';
        default:
            return null;
    }
}
