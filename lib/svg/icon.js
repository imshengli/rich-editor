var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';

var QuoteIcon = function (_Component) {
    _inherits(QuoteIcon, _Component);

    function QuoteIcon() {
        _classCallCheck(this, QuoteIcon);

        return _possibleConstructorReturn(this, (QuoteIcon.__proto__ || Object.getPrototypeOf(QuoteIcon)).apply(this, arguments));
    }

    _createClass(QuoteIcon, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "svg",
                _extends({ x: "0px", y: "0px", width: "30px", height: "30px", viewBox: "0 0 30 30" }, this.props),
                React.createElement(
                    "g",
                    null,
                    React.createElement(
                        "g",
                        { id: "right_x5F_quote" },
                        React.createElement(
                            "g",
                            null,
                            React.createElement("path", { fill: "#666767", d: "M22.001,20.766V15h-3.844c0-2.119,1.723-3.844,3.844-3.844V9.234c-3.18,0-5.766,2.587-5.766,5.766v5.766 H22.001z" }),
                            React.createElement("path", { fill: "#666767", d: "M12.391,20.766V15H8.547c0-2.119,1.723-3.844,3.844-3.844V9.234c-3.18,0-5.766,2.587-5.766,5.766v5.766 H12.391z" })
                        )
                    )
                )
            );
        }
    }]);

    return QuoteIcon;
}(Component);

var CodingIcon = function (_Component2) {
    _inherits(CodingIcon, _Component2);

    function CodingIcon() {
        _classCallCheck(this, CodingIcon);

        return _possibleConstructorReturn(this, (CodingIcon.__proto__ || Object.getPrototypeOf(CodingIcon)).apply(this, arguments));
    }

    _createClass(CodingIcon, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "svg",
                _extends({ x: "0px", y: "0px", width: "30px", height: "30px", viewBox: "0 0 30 30" }, this.props),
                React.createElement(
                    "g",
                    null,
                    React.createElement("path", { fill: "#666666", d: "M15.643,9.584c-0.417-0.159-0.848,0.176-0.964,0.75l-1.74,8.618c-0.116,0.573,0.128,1.167,0.545,1.326 c0.07,0.027,0.141,0.04,0.21,0.04c0.343,0,0.658-0.312,0.754-0.789l1.74-8.618C16.304,10.338,16.06,9.744,15.643,9.584z" }),
                    React.createElement("path", { fill: "#666666", d: "M10.366,9.794c-0.333-0.38-0.826-0.318-1.103,0.139l-2.61,4.318c-0.242,0.4-0.241,0.98,0.001,1.379 l2.61,4.3c0.155,0.255,0.377,0.387,0.601,0.387c0.177,0,0.355-0.082,0.502-0.25c0.332-0.381,0.376-1.061,0.099-1.517l-2.192-3.611 l2.193-3.628C10.744,10.854,10.698,10.175,10.366,9.794z" }),
                    React.createElement("path", { fill: "#666666", d: "M22.474,14.232l-2.61-4.3c-0.277-0.457-0.771-0.518-1.103-0.136c-0.332,0.381-0.376,1.061-0.099,1.517 l2.192,3.611l-2.193,3.628c-0.277,0.457-0.231,1.137,0.101,1.517c0.146,0.167,0.324,0.249,0.5,0.249 c0.225,0,0.448-0.132,0.603-0.389l2.61-4.318C22.716,15.211,22.716,14.631,22.474,14.232z" })
                )
            );
        }
    }]);

    return CodingIcon;
}(Component);

var UnOrderedListIcon = function (_Component3) {
    _inherits(UnOrderedListIcon, _Component3);

    function UnOrderedListIcon() {
        _classCallCheck(this, UnOrderedListIcon);

        return _possibleConstructorReturn(this, (UnOrderedListIcon.__proto__ || Object.getPrototypeOf(UnOrderedListIcon)).apply(this, arguments));
    }

    _createClass(UnOrderedListIcon, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "svg",
                _extends({ x: "0px", y: "0px", width: "30px", height: "30px", viewBox: "0 0 30 30" }, this.props),
                React.createElement(
                    "g",
                    null,
                    React.createElement("path", { fill: "#666666", d: "M21.308,20.639H10.622c-0.44,0-0.797-0.357-0.797-0.797s0.357-0.797,0.797-0.797h10.686 c0.44,0,0.797,0.357,0.797,0.797S21.748,20.639,21.308,20.639z" }),
                    React.createElement("path", { fill: "#666666", d: "M21.308,15.634H10.622c-0.44,0-0.797-0.357-0.797-0.797s0.357-0.797,0.797-0.797h10.686 c0.44,0,0.797,0.357,0.797,0.797C22.105,15.277,21.748,15.634,21.308,15.634z" }),
                    React.createElement("path", { fill: "#666666", d: "M21.308,10.629H10.622c-0.44,0-0.797-0.357-0.797-0.797s0.357-0.797,0.797-0.797h10.686 c0.44,0,0.797,0.357,0.797,0.797S21.748,10.629,21.308,10.629z" }),
                    React.createElement("circle", { fill: "#666666", cx: "7.196", cy: "9.893", r: "1.071" }),
                    React.createElement("circle", { fill: "#666666", cx: "7.196", cy: "14.837", r: "1.071" }),
                    React.createElement("circle", { fill: "#666666", cx: "7.196", cy: "19.78", r: "1.071" })
                )
            );
        }
    }]);

    return UnOrderedListIcon;
}(Component);

var OrderedListIcon = function (_Component4) {
    _inherits(OrderedListIcon, _Component4);

    function OrderedListIcon() {
        _classCallCheck(this, OrderedListIcon);

        return _possibleConstructorReturn(this, (OrderedListIcon.__proto__ || Object.getPrototypeOf(OrderedListIcon)).apply(this, arguments));
    }

    _createClass(OrderedListIcon, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "svg",
                _extends({ x: "0px", y: "0px", width: "30px", height: "30px", viewBox: "0 0 30 30" }, this.props),
                React.createElement(
                    "g",
                    null,
                    React.createElement("path", { fill: "#666666", d: "M21.308,20.639H10.622c-0.44,0-0.797-0.357-0.797-0.797s0.357-0.797,0.797-0.797h10.686 c0.44,0,0.797,0.357,0.797,0.797S21.748,20.639,21.308,20.639z" }),
                    React.createElement("path", { fill: "#666666", d: "M21.308,15.634H10.622c-0.44,0-0.797-0.357-0.797-0.797s0.357-0.797,0.797-0.797h10.686 c0.44,0,0.797,0.357,0.797,0.797C22.105,15.277,21.748,15.634,21.308,15.634z" }),
                    React.createElement("path", { fill: "#666666", d: "M21.308,10.629H10.622c-0.44,0-0.797-0.357-0.797-0.797s0.357-0.797,0.797-0.797h10.686 c0.44,0,0.797,0.357,0.797,0.797S21.748,10.629,21.308,10.629z" }),
                    React.createElement("circle", { fill: "none", cx: "7.437", cy: "9.852", r: "1.071" }),
                    React.createElement(
                        "text",
                        { transform: "matrix(0.9844 0 0 1 6.0537 11.2355)", fill: "#666666", fontFamily: "'Arial-Black'", fontSize: "4.1217" },
                        "1"
                    ),
                    React.createElement(
                        "text",
                        { transform: "matrix(0.9844 0 0 1 6.0538 16.3435)", fill: "#666666", fontFamily: "'Arial-Black'", fontSize: "4.1217" },
                        "2"
                    ),
                    React.createElement(
                        "text",
                        { transform: "matrix(0.9844 0 0 1 6.0536 21.4053)", fill: "#666666", fontFamily: "'Arial-Black'", fontSize: "4.1217" },
                        "3"
                    )
                )
            );
        }
    }]);

    return OrderedListIcon;
}(Component);

var LinkIcon = function (_Component5) {
    _inherits(LinkIcon, _Component5);

    function LinkIcon() {
        _classCallCheck(this, LinkIcon);

        return _possibleConstructorReturn(this, (LinkIcon.__proto__ || Object.getPrototypeOf(LinkIcon)).apply(this, arguments));
    }

    _createClass(LinkIcon, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "svg",
                _extends({ x: "0px", y: "0px", width: "30px", height: "30px", viewBox: "0 0 30 30" }, this.props),
                React.createElement(
                    "g",
                    null,
                    React.createElement("path", { fill: "#222222", d: "M19.813,9.911l-0.047-0.047c-1.096-1.095-2.888-1.095-3.984,0l-2.538,2.538 c-1.095,1.095-1.095,2.888,0,3.983l0.047,0.047c0.091,0.091,0.188,0.174,0.288,0.25l0.929-0.929 c-0.108-0.064-0.211-0.14-0.304-0.233l-0.047-0.047c-0.595-0.595-0.595-1.562,0-2.157l2.538-2.538c0.595-0.595,1.563-0.595,2.157,0 l0.047,0.047c0.595,0.595,0.595,1.563,0,2.157l-1.148,1.148c0.199,0.492,0.294,1.017,0.286,1.541l1.776-1.776 C20.909,12.799,20.909,11.006,19.813,9.911z M16.062,13.568c-0.091-0.091-0.188-0.174-0.288-0.249l-0.929,0.929 c0.108,0.064,0.211,0.141,0.304,0.233l0.047,0.047c0.595,0.595,0.595,1.563,0,2.157l-2.538,2.538c-0.595,0.595-1.563,0.595-2.157,0 l-0.047-0.047c-0.595-0.595-0.595-1.563,0-2.157l1.148-1.148c-0.199-0.492-0.294-1.017-0.286-1.541L9.54,16.106 c-1.095,1.095-1.095,2.888,0,3.984l0.047,0.047c1.096,1.095,2.888,1.095,3.984,0l2.538-2.538c1.095-1.095,1.095-2.888,0-3.984 L16.062,13.568z" })
                )
            );
        }
    }]);

    return LinkIcon;
}(Component);

var ImageIcon = function (_Component6) {
    _inherits(ImageIcon, _Component6);

    function ImageIcon() {
        _classCallCheck(this, ImageIcon);

        return _possibleConstructorReturn(this, (ImageIcon.__proto__ || Object.getPrototypeOf(ImageIcon)).apply(this, arguments));
    }

    _createClass(ImageIcon, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "svg",
                _extends({ x: "0px", y: "0px", width: "30px", height: "30px", viewBox: "0 0 30 30" }, this.props),
                React.createElement(
                    "g",
                    null,
                    React.createElement("path", { fill: "#000000", d: "M22.035,8.577H7.215c-0.146,0-0.265,0.118-0.265,0.265v11.644c0,0.146,0.119,0.265,0.265,0.265h14.82 c0.146,0,0.265-0.118,0.265-0.265V8.841C22.3,8.695,22.181,8.577,22.035,8.577z M21.77,20.221H7.48V9.106h14.29V20.221z" }),
                    React.createElement("path", { fill: "#000000", d: "M11.185,14.435c0.813,0,1.474-0.661,1.474-1.474c0-0.813-0.661-1.474-1.474-1.474 c-0.813,0-1.474,0.661-1.474,1.474S10.372,14.435,11.185,14.435z M11.185,12.017c0.521,0,0.944,0.424,0.944,0.944 c0,0.521-0.424,0.944-0.944,0.944c-0.521,0-0.944-0.424-0.944-0.944C10.24,12.441,10.664,12.017,11.185,12.017z" }),
                    React.createElement("path", { fill: "#000000", d: "M8.803,19.162c0.062,0,0.124-0.022,0.175-0.066l4.317-3.801l2.726,2.726c0.103,0.103,0.271,0.103,0.374,0 s0.103-0.271,0-0.374l-1.272-1.272l2.43-2.661l2.98,2.732c0.108,0.099,0.275,0.091,0.374-0.016 c0.099-0.108,0.092-0.275-0.016-0.374l-3.176-2.911c-0.052-0.047-0.121-0.071-0.191-0.069c-0.07,0.003-0.136,0.034-0.184,0.086 l-2.592,2.839l-1.255-1.255c-0.099-0.099-0.257-0.104-0.362-0.012l-4.503,3.965c-0.11,0.097-0.12,0.264-0.024,0.374 C8.657,19.132,8.73,19.162,8.803,19.162z" })
                )
            );
        }
    }]);

    return ImageIcon;
}(Component);

module.exports = {
    QuoteIcon: QuoteIcon,
    CodingIcon: CodingIcon,
    UnOrderedListIcon: UnOrderedListIcon,
    OrderedListIcon: OrderedListIcon,
    LinkIcon: LinkIcon,
    ImageIcon: ImageIcon
};
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(QuoteIcon, "QuoteIcon", "src/svg/icon.jsx");

    __REACT_HOT_LOADER__.register(CodingIcon, "CodingIcon", "src/svg/icon.jsx");

    __REACT_HOT_LOADER__.register(UnOrderedListIcon, "UnOrderedListIcon", "src/svg/icon.jsx");

    __REACT_HOT_LOADER__.register(OrderedListIcon, "OrderedListIcon", "src/svg/icon.jsx");

    __REACT_HOT_LOADER__.register(LinkIcon, "LinkIcon", "src/svg/icon.jsx");

    __REACT_HOT_LOADER__.register(ImageIcon, "ImageIcon", "src/svg/icon.jsx");
}();

;