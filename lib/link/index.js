var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { LinkIcon } from '../svg/icon';
import Button from '../button/index';

var findLinkEntities = function findLinkEntities(contentBlock, callback, contentState) {
    contentBlock.findEntityRanges(function (character) {
        var entityKey = character.getEntity();
        return entityKey !== null && contentState.getEntity(entityKey).getType() === 'LINK';
    }, callback);
};

var LINK = function LINK(props) {
    var _props$contentState$g = props.contentState.getEntity(props.entityKey).getData(),
        url = _props$contentState$g.url,
        text = _props$contentState$g.text;

    var content = null;
    if (text) {
        content = text;
    } else {
        content = props.children;
    }
    return React.createElement(
        'a',
        { href: url, target: '_blank', title: text },
        content
    );
};

var LinkControls = function (_Component) {
    _inherits(LinkControls, _Component);

    function LinkControls(props) {
        _classCallCheck(this, LinkControls);

        return _possibleConstructorReturn(this, (LinkControls.__proto__ || Object.getPrototypeOf(LinkControls)).call(this, props));
    }

    _createClass(LinkControls, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                editorState = _props.editorState,
                onToggle = _props.onToggle;

            var currentStyle = editorState.getCurrentInlineStyle();
            var active = currentStyle.has('LINK');
            return React.createElement(
                Button,
                {
                    onToggle: this.props.onToggle,
                    style: 'LINK',
                    title: 'Link',
                    active: active },
                React.createElement(LinkIcon, null)
            );
        }
    }]);

    return LinkControls;
}(Component);

module.exports = {
    LINK: LINK,
    findLinkEntities: findLinkEntities,
    Link: LinkControls
};
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(findLinkEntities, 'findLinkEntities', 'src/link/index.jsx');

    __REACT_HOT_LOADER__.register(LINK, 'LINK', 'src/link/index.jsx');

    __REACT_HOT_LOADER__.register(LinkControls, 'LinkControls', 'src/link/index.jsx');
}();

;