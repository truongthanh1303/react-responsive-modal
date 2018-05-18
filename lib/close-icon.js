'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CloseIcon = function CloseIcon(_ref) {
  var classes = _ref.classes,
      classNames = _ref.classNames,
      styles = _ref.styles,
      closeIconSize = _ref.closeIconSize,
      closeIconSvgPath = _ref.closeIconSvgPath,
      onClickCloseIcon = _ref.onClickCloseIcon;
  return _react2.default.createElement(
    'button',
    {
      className: (0, _classnames2.default)(classes.closeButton, classNames.closeButton),
      style: styles.closeButton,
      onClick: onClickCloseIcon
    },
    _react2.default.createElement(
      'svg',
      {
        className: (0, _classnames2.default)(classes.closeIcon, classNames.closeIcon),
        style: styles.closeIcon,
        xmlns: 'http://www.w3.org/2000/svg',
        width: closeIconSize,
        height: closeIconSize,
        viewBox: '0 0 36 36'
      },
      closeIconSvgPath
    )
  );
};

CloseIcon.propTypes = {
  classNames: _propTypes2.default.object.isRequired,
  styles: _propTypes2.default.object.isRequired,
  classes: _propTypes2.default.object.isRequired,
  closeIconSize: _propTypes2.default.number.isRequired,
  closeIconSvgPath: _propTypes2.default.node.isRequired,
  onClickCloseIcon: _propTypes2.default.func.isRequired
};

exports.default = CloseIcon;