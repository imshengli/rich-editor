var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { OrderedListIcon } from '../svg/icon';
import Button from '../button/index';

var OrderedListControls = function (_Component) {
    _inherits(OrderedListControls, _Component);

    function OrderedListControls(props) {
        _classCallCheck(this, OrderedListControls);

        return _possibleConstructorReturn(this, (OrderedListControls.__proto__ || Object.getPrototypeOf(OrderedListControls)).call(this, props));
    }

    _createClass(OrderedListControls, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                editorState = _props.editorState,
                onToggle = _props.onToggle;

            var selection = editorState.getSelection();
            var blockType = editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType();
            var active = blockType === 'ordered-list-item';
            return React.createElement(
                Button,
                {
                    onToggle: onToggle,
                    style: 'ordered-list-item',
                    title: 'Ordered List',
                    active: active },
                React.createElement(OrderedListIcon, null)
            );
        }
    }]);

    return OrderedListControls;
}(Component);

var _default = OrderedListControls;
export default _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(OrderedListControls, 'OrderedListControls', 'src/ordered-list/index.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', 'src/ordered-list/index.jsx');
}();

;