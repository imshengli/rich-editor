var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { ImageIcon } from '../svg/icon';
import Button from '../button/index';
import './index.scss';

var Image = function Image(props) {
    var text = props.alt && React.createElement(
        'p',
        { className: 'rich-editor-image-text' },
        props.alt
    );
    return React.createElement(
        'div',
        { className: 'rich-editor-image' },
        React.createElement(
            'a',
            { href: props.src, target: '_blank' },
            React.createElement('img', { src: props.src, alt: text })
        ),
        text
    );
};

var Audio = function Audio(props) {
    return React.createElement(
        'div',
        { className: 'rich-editor-audio' },
        React.createElement('audio', { controls: true, src: props.src })
    );
};

var Video = function Video(props) {
    return React.createElement(
        'div',
        { className: 'rich-editor-video' },
        React.createElement('video', { controls: true, src: props.src })
    );
};

var Media = function Media(props) {
    var entity = props.contentState.getEntity(props.block.getEntityAt(0));

    var _entity$getData = entity.getData(),
        src = _entity$getData.src,
        alt = _entity$getData.alt;

    var type = entity.getType().toLowerCase();
    var media = void 0;
    if (type === 'audio') {
        media = React.createElement(Audio, { src: src });
    } else if (type === 'image') {
        media = React.createElement(Image, { src: src, alt: alt });
    } else if (type === 'video') {
        media = React.createElement(Video, { src: src });
    }
    return media;
};

var ImageControls = function (_Component) {
    _inherits(ImageControls, _Component);

    function ImageControls(props) {
        _classCallCheck(this, ImageControls);

        return _possibleConstructorReturn(this, (ImageControls.__proto__ || Object.getPrototypeOf(ImageControls)).call(this, props));
    }

    _createClass(ImageControls, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                editorState = _props.editorState,
                onToggle = _props.onToggle;

            var currentStyle = editorState.getCurrentInlineStyle();
            var active = currentStyle.has('IMAGE');
            return React.createElement(
                Button,
                {
                    onToggle: this.props.onToggle,
                    style: 'IMAGE',
                    title: 'Image',
                    active: active },
                React.createElement(ImageIcon, null)
            );
        }
    }]);

    return ImageControls;
}(Component);

module.exports = {
    Media: Media,
    Image: ImageControls
};
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Image, 'Image', 'src/image/index.jsx');

    __REACT_HOT_LOADER__.register(Audio, 'Audio', 'src/image/index.jsx');

    __REACT_HOT_LOADER__.register(Video, 'Video', 'src/image/index.jsx');

    __REACT_HOT_LOADER__.register(Media, 'Media', 'src/image/index.jsx');

    __REACT_HOT_LOADER__.register(ImageControls, 'ImageControls', 'src/image/index.jsx');
}();

;