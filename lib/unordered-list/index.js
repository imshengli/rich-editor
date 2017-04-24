var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { UnOrderedListIcon } from '../svg/icon';
import Button from '../button/index';

var UnOrderedListControls = function (_Component) {
    _inherits(UnOrderedListControls, _Component);

    function UnOrderedListControls(props) {
        _classCallCheck(this, UnOrderedListControls);

        return _possibleConstructorReturn(this, (UnOrderedListControls.__proto__ || Object.getPrototypeOf(UnOrderedListControls)).call(this, props));
    }

    _createClass(UnOrderedListControls, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                editorState = _props.editorState,
                onToggle = _props.onToggle;

            var selection = editorState.getSelection();
            var blockType = editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType();
            var active = blockType === 'unordered-list-item';
            return React.createElement(
                Button,
                {
                    onToggle: onToggle,
                    style: 'unordered-list-item',
                    title: 'UnOrdered List',
                    active: active },
                React.createElement(UnOrderedListIcon, null)
            );
        }
    }]);

    return UnOrderedListControls;
}(Component);

var _default = UnOrderedListControls;
export default _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(UnOrderedListControls, 'UnOrderedListControls', 'src/unordered-list/index.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', 'src/unordered-list/index.jsx');
}();

;