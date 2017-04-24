var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import classNames from 'classnames';
import './index.scss';

var ButtonControls = function (_Component) {
    _inherits(ButtonControls, _Component);

    function ButtonControls(props) {
        _classCallCheck(this, ButtonControls);

        // active: button default state, false
        var _this = _possibleConstructorReturn(this, (ButtonControls.__proto__ || Object.getPrototypeOf(ButtonControls)).call(this, props));

        _this.state = {
            active: false
        };
        return _this;
    }

    _createClass(ButtonControls, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(next) {
            // When receive new props, set the button state.
            this.setState({
                active: next.active || ''
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var btnClassNames = classNames({
                'rich-editor-tools-button': true,
                'rich-editor-tools-button-active': this.state.active
            });
            // const clickEvent = this.props.clickEvent || (() => {});
            return React.createElement(
                'div',
                { title: this.props.title, className: btnClassNames, style: this.props.activeStyle, onMouseDown: this.onToggle.bind(this) },
                this.props.label,
                ' ',
                this.props.children
            );
        }
    }, {
        key: 'onToggle',
        value: function onToggle(e) {
            e.preventDefault();
            this.props.onToggle(this.props.style);
            // Set button state: true or false
            this.setState({
                active: !this.state.active
            });
        }
    }]);

    return ButtonControls;
}(Component);

var _default = ButtonControls;
export default _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(ButtonControls, 'ButtonControls', 'src/button/index.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', 'src/button/index.jsx');
}();

;