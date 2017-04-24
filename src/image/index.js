import React, { Component } from 'react';
import { ImageIcon } from '../svg/icon.js';
import Button from '../button/index.js';
import './index.scss';

const Image = (props) => {
    const text = props.alt && <p className="rich-editor-image-text">{props.alt}</p>;
    return (<div className="rich-editor-image">
        <a href={props.src} target="_blank">
            <img src={props.src} alt={text} />
        </a>
        { text }
    </div>);
};

const Audio = (props) => {
    return (<div className="rich-editor-audio">
        <audio controls src={props.src} />
    </div>);
};

const Video = (props) => {
    return (<div className="rich-editor-video">
        <video controls src={props.src} />
    </div>);
};

const Media = (props) => {
    const entity = props.contentState.getEntity(props.block.getEntityAt(0));
    const { src, alt } = entity.getData();
    const type = entity.getType().toLowerCase();
    let media;
    if (type === 'audio') {
        media = <Audio src={src} />;
    } else if (type === 'image') {
        media = <Image src={src} alt={alt} />;
    } else if (type === 'video') {
        media = <Video src={src} />;
    }
    return media;
};

class ImageControls extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {
            editorState,
            onToggle
        } = this.props;
        const currentStyle = editorState.getCurrentInlineStyle();
        const active = currentStyle.has('IMAGE');
        return (<Button
            onToggle={this.props.onToggle}
            style="IMAGE"
            title="Image"
            active={active}>
            <ImageIcon />
        </Button>);
    }
}

export {
    Media,
    ImageControls as Image
};
