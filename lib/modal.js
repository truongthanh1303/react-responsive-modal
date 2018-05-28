'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactLifecyclesCompat = require('react-lifecycles-compat');

var _reactMinimalistPortal = require('react-minimalist-portal');

var _reactMinimalistPortal2 = _interopRequireDefault(_reactMinimalistPortal);

var _CSSTransition = require('react-transition-group/CSSTransition');

var _CSSTransition2 = _interopRequireDefault(_CSSTransition);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _closeIcon = require('./close-icon');

var _closeIcon2 = _interopRequireDefault(_closeIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import noScroll from 'no-scroll';


var Modal = function (_Component) {
  _inherits(Modal, _Component);

  _createClass(Modal, null, [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (!prevState.showPortal && nextProps.open) {
        return {
          showPortal: true
        };
      }
      return null;
    }
  }]);

  function Modal(props) {
    _classCallCheck(this, Modal);

    var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));

    _this.isScrollBarClick = function (event) {
      return event.clientX >= document.documentElement.offsetWidth;
    };

    _this.handleOpen = function () {
      _this.blockScroll();
      document.addEventListener('keydown', _this.handleKeydown);
    };

    _this.handleClose = function () {
      _this.unblockScroll();
      document.removeEventListener('keydown', _this.handleKeydown);
    };

    _this.handleClickOverlay = function (event) {
      var _this$props = _this.props,
          classes = _this$props.classes,
          closeOnOverlayClick = _this$props.closeOnOverlayClick;

      if (typeof event.target.className !== 'string') {
        return;
      }

      var className = event.target.className.split(' ');
      if (className.indexOf(classes.overlay) === -1 || _this.isScrollBarClick(event) || !closeOnOverlayClick) {
        return;
      }

      if (_this.props.onOverlayClick) {
        _this.props.onOverlayClick(event);
      }

      event.stopPropagation();
      _this.props.onClose(event);
    };

    _this.handleClickCloseIcon = function (event) {
      event.stopPropagation();
      _this.props.onClose(event);
    };

    _this.handleKeydown = function (event) {
      if (event.keyCode !== 27) {
        return;
      }

      if (_this.props.onEscKeyDown) {
        _this.props.onEscKeyDown(event);
      }

      if (_this.props.closeOnEsc) {
        _this.props.onClose(event);
      }
    };

    _this.handleExited = function () {
      if (_this.props.onExited) {
        _this.props.onExited();
      }

      _this.setState({ showPortal: false });
      _this.unblockScroll();
    };

    _this.unblockScroll = function () {
      var openedModals = document.getElementsByClassName(_this.props.classes.modal);
      if (openedModals.length === 1) {
        // noScroll.off();
        var doc = document.documentElement;
        doc.style.overflow = '';
      }
    };

    _this.state = {
      showPortal: props.open
    };
    return _this;
  }

  _createClass(Modal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // Block scroll when initial prop is open
      if (this.props.open) {
        this.handleOpen();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.showPortal && !this.state.showPortal) {
        this.handleClose();
      } else if (!prevProps.open && this.props.open) {
        this.handleOpen();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.open) {
        this.handleClose();
      }
    }
  }, {
    key: 'blockScroll',


    // eslint-disable-next-line class-methods-use-this
    value: function blockScroll() {
      var doc = document.documentElement;
      doc.style.overflow = 'hidden';
      // noScroll.on();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          open = _props.open,
          little = _props.little,
          classes = _props.classes,
          classNames = _props.classNames,
          styles = _props.styles,
          showCloseIcon = _props.showCloseIcon,
          closeIconSize = _props.closeIconSize,
          closeIconSvgPath = _props.closeIconSvgPath,
          animationDuration = _props.animationDuration;
      var showPortal = this.state.showPortal;


      if (!showPortal) {
        return null;
      }

      return _react2.default.createElement(
        _reactMinimalistPortal2.default,
        null,
        _react2.default.createElement(
          _CSSTransition2.default,
          {
            'in': open,
            appear: true,
            classNames: {
              appear: classNames.transitionEnter || classes.transitionEnter,
              appearActive: classNames.transitionEnterActive || classes.transitionEnterActive,
              enter: classNames.transitionEnter || classes.transitionEnter,
              enterActive: classNames.transitionEnterActive || classes.transitionEnterActive,
              exit: classNames.transitionExit || classes.transitionExit,
              exitActive: classNames.transitionExitActive || classes.transitionExitActive
            },
            timeout: animationDuration,
            onExited: this.handleExited
          },
          _react2.default.createElement(
            'div',
            {
              className: (0, _classnames2.default)(classes.overlay, little ? classes.overlayLittle : null, classNames.overlay),
              onMouseDown: this.handleClickOverlay,
              style: styles.overlay
            },
            _react2.default.createElement(
              'div',
              {
                className: (0, _classnames2.default)(classes.modal, classNames.modal),
                style: styles.modal
              },
              this.props.children,
              showCloseIcon && _react2.default.createElement(_closeIcon2.default, {
                classes: classes,
                classNames: classNames,
                styles: styles,
                closeIconSize: closeIconSize,
                closeIconSvgPath: closeIconSvgPath,
                onClickCloseIcon: this.handleClickCloseIcon
              })
            )
          )
        )
      );
    }
  }]);

  return Modal;
}(_react.Component);

Modal.propTypes = {
  /**
   * Is the modal closable when user press esc key.
   */
  closeOnEsc: _propTypes2.default.bool,
  /**
   * Is the modal closable when user click on overlay.
   */
  closeOnOverlayClick: _propTypes2.default.bool,
  /**
   * Callback fired when the Modal has exited and the animation is finished.
   */
  onExited: _propTypes2.default.func,
  /**
   * Callback fired when the Modal is requested to be closed by a click on the overlay or when user press esc key.
   */
  onClose: _propTypes2.default.func.isRequired,
  /**
   * Callback fired when the escape key is pressed.
   */
  onEscKeyDown: _propTypes2.default.func,
  /**
   * Callback fired when the overlay is clicked.
   */
  onOverlayClick: _propTypes2.default.func,
  /**
   * Control if the modal is open or not.
   */
  open: _propTypes2.default.bool.isRequired,
  /**
   * An object containing classNames to style the modal, can have properties 'overlay' (classname for overlay div), 'modal' (classname for modal content div), 'closeButton' (classname for the button that contain the close icon), 'closeIcon' (classname for close icon svg). You can customize the transition with 'transitionEnter', 'transitionEnterActive', 'transitionExit', 'transitionExitActive'
   */
  classNames: _propTypes2.default.object,
  /**
   * An object containing the styles objects to style the modal, can have properties 'overlay', 'modal', 'closeButton', 'closeIcon'.
   */
  styles: _propTypes2.default.object,
  /**
   * The content of the modal.
   */
  children: _propTypes2.default.node,
  /**
   * @internal
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * Is the dialog centered (**when you don't have a lot of content**).
   */
  little: _propTypes2.default.bool,
  /**
   * Show the close icon.
   */
  showCloseIcon: _propTypes2.default.bool,
  /**
   * Close icon size.
   */
  closeIconSize: _propTypes2.default.number,
  /**
   * A valid svg path to show as icon.
   */
  closeIconSvgPath: _propTypes2.default.node,
  /**
   * Animation duration in milliseconds.
   */
  animationDuration: _propTypes2.default.number
};

Modal.defaultProps = {
  closeOnEsc: true,
  closeOnOverlayClick: true,
  onExited: null,
  onEscKeyDown: null,
  onOverlayClick: null,
  showCloseIcon: true,
  closeIconSize: 28,
  closeIconSvgPath: _react2.default.createElement('path', { d: 'M28.5 9.62L26.38 7.5 18 15.88 9.62 7.5 7.5 9.62 15.88 18 7.5 26.38l2.12 2.12L18 20.12l8.38 8.38 2.12-2.12L20.12 18z' }),
  classNames: {},
  styles: {},
  children: null,
  little: false,
  animationDuration: 500
};

(0, _reactLifecyclesCompat.polyfill)(Modal);

exports.default = Modal;