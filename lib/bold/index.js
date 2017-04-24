var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import Button from '../button/index';

var BoldControls = function (_Component) {
    _inherits(BoldControls, _Component);

    function BoldControls(props) {
        _classCallCheck(this, BoldControls);

        return _possibleConstructorReturn(this, (BoldControls.__proto__ || Object.getPrototypeOf(BoldControls)).call(this, props));
    }

    _createClass(BoldControls, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                editorState = _props.editorState,
                onToggle = _props.onToggle;

            var currentStyle = editorState.getCurrentInlineStyle();
            var active = currentStyle.has('BOLD');
            // const activeStyle = active ? this.props.activeStyle : null;
            var activeStyle = this.props.activeStyle;
            return React.createElement(Button, {
                label: 'B',
                onToggle: onToggle,
                style: 'BOLD',
                title: 'Bold',
                activeStyle: activeStyle,
                active: active });
        }
    }]);

    return BoldControls;
}(Component);

var _default = BoldControls;
export default _default;

BoldControls.defaultProps = {
    activeStyle: {
        fontWeight: 'bold',
        lineHeight: '28px'
    }
};
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(BoldControls, 'BoldControls', 'src/bold/index.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', 'src/bold/index.jsx');
}();

;