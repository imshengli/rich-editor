var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import Button from '../button/index.jsx';
import './index.scss';

var QuoteControls = function (_Component) {
    _inherits(QuoteControls, _Component);

    function QuoteControls(props) {
        _classCallCheck(this, QuoteControls);

        return _possibleConstructorReturn(this, (QuoteControls.__proto__ || Object.getPrototypeOf(QuoteControls)).call(this, props));
    }

    _createClass(QuoteControls, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                editorState = _props.editorState,
                onToggle = _props.onToggle;

            var selection = editorState.getSelection();
            var blockType = editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType();
            var active = blockType === 'header-two';
            return React.createElement(Button, {
                label: 'H',
                onToggle: onToggle,
                style: 'header-two',
                title: 'Header',
                active: active });
        }
    }]);

    return QuoteControls;
}(Component);

var _default = QuoteControls;
export default _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(QuoteControls, 'QuoteControls', 'src/header/index.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', 'src/header/index.jsx');
}();

;