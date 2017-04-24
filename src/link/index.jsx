import React, { Component } from 'react';
import { LinkIcon } from '../svg/icon';
import Button from '../button/index';

const findLinkEntities = (contentBlock, callback, contentState) => {
    contentBlock.findEntityRanges((character) => {
        const entityKey = character.getEntity();
        return (
            entityKey !== null &&
            contentState.getEntity(entityKey).getType() === 'LINK'
        );
    }, callback);
};

const LINK = (props) => {
    const {
        url,
        text
    } = props.contentState.getEntity(props.entityKey).getData();
    let content = null;
    if (text) {
        content = text;
    } else {
        content = props.children;
    }
    return (<a href={url} target="_blank" title={text}>
        {content}
    </a>);
};

class LinkControls extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {
            editorState,
            onToggle
        } = this.props;
        const currentStyle = editorState.getCurrentInlineStyle();
        const active = currentStyle.has('LINK');
        return (<Button
            onToggle={this.props.onToggle}
            style="LINK"
            title="Link"
            active={active}>
            <LinkIcon />
        </Button>);
    }
}

module.exports = {
    LINK,
    findLinkEntities,
    Link: LinkControls
};
