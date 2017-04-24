var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import StyleButton from '../button/index.jsx';
import COLORS from './colors';
import './index.scss';

var ColorControls = function (_Component) {
    _inherits(ColorControls, _Component);

    function ColorControls(props) {
        _classCallCheck(this, ColorControls);

        var _this = _possibleConstructorReturn(this, (ColorControls.__proto__ || Object.getPrototypeOf(ColorControls)).call(this, props));

        _this.state = {
            activeColor: '#333'
        };
        return _this;
    }

    _createClass(ColorControls, [{
        key: 'render',
        value: function render() {
            var currentStyle = this.props.editorState.getCurrentInlineStyle();

            var colors = COLORS.map(function (type, index) {
                return React.createElement(
                    'li',
                    { key: index },
                    React.createElement(
                        'div',
                        { style: { backgroundColor: type.color, color: type.color } },
                        type.label
                    )
                );
            });

            return React.createElement(
                'div',
                { className: 'rich-editor-tools-colors', title: 'Colors' },
                React.createElement(
                    'div',
                    { className: 'rich-editor-tools-colors-active' },
                    'A'
                ),
                React.createElement(
                    'ul',
                    { className: 'rich-editor-tools-colors-select' },
                    ' ',
                    colors,
                    ' '
                )
            );
        }
    }]);

    return ColorControls;
}(Component);

;

var _default = ColorControls;
export default _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(ColorControls, 'ColorControls', 'src/colors/index.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', 'src/colors/index.jsx');
}();

;