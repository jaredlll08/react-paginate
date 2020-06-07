'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _link = require('next/link');

var _link2 = _interopRequireDefault(_link);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BreakView = function BreakView(props) {
  var breakLabel = props.breakLabel,
      breakClassName = props.breakClassName,
      breakLinkClassName = props.breakLinkClassName,
      href = props.href,
      as = props.as;

  var className = breakClassName || 'break';

  return _react2.default.createElement(
    'li',
    { className: className },
    href.length ? _react2.default.createElement(
      _link2.default,
      { href: href, as: as },
      _react2.default.createElement(
        'a',
        { className: breakLinkClassName, role: 'button', tabIndex: '0' },
        breakLabel
      )
    ) : _react2.default.createElement(
      'span',
      { className: breakLinkClassName, role: 'button', tabIndex: '0' },
      breakLabel
    )
  );
};

BreakView.propTypes = {
  breakLabel: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  breakClassName: _propTypes2.default.string,
  breakLinkClassName: _propTypes2.default.string,
  href: _propTypes2.default.string.isRequired,
  as: _propTypes2.default.string.isRequired
};

exports.default = BreakView;
//# sourceMappingURL=BreakView.js.map