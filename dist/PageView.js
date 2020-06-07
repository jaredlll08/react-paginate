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

var PageView = function PageView(props) {
  var pageClassName = props.pageClassName;
  var pageLinkClassName = props.pageLinkClassName;

  var href = props.href;
  var as = props.as;
  var ariaLabel = props.ariaLabel || 'Page ' + props.page + (props.extraAriaContext ? ' ' + props.extraAriaContext : '');
  var ariaCurrent = null;

  if (props.selected) {
    ariaCurrent = 'page';

    ariaLabel = props.ariaLabel || 'Page ' + props.page + ' is your current page';

    if (typeof pageClassName !== 'undefined') {
      pageClassName = pageClassName + ' ' + props.activeClassName;
    } else {
      pageClassName = props.activeClassName;
    }

    if (typeof pageLinkClassName !== 'undefined') {
      if (typeof props.activeLinkClassName !== 'undefined') {
        pageLinkClassName = pageLinkClassName + ' ' + props.activeLinkClassName;
      }
    } else {
      pageLinkClassName = props.activeLinkClassName;
    }
  }

  return _react2.default.createElement(
    'li',
    { className: pageClassName },
    href.length ? _react2.default.createElement(
      _link2.default,
      { href: href, as: as },
      _react2.default.createElement(
        'a',
        {
          role: 'button',
          className: pageLinkClassName,
          tabIndex: '0',
          'aria-label': ariaLabel,
          'aria-current': ariaCurrent
        },
        props.page
      )
    ) : _react2.default.createElement(
      'span',
      {
        role: 'button',
        className: pageLinkClassName,
        tabIndex: '0',
        'aria-label': ariaLabel,
        'aria-current': ariaCurrent
      },
      props.page
    )
  );
};

PageView.propTypes = {
  selected: _propTypes2.default.bool.isRequired,
  pageClassName: _propTypes2.default.string,
  pageLinkClassName: _propTypes2.default.string,
  activeClassName: _propTypes2.default.string,
  activeLinkClassName: _propTypes2.default.string,
  extraAriaContext: _propTypes2.default.string,
  href: _propTypes2.default.string,
  as: _propTypes2.default.string,
  ariaLabel: _propTypes2.default.string,
  page: _propTypes2.default.number.isRequired
};

exports.default = PageView;
//# sourceMappingURL=PageView.js.map